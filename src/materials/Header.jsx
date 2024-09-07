import React from "react";
import "../App.css";

export default function Header(props) {
  function isLang() {
    if (props.changeLang == "1") {
      return (
        <h1 className="text-3xl font-supreme font-black text-center">
          Pengubah Sandi😁
        </h1>
      );
    } else {
      return (
        <h1 className="text-3xl font-supreme font-black text-center">
          Translate Code😁
        </h1>
      )
    }
  }
  return <div className="container justify-center pt-10">{isLang()}</div>;
}
