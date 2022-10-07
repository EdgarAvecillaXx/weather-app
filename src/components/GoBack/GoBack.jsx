import React from "react";
import { useNavigate } from "react-router-dom";

import { button } from "./goback.module.css";
function GoBack() {
  const navigate = useNavigate();

  return (
    <button
      className={button}
      onClick={() => {
        navigate(-1);
      }}>
      Go back
    </button>
  );
}

export default GoBack;
