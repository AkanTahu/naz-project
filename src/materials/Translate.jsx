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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Translate({ onHandleLang, ...props }) {
  const [text, setText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [option, setOption] = useState("");
  const [dataLang, setDataLang] = useState("");

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

  const sendLang = (event) => {
    onHandleLang(event.target.value);
  };

  function isLangSelect() {
    try {
      if (props.changeLang == "1") {
        return <SelectValue placeholder="Pilih Sandi" />;
      } else {
        return <SelectValue placeholder="Select Code" />;
      }
    } catch (error) {}
  }

  function toastLang() {
    try {
      if (props.changeLang == "1") {
        return (
          <button
            className="absolute  inline-flex h-9 md:h-12 items-center top-[360px] md:top-[170px] right-8 md:right-28 overflow-hidden rounded-md border border-neutral-200 bg-transparent px-4 mt-2 font-medium text-neutral-600 transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(82_82_82)]"
            onClick={() => {
              navigator.clipboard.writeText(outputText),
                toast("Tersalin 😄selamat menyalin 😎", {
                  autoClose: 2000,
                  hideProgressBar: true,
                  position: "top-center",
                });
            }}
          >
            Copy
          </button>
        );
      } else {
        return (
          <button
            className="absolute  inline-flex h-9 md:h-12 items-center top-[360px] md:top-[170px] right-8 md:right-28 overflow-hidden rounded-md border border-neutral-200 bg-transparent px-4 mt-2 font-medium text-neutral-600 transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(82_82_82)]"
            onClick={() => {
              navigator.clipboard.writeText(outputText),
                toast("Copied 😄happy copying 😎", {
                  autoClose: 2000,
                  hideProgressBar: true,
                  position: "top-center",
                });
            }}
          >
            Copy
          </button>
        );
      }
    } catch (error) {}
  }

  return (
    <>
      <div className="font-supreme grid justify-items-center md:justify-center  md:flex mt-5">
        <Select onValueChange={handleChangeOption}>
          <SelectTrigger className="w-[180px]">{isLangSelect()}</SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Sandi</SelectLabel>
              <SelectItem value="an">AN</SelectItem>
              <SelectItem value="az">AZ</SelectItem>
              <SelectItem value="naz">NAZ</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className="flex ml-0 mt-3  md:mt-0 md:ml-3 gap-3">
          <button
            className="group relative inline-flex h-9 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-transparent px-6 font-supreme dark:bg-slate-950  transition-all [box-shadow:0px_4px_1px_#020617] active:translate-y-[2px] active:shadow-none"
            value={"1"}
            onChange={(e) => setDataLang(e.target.value)}
            onClick={sendLang}
          >
            IND
          </button>
          <button
            className="group relative inline-flex h-9 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-transparent px-6 font-supreme dark:bg-slate-950  transition-all [box-shadow:0px_4px_1px_#020617] active:translate-y-[2px] active:shadow-none"
            value={"2"}
            onChange={(e) => setDataLang(e.target.value)}
            onClick={sendLang}
          >
            EN
          </button>
        </div>
      </div>
      <div className="container block md:justify-center md:flex px-5 md:px-24 mt-8">
        <Textarea
          className="mr-0 md:mr-3 w-full md:w-1/2 min-h-32 md:min-h-52 font-supreme font-medium text-lg md:text-2xl"
          onHandle={handleChange}
          changeLang={props.changeLang}
        />
        <Textarea2
          className="mt-5 md:mt-0 ml-0 md:ml-3 w-full md:w-1/2 min-h-32 md:min-h-52 font-supreme font-medium text-2xl"
          output={outputText}
          disabled
        />
        {toastLang()},
        <ToastContainer className="w-full text-center md:w-[312px]" />
      </div>
    </>
  );
}
