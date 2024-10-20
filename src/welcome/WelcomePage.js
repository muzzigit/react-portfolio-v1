import React, { useEffect, useState, useMemo } from 'react';
import '../styles/WelcomePage.css';
import Background from '../background/Background';

const WelcomePage = ({ onFinish }) => {
  const [text, setText] = useState(['', '', '', '', '']);
  const [showCursor, setShowCursor] = useState(true);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  // Memoize the lines array so it's only created once
  const lines = useMemo(() => [
    { text: '  npm start', className: 'npm-start' },
    { text: ' > portfolio@0.1.0 start /muzzikhan', className: 'portfolio-info' },
    { text: ' > react-scripts start', className: 'output' },
    { text: '', className: 'empty-line' }, // Explicit empty line for spacing
    { text: ' Starting the development server...', className: 'output' },
  ], []);

  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;
    const typingSpeed = 65;

    const typeEffect = () => {
      if (lineIndex < lines.length) {
        if (charIndex < lines[lineIndex].text.length) {
          setText((prevText) => {
            const updatedText = [...prevText];
            if (!updatedText[lineIndex]) {
              updatedText[lineIndex] = '';
            }
            updatedText[lineIndex] += lines[lineIndex].text.charAt(charIndex);
            return updatedText;
          });
          charIndex++;
          setCurrentLineIndex(lineIndex);
          setTimeout(typeEffect, typingSpeed);
        } else {
          lineIndex++;
          charIndex = 0;
          setTimeout(typeEffect, typingSpeed);
        }
      } else {
        setTimeout(() => {
          setShowCursor(true);
          onFinish();
        }, 1000);
      }
    };

    typeEffect();

    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, [lines, onFinish]);

  return (
    <div className="welcome-container">
      <Background />
      <div className="terminal">
        <div className="terminal-header">
          <span className="terminal-button red"></span>
          <span className="terminal-button yellow"></span>
          <span className="terminal-button green"></span>
        </div>
        <div className="text-container">
          {text.map((line, index) => (
            <div key={index} className={lines[index].className}>
              {line}
              {index === currentLineIndex && showCursor && <span className="blink-cursor">|</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
