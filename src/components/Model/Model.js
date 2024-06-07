import React, { useState } from "react";
import "./Model.css";

export default function Modal({paragraph,heading}) {
  const [moda, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!moda);
  };

  if(moda) {
    document.body.classList.add('active-moda')
  } else {
    document.body.classList.remove('active-moda')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-moda">
        Open
      </button>

      {moda && (
        <div className="moda">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="moda-content">
            <h2>{heading}</h2><br/>
            <p>
             {paragraph}
            </p>
            <button className="close-moda" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}
