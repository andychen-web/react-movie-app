import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";

const Home = () => {
  return (
    <>
      <Main />
      <Row rowID={1} title="最受歡迎" fetchURL={requests.requestPopular} />
      <Row rowID={2} title="評分最高" fetchURL={requests.requestTopRated} />
      <Row rowID={3} title="最熱門" fetchURL={requests.requestTrending} />
      <Row rowID={4} title="恐怖電影" fetchURL={requests.requestHorror} />
      <Row rowID={5} title="即將上映" fetchURL={requests.requestUpcoming} />
    </>
  )
}
export default Home;
