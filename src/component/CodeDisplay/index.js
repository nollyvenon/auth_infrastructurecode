import React, { useEffect } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import * as CodeStyle from 'react-syntax-highlighter/dist/esm/styles/hljs';
import ClipboardJS from 'clipboard';
import './CodeDisplay.css';

const CodeDisplay = ({ code }) => {
  useEffect(() => {
    const clipboard = new ClipboardJS('.copy-button');

    clipboard.on('success', function (e) {
      e.clearSelection();
      alert('Code copied to clipboard!');
    });
  }, []);

  return (
    <div className="chat-bubble">
      <div className="code-container">
        <SyntaxHighlighter language="javascript" style={CodeStyle.ocean} showLineNumbers>
          {code}
        </SyntaxHighlighter>
      </div>
      <button className="copy-button" data-clipboard-text={code}>
        Copy Code
      </button>
    </div>
  );
};

export default CodeDisplay;
