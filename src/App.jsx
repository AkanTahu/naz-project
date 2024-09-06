import { useState } from "react";
import Header from "./materials/Header";
import Translate from "./materials/Translate";
import Explanation from "./materials/Explanation";
import Footer from "./materials/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-cover bg-center bg-[url('/public/doodle.jpg')]">
      {/* Overlay with opacity */}
      <div className="absolute inset-0 bg-white bg-opacity-80"></div>

      {/* Content */}
      <div className="relative">
        <Header />
        <Translate />
        <Explanation />
        <Footer />
      </div>
    </div>
  );
}

