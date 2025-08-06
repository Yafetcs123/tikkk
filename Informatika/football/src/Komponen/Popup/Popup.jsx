import React, { useState } from "react";
import "./Popup.css";

const PopupInput = ({ onSubmit, onClose }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSubmit(inputValue);
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <div className="popup-content">
          <h2 className="popup-title">Masukkan Nama Anda</h2>
          <form onSubmit={handleSubmit} className="popup-form">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="popup-input"
              placeholder="Ketik nama di sini..."
              required
              autoFocus
            />
            <div className="popup-buttons">
              <button type="submit" className="popup-button submit-button">
                Kirim
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopupInput;
