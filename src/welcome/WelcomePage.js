import React, { useEffect, useState } from 'react';
import '../styles/WelcomePage.css';
import Background from '../background/Background';

const WelcomePage = ({ onFinish }) => {
  const [text, setText] = useState('');
  const fullText = `>  npm start\n> portfolio@0.1.0 start /muzzikhan\n> react-scripts start\n\nStarting the development server...`;

  useEffect(() => {
    let index = 0;
    const typingSpeed = 30;

    const typeEffect = () => {
      if (index < fullText.length) {
        setText((prevText) => `${prevText}${fullText.charAt(index)}`);
        index++;
        setTimeout(typeEffect, typingSpeed);
      } else {
        setTimeout(() => {
          onFinish();
        }, 2000);
      }
    };

    typeEffect();
  }, [fullText, onFinish]);

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
          <span className="command">{text}</span>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
