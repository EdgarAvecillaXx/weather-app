import React from "react";
import notFound from "../../img/Lovepik_com-400217866-404-page-error.png";
import { imgNotFound } from "./PageNotFound.module.css";

function PageNotFound() {
  return <img className={imgNotFound} src={notFound} alt="404" />;
}

export default PageNotFound;
