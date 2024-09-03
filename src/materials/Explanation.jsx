import React from "react";
import "../App.css";

export default function Explanation() {
  return (
    <div className="container justify-center mt-10">
      <h1 className="text-3xl font-supreme font-black text-center">
        Penjelasan📜
      </h1>
      <h3 className="font-supreme mt-3 text-lg px-44 text-center">
        Pasti kalian disaat masa kecil pernah bermain sandi atau kode-kodean.
        Kalian setidaknya pernah liat atau tau disaat pelajaran pramuka SD atau
        SMP. Sandi yang mudah digunakan adalah sandi{" "}
        <span className="font-black">AN</span> dan{" "}
        <span className="font-black">AZ</span> . Memecahkan sandi ini ialah
        sangat mudah hanya cukup memetakan semua alfabet dibagi separuh dan
        dicocokkan antar sesama huruf. Nah sekarang mimin punya pertayaan bagaimana kalau sandi <span className="font-black">NAZ</span> ?, ada yang bisa nebak bagaimana memecahkannya wkwkwk.
      </h3>
      <div className="flex justify-center mt-3 mb-10">
        <img src="../public/AN.png" alt="" className="w-2/5 mr-2" />
        <img src="../public/AZ.png" alt="" className="w-2/5 ml-2" />
      </div>
    </div>
  );
}
