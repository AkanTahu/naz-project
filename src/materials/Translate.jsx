import React from "react";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Textarea2 } from "@/components/ui/textarea2";

export default function Translate() {
  const [text, setText] = useState("");
  const [option, setOption] = useState("");

  let output;

  switch (option) {
  }

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
        <Textarea className="mr-3" onHandle={handleChange} tes={123} />
        <Textarea2 className="ml-3" output={text} />
      </div>
      <p>{option}</p>
    </>
  );
}
