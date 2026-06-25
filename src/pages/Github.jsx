import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, GitBranch, Star, Users } from 'lucide-react';

export function Github() {
  const [username, setUsername] = useState('arvincatalbas'); // default mock/initial user
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [terminalLogs, setTerminalLogs] = useState([
    { text: 'System initialized. Connection established with GitHub.', type: 'sys', id: 'init' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const logsEndRef = useRef(null);

  const addLog = useCallback((text, type = 'sys') => {
    setTerminalLogs((prev) => [...prev, { text, type, id: Date.now() + Math.random() }]);
  }, []);

  const fetchGitHubData = useCallback(async (user) => {
    setLoading(true);
    addLog(`$ curl -s https://api.github.com/users/${user}`, 'cmd');
    
    try {
      const userRes = await fetch(`https://api.github.com/users/${user}`);
      if (!userRes.ok) throw new Error(userRes.status === 404 ? 'USER NOT FOUND' : 'API LIMIT REACHED');
      
      const userData = await userRes.json();
      setProfile(userData);
      addLog(`Status: 200 OK. Parsing profile for "${userData.name || user}"...`, 'success');
      
      addLog(`$ fetch-repos --user=${user} --limit=3`, 'cmd');
      const reposRes = await fetch(`https://api.github.com/users/${user}/repos?sort=updated&per_page=3`);
      if (reposRes.ok) {
        const reposData = await reposRes.json();
        setRepos(reposData);
        addLog(`Found ${reposData.length} active repositories. Rendering nodes...`, 'success');
      } else {
        addLog(`Warning: Failed to fetch repositories.`, 'err');
      }
    } catch (err) {
      addLog(`Error: ${err.message}`, 'err');
      setProfile(null);
      setRepos([]);
    } finally {
      setLoading(false);
    }
  }, [addLog]);

  // Initial fetch
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchGitHubData(username);
    }, 0);
    return () => clearTimeout(timer);
  }, [fetchGitHubData, username]);

  // Auto-scroll terminal
  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalLogs]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    const nextUser = inputValue.trim();
    setUsername(nextUser);
    setInputValue('');
    fetchGitHubData(nextUser);
  };

  return (
    <motion.div
      className="page-overlay github-overlay"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="overlay-card glass panels-container github-layout">
        <div className="panel-header">
          <Terminal className="panel-icon" size={24} />
          <h2>GitHub Terminal Shell</h2>
        </div>
        <p className="panel-subtitle">Query the global network nodes in real-time.</p>

        {/* TERMINAL DISPLAY SCREEN */}
        <div className="terminal-screen glass-inner">
          <div className="terminal-scanline"></div>
          <div className="terminal-logs">
            {terminalLogs.map((log) => (
              <div key={log.id} className={`log-line log-${log.type}`}>
                {log.text}
              </div>
            ))}
            {loading && <div className="log-line log-sys loading-dots">Fetching data from GitHub API</div>}
            <div ref={logsEndRef} />
          </div>
        </div>

        {/* INPUT SHELL */}
        <form onSubmit={handleSubmit} className="terminal-input-form">
          <span className="terminal-prompt">root@gibson-os:~$</span>
          <input
            type="text"
            className="terminal-input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="type github username (e.g. torvalds)"
            disabled={loading}
          />
          <button type="submit" className="btn btn-terminal" disabled={loading}>
            Execute
          </button>
        </form>

        {/* PROFILE INFORMATION IF SUCCESSFULLY LOADED */}
        {profile && (
          <motion.div 
            className="github-profile-panel glass-inner"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="profile-top">
              <img src={profile.avatar_url} className="github-avatar" alt="Avatar" />
              <div>
                <h4>{profile.name || profile.login}</h4>
                <p>@{profile.login}</p>
                {profile.bio && <p className="github-bio">"{profile.bio}"</p>}
              </div>
            </div>
            
            <div className="profile-stats">
              <div className="stat-item">
                <Users size={14} />
                <span>{profile.followers} Followers</span>
              </div>
              <div className="stat-item">
                <Cpu size={14} />
                <span>{profile.public_repos} Repos</span>
              </div>
            </div>

            {repos.length > 0 && (
              <div className="pinned-repos">
                <h5>Latest Repositories:</h5>
                <div className="repo-mini-list">
                  {repos.map((repo) => (
                    <a 
                      key={repo.id} 
                      href={repo.html_url} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="repo-mini-card"
                    >
                      <div className="repo-mini-title">
                        <GitBranch size={12} />
                        <span>{repo.name}</span>
                      </div>
                      <div className="repo-mini-stars">
                        <Star size={10} />
                        <span>{repo.stargazers_count}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
export default Github;
