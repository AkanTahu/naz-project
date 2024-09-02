import React, { useState } from 'react';

// Function to apply AN cipher (ROT13)
const applyANCipher = (text) => {
  return text.replace(/[A-Za-z]/g, (char) => {
    const start = char <= 'Z' ? 65 : 97; // ASCII code for 'A' is 65, 'a' is 97
    return String.fromCharCode(((char.charCodeAt(0) - start + 13) % 26) + start);
  });
};

// Function to apply AZ cipher (Reversal)
const applyAZCipher = (text) => {
  return text.replace(/[A-Za-z]/g, (char) => {
    const start = char <= 'Z' ? 65 : 97;
    return String.fromCharCode(start + 25 - (char.charCodeAt(0) - start));
  });
};

const CipherGame = () => {
  const [inputText, setInputText] = useState('');
  const [anCipherText, setANCipherText] = useState('');
  const [azCipherText, setAZCipherText] = useState('');

  const handleInputChange = (event) => {
    const text = event.target.value;
    setInputText(text);
    setANCipherText(applyANCipher(text));
    setAZCipherText(applyAZCipher(text));
  };

  return (
    <div>
      <h2>Cipher Game</h2>
      <textarea
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter your text here"
      />
      <h3>AN Cipher (ROT13):</h3>
      <p>{anCipherText}</p>
      <h3>AZ Cipher (Reversal):</h3>
      <p>{azCipherText}</p>
    </div>
  );
};

export default CipherGame;
