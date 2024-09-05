import React from "react";
import "../App.css";

export default function Explanation() {
  return (
    <div className="container justify-center mt-10 mb-5">
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
        dicocokkan antar sesama huruf. Nah sekarang mimin punya pertayaan bagaimana kalau sandi <span className="font-black">NAZ</span> ?, ada yang bisa nebak bagaimana memecahkannya wkwk.
      </h3>
      <div className="flex justify-center mt-3 mb-10">
        <img src="../public/AN.png" alt="" className="w-2/5 mr-2" />
        <img src="../public/AZ.png" alt="" className="w-2/5 ml-2" />
      </div>
      <h1 className="text-3xl font-supreme font-black text-center">Tentang🥽</h1>
      <h3 className="font-supreme mt-3 text-lg px-44 text-center">Aku membuat website translate sandi ini karena aku suka membuat surat bersandi dan suka membagikannya ke teman-teman aku hehe. Website ini terinspirasi dari project github <a className="underline underline-offset-8 text-teal-700" href="https://github.com/qois51">qois51</a> . shout out to him 🙌</h3>
    </div>
  );
}
