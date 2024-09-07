import React from "react";
import "../App.css";

export default function Explanation(props) {
  function isLang() {
    if (props.changeLang == "1") {
      return (
        <>
          <h1 className="text-3xl font-supreme font-black text-center">
            Penjelasan📜
          </h1>
          <h3 className="font-supreme mt-3 text-lg px-44 text-center">
            Pasti kalian disaat masa kecil pernah bermain sandi atau
            kode-kodean. Kalian setidaknya pernah liat atau tau disaat pelajaran
            pramuka SD atau SMP. Sandi yang mudah digunakan adalah sandi{" "}
            <span className="font-black">AN</span> dan{" "}
            <span className="font-black">AZ</span> . Memecahkan sandi ini ialah
            sangat mudah hanya cukup memetakan semua alfabet dibagi separuh dan
            dicocokkan antar sesama huruf. Nah sekarang mimin punya pertayaan
            bagaimana kalau sandi <span className="font-black">NAZ</span> ?, ada
            yang bisa nebak bagaimana memecahkannya wkwk.
          </h3>
          <div className="flex justify-center mt-3 mb-10">
            <img src="../public/AN.png" alt="" className="w-2/5 mr-2" />
            <img src="../public/AZ.png" alt="" className="w-2/5 ml-2" />
          </div>
          <h1 className="text-3xl font-supreme font-black text-center">
            Tentang🥽
          </h1>
          <h3 className="font-supreme mt-3 text-lg px-44 text-center">
            Aku membuat website translate sandi ini karena aku suka membuat
            surat bersandi dan suka membagikannya ke teman-teman aku hehe.
            Website ini terinspirasi dari project github{" "}
            <a
              className="underline underline-offset-8 text-teal-700"
              href="https://github.com/qois51"
            >
              qois51
            </a>{" "}
            . shout out to him 🙌
          </h3>
        </>
      );
    } else {
      return (
        <>
          <h1 className="text-3xl font-supreme font-black text-center">
            Explanation📜
          </h1>
          <h3 className="font-supreme mt-3 text-lg px-44 text-center">
            Surely you have played ciphers or codes as a child. You have at
            least seen or know during elementary or junior high scout lessons.
            Codes that are easy to use are{" "}
            <span className="font-black">AN</span> and{" "}
            <span className="font-black">AZ</span> . Solving this code is very
            easy just map all the alphabet divided by half and matched between
            fellow letters. Now we have a question what if the code is{" "}
            <span className="font-black">NAZ</span> ?,anyone can guess how to
            solve it haha.
          </h3>
          <div className="flex justify-center mt-3 mb-10">
            <img src="../public/AN.png" alt="" className="w-2/5 mr-2" />
            <img src="../public/AZ.png" alt="" className="w-2/5 ml-2" />
          </div>
          <h1 className="text-3xl font-supreme font-black text-center">
            About🥽
          </h1>
          <h3 className="font-supreme mt-3 text-lg px-44 text-center">
            I created this code translation website because I like to make
            encrypted letters and like to share them with my friends hehe. This
            website was inspired by the github project{" "}
            <a
              className="underline underline-offset-8 text-teal-700"
              href="https://github.com/qois51"
            >
              qois51
            </a>{" "}
            . shout out to him 🙌
          </h3>
        </>
      );
    }
  }
  return <div className="container justify-center mt-10 mb-5">{isLang()}</div>;
}
