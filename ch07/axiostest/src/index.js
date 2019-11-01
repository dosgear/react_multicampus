import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import axios from "axios";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// var url = "http://localhost:3001/contents/search/ja";
var url = "/api/contents/search/ja";
axios
  .get(url)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log("## error occured.");
  });

axios
  .get("/api/contacts", {
    params: { pageno: 1, pagesize: 5 }
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log("## error occured.");
  });

axios
  .get("/api/contacts_long", {
    params: { pageno: 1, pagesize: 5 },
    timeout: 1900
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log("## error occured.");
  });

axios
  .get("/api/contacts", {
    params: { pageno: 1, pagesize: 5 },
    headers: { "X-Custom-Header": "foobar" }
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log("## error occured.");
  });

axios
  .post("/api/contacts", {
    name: "다혜",
    tel: "010-****-5748",
    address: "서울"
  })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log("## error occured.");
  });
