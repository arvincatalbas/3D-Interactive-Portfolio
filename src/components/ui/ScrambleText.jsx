import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * ScrambleText component
 * Applies a digital scramble/decrypt animation to text on load and hover.
 * Perfect for developer portfolios, terminal themes, and cyber aesthetics.
 */
export function ScrambleText({ text, speed = 30, delay = 500 }) {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  // A mix of symbols, letters, and numbers for a realistic decryption/scramble look
  const chars = 'XZ$#@!&?-+=*[]{}<>_\\/|~0123456789ABCDEF';

  const triggerScramble = useCallback(() => {
    // We allow triggering even if currently scrambling, to reset and scramble again on hover.
    setIsScrambling(true);
    
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    let iteration = 0;
    
    intervalRef.current = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            // Keep spaces intact
            if (char === ' ') return ' ';
            
            // If we have resolved this character index, show the actual character
            if (index < iteration) {
              return text[index];
            }
            
            // Otherwise, show a random character from our scramble character set
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
        setIsScrambling(false);
      }

      // Increment iteration step. A smaller increment (e.g. 1/3) makes the transition smoother
      iteration += 1 / 3;
    }, speed);
  }, [text, speed]);

  useEffect(() => {
    // Initial scramble on component mount
    timeoutRef.current = setTimeout(() => {
      triggerScramble();
    }, delay);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [delay, triggerScramble]);

  return (
    <span
      className={`scramble-text ${isScrambling ? 'scrambling' : ''}`}
      onMouseEnter={triggerScramble}
      style={{
        display: 'inline-block',
        cursor: 'pointer',
        userSelect: 'none',
      }}
    >
      {displayText}
    </span>
  );
}

export default ScrambleText;
