import { useState } from "react";
import Header from "./materials/Header";
import Translate from "./materials/Translate";
import Explanation from "./materials/Explanation";
import Footer from "./materials/Footer";

export default function App() {
  const [lang, setLang] = useState("1");

  function handleLang(data) {
    setLang(data);
  }


  return (
    <div className="relative min-h-screen bg-cover bg-center bg-[url('/public/doodle.jpg')]">
      <div className="absolute inset-0 bg-white bg-opacity-85"></div>

      <div className="relative">
        <Header changeLang={lang} />
        <Translate onHandleLang={handleLang} changeLang={lang}  />
        <Explanation changeLang={lang}/>
        <Footer />
      </div>
    </div>
  );
}
