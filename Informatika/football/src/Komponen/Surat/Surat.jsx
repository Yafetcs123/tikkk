import React from "react";
import "./Surat.css";

const Amplop = ({ letters, onName, isOpen, onOpen, onClose, onReset }) => {
  const [currentLetterIndex, setCurrentLetterIndex] = React.useState(0);

  const handleNext = () => {
    setCurrentLetterIndex((prev) => (prev + 1) % letters.length);
  };

  const handlePrev = () => {
    setCurrentLetterIndex(
      (prev) => (prev - 1 + letters.length) % letters.length
    );
  };

  return (
    <div className="amplop-container">
      {!isOpen ? (
        <div className="amplop-closed">
          <div className="amplop-body">
            <div className="amplop-flap"></div>
            <div className="amplop-name">{onName}</div>
          </div>
          <button className="open-button" onClick={onOpen}>
            Buka Amplop
          </button>
        </div>
      ) : (
        <div className="amplop-open">
          <div className="letter">
            <div
              className={
                letters[currentLetterIndex].layout === "side-by-side"
                  ? "image-title-side"
                  : ""
              }
            >
              {letters[currentLetterIndex].image && (
                <img
                  src={letters[currentLetterIndex].image}
                  alt={letters[currentLetterIndex].title}
                  className="letter-image"
                />
              )}
              <h3
                className={
                  letters[currentLetterIndex].layout === "side-by-side"
                    ? "inline-h3"
                    : ""
                }
              >
                {letters[currentLetterIndex].title}
              </h3>
            </div>
            {letters[currentLetterIndex].content && (
              <p>{letters[currentLetterIndex].content}</p>
            )}
          </div>
          <div className="letter-controls">
            <button onClick={handlePrev}>Sebelumnya</button>
            <button onClick={handleNext}>Selanjutnya</button>
            <button onClick={onClose}>Tutup</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Amplop;
