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
const test_cookies = {
  NG_TRANSLATE_LANG_KEY: "zh-CN",
  _gid: "GA1.2.492327885.1623035529",
  _ga: "GA1.1.1562754525.1614563798",
  _ga_8SBPY6GX69: "GS1.1.1623204183.24.1.1623205144.0",
  _ga_XWL9LM2WJ1: "GS1.1.1623204183.29.1.1623205144.0",
  SID: "TAqohs4DLPft5HmuMmDXuu55sergr4G9g8g8dzu3cGDs5yL0TNuLMO9CkVYqvl3gCf4prXFLmB7U5K/9RaMLGW9p4Idq+srx/oVCU9HwPBs=",
  SSO_C: "e0sijtaqsh3ipy4ru0tmipexxz5xpykfsmdihqsi",
};

const live_cookies = {
  NG_TRANSLATE_LANG_KEY: "zh-CN",
  _gid: "GA1.2.492327885.1623035529",
  _ga: "GA1.2.1562754525.1614563798",
  _ga_8SBPY6GX69: "GS1.1.1623306098.28.1.1623306186.0",
  _ga_XWL9LM2WJ1: "GS1.1.1623306098.33.1.1623306186.0",
  SID: "DTCsgV3mZdF8q3E2iv/jEMbWNb1j/cjlE7AFg9W80c4Yhdq0gU/sfSCNzK6ln0QcSn6LkCg90Mzfdc7eyOpN3bqu0dNYxRPL02J+/HPlJ5c=",
  SSO_C: "b7pvr6hyrenesijfzf73th4qqelq8yd27mde6fdy",
};
Object.entries(test_cookies).forEach((item) => {
  Cookies.set(item[0], item[1], { path: "/apps/chatbot-api/envs/TEST" });
});

Object.entries(test_cookies).forEach((item) => {
  Cookies.set(item[0], item[1], { path: "/apps/chatbot-api/envs/UAT" });
});

Object.entries(live_cookies).forEach((item) => {
  Cookies.set(item[0], item[1], { path: "/apps/chatbot-api/envs/LIVE" });
});

Object.entries(live_cookies).forEach((item) => {
  Cookies.set(item[0], item[1], { path: "/apps/chatbot-api/envs/LIVE" });
});

reportWebVitals();
