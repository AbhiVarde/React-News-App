import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=861fe4d702804b35838af56725af91ac"
      )
      .then((res) => {
        console.log(res.data.articles);
        setNews(res.data.articles);
      });
  }, []);
  return (
    <>
      <center>
        <h1 className="my-4" style={{ color: "#8E24AA" }}>
          NewsXpress
        </h1>
        <h5>Stay Connected, Stay Informed</h5>
      </center>
      <div className="container my-5">
        <div className="row text-center">
          {news.map((val) => {
            return (
              <div className="col my-3">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={val.urlToImage}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{val.title}</h5>
                    <p className="card-text">{val.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <center>
        <footer className="my-5">
          © 2023 AbhiVarde - Made with ❤️ for the people of the internet.
        </footer>
      </center>
    </>
  );
}

export default App;
