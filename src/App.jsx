import { useState } from "react";
import Header from "./materials/Header";
import Translate from "./materials/Translate";
import Explanation from "./materials/Explanation";
import Footer from "./materials/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Translate />
      <Explanation />
      <Footer />
    </>
  );
}
