import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./pages/home";
import reportWebVitals from "./reportWebVitals";
import Cookies from "js-cookie";

ReactDOM.render(<Home />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// 写入cookie
const cookies = {
  NG_TRANSLATE_LANG_KEY: "zh-CN",
  " _gid": "GA1.2.492327885.1623035529",
  " _ga": "GA1.1.1562754525.1614563798",
  " _ga_8SBPY6GX69": "GS1.1.1623204183.24.1.1623205144.0",
  " _ga_XWL9LM2WJ1": "GS1.1.1623204183.29.1.1623205144.0",
  SID: "C6B1SjUBZygkF+/qEMv9QFeiYun8wvCR0mVtKmQ3l1EQciuNJTMRYffYqdplkF8hkoB8B8q8jkPOnswTMPlGHGzjeLAOID+ebeIVRHQg6AY=",
  SSO_C: "9q4n8tle84i7ix7cnk71n9ile8ma5blummde45ta",
};
Object.entries(cookies).forEach((item) => {
  Cookies.set(item[0], item[1]);
});

reportWebVitals();
