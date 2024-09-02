//PART 1

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

// export default CipherGame;

//PART 2

import React, { useState, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Textarea2 } from "@/components/ui/textarea2";

export default function Translate() {
  const [text, setText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [option, setOption] = useState("");

  const workAN = (text) => {
    return text.replace(/[A-Za-z]/g, (char) => {
      const start = char <= 'Z' ? 65 : 97; // ASCII code for 'A' is 65, 'a' is 97
      return String.fromCharCode(((char.charCodeAt(0) - start + 13) % 26) + start);
    });
  };

  const workAZ = (text) => {
    return text.replace(/[A-Za-z]/g, (char) => {
      const start = char <= 'Z' ? 65 : 97;
      return String.fromCharCode(start + 25 - (char.charCodeAt(0) - start));
    });
  };

  useEffect(() => {
    let transformedText = text;

    switch (option) {
      case "an":
        transformedText = workAN(text);
        break;
      case "az":
        transformedText = workAZ(text);
        break;
      case "naz":
        transformedText = workAZ(workAN(text));
        break;
      case "zan":
        transformedText = workAN(workAZ(text));
        break;
      default:
        transformedText = text;
    }

    setOutputText(transformedText);
  }, [text, option]);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleChangeOption = (event) => {
    setOption(event.target.value);
  };

  return (
    <>
      <div className="justify-center flex mt-5">
        <button
          type="button"
          className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 mr-3"
          value="an"
          onClick={handleChangeOption}
        >
          AN
        </button>
        <button
          type="button"
          className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 mr-3"
          value="az"
          onClick={handleChangeOption}
        >
          AZ
        </button>
        <button
          type="button"
          className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 mr-3"
          value="naz"
          onClick={handleChangeOption}
        >
          NAZ
        </button>
        <button
          type="button"
          className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          value="zan"
          onClick={handleChangeOption}
        >
          ZAN
        </button>
      </div>
      <div className="container justify-center flex mt-8">
        <Textarea className="mr-3" onHandle={handleChange} />
        <Textarea2 className="ml-3" output={outputText} />
      </div>
      <p>{option}</p>
    </>
  );
}
