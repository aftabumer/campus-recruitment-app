import React from "react";

const ImageText = ({ icon, tilte, onClick, className }) => {
  return (
    <div
      className={`${"image-text-conatiner"} ${className} `}
      onClick={onClick}
    >
      <img src={icon} alt="icon" className="image-icon" />
      <p className="image-title">{tilte}</p>
    </div>
  );
};

export default ImageText;
