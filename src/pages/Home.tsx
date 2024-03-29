import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";
const rows = [
  { id: 1, title: "最受歡迎", fetchURL: requests.requestPopular },
  { id: 2, title: "評分最高", fetchURL: requests.requestTopRated },
  { id: 3, title: "動畫電影", fetchURL: requests.requestAnime },
  { id: 4, title: "動作電影", fetchURL: requests.requestAction },
  { id: 5, title: "即將上映", fetchURL: requests.requestUpcoming },
];

const Home = () => {
  return (
    <>
      <Main />
      {/* 使用解構賦值傳入id,title和fetchURL至Row元件 */}
      {rows.map(({ id, title, fetchURL }, key) => (
        <Row key={key} rowID={id} title={title} fetchURL={fetchURL}></Row>
      ))}
    </>
  );
};
export default Home;
