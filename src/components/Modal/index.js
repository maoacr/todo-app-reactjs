import React from "react";
import ReactDOm from "react-dom";
import "./modal.css";

function Modal({ children }) {
  return ReactDOm.createPortal(
    <div className="modalContainer">{children}</div>,
    document.getElementById("modalContainer")
  );
}

export { Modal };
