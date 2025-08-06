// main.jsx
import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import Particles from "./Komponen/Bg/Bg";
import TextType from "./Komponen/Text/Text";
import "./index.css";
import Amplop from "./Komponen/Surat/Surat";
import PopupInput from "./Komponen/Popup/Popup";


const App = () => {
  const [inputText, setInputText] = useState("");
  const [showPopup, setShowPopup] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  const letters = [
    {
      title: `Surat Untuk ${inputText}`,
      content: `Halo ${inputText},\n\nSelamat ulang tahun! Semoga hari ini penuh dengan kebahagiaan dan keceriaan.\n\nSemoga kamu diberi kesehatan dan diberi berkat \n\nOleh Tuhan `,
    },
    {
      title: `Pesan Khusus`,
      content: `Untuk ${inputText} yang berbahagia,\n\nTerima kasih telah menjadi bagian dari hidup kami.\n\nSemoga tahun ini membawa banyak keberuntungan untukmu!`,
    },
    {
      title: `Antony`,
      image: `https://i.pinimg.com/736x/68/66/20/68662030cf8f217746b17811ee6ed521.jpg`,
      content: `Happy birthday! Thanks for always supporting us. Vamos Betis!`,
      layout: `side-by-side`,
      isHTml: true,
    },
    {
      title: `Cristiano Ronaldo`,
      image: `https://i.pinimg.com/736x/18/60/67/186067c3c81040a68a049b9344b9f995.jpg`,
      content: `Happy Birthday, my friend! Stay strong, work hard, and believe. SIUUU!`,
      layout: `side-by-side`,
      isHTml: true,
    },
  ];

  const handleSubmit = (value) => {
    setInputText(value);
    setShowPopup(false);
  };

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
    setTimeout(() => {
      setShowContent(true);
    }, 1000);
  };

  const handleOpenAmplop = () => {
    setShowLetter(true);
  };

  const handleCloseAmplop = () => {
    setShowLetter(false);
  };

  const handleReset = () => {
    setShowContent(false);
    setAnimationComplete(false);
    setInputText("");
    setShowPopup(true);
    setShowLetter(false);
  };

  return (
    <div className="app-container">
      <Particles
        particleColors={["#ffffff", "#ffffff"]}
        particleCount={150}
        particleSpread={8}
        speed={0.1}
        className="fullscreen-bg"
      />

      {/* Popup Input muncul pertama kali */}
      {showPopup && <PopupInput onSubmit={handleSubmit} />}

      {/* Animasi Text muncul setelah input */}
      {inputText && !animationComplete && (
        <TextType
          text={[
            `Halo ${inputText}`,
            `Selamat Ulang Tahun!`,
            `Ada Surat Untukmu...`,
          ]}
          typingSpeed={70}
          pauseDuration={1115}
          showCursor={true}
          cursorCharacter="|"
          textColors={["#ffffff"]}
          onSentenceComplete={(_, index) => {
            if (index === 2) handleAnimationComplete();
          }}
        />
      )}

      {/* Konten utama muncul setelah animasi selesai */}
      {showContent && (
        <div className="main-content">
          <div className="amplop-container">
            <Amplop
              letters={letters}
              onName={inputText}
              isOpen={showLetter}
              onOpen={handleOpenAmplop}
              onClose={handleCloseAmplop}
            />
            <button className="reset-button" onClick={handleReset}>
              Kembali ke Awal
            </button>
          </div>

        </div>
      )}
    </div>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
