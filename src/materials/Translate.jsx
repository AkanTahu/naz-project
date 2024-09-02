import React, { useState, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Textarea2 } from "@/components/ui/textarea2";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Translate() {
  const [text, setText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [option, setOption] = useState("");

  const workAN = (text) => {
    return text.replace(/[A-Za-z]/g, (char) => {
      const start = char <= "Z" ? 65 : 97; // ASCII code for 'A' is 65, 'a' is 97
      return String.fromCharCode(
        ((char.charCodeAt(0) - start + 13) % 26) + start
      );
    });
  };

  const workAZ = (text) => {
    return text.replace(/[A-Za-z]/g, (char) => {
      const start = char <= "Z" ? 65 : 97;
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
      default:
        transformedText = text;
    }

    setOutputText(transformedText);
  }, [text, option]);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleChangeOption = (value) => {
    setOption(value);
  };

  return (
    <>
      <div className="font-supreme justify-center flex mt-5">
        <Select onValueChange={handleChangeOption}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Sandi</SelectLabel>
              <SelectItem value="an">AN</SelectItem>
              <SelectItem value="az">AZ</SelectItem>
              <SelectItem value="naz">NAZ</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="container justify-center flex mt-8">
        <Textarea
          className="mr-3 font-supreme font-medium text-3xl"
          onHandle={handleChange}
        />
        <Textarea2
          className="ml-3 font-supreme font-medium text-3xl"
          output={outputText}
        />
      </div>
      {/* <p>{option}asd</p> */}
    </>
  );
}
