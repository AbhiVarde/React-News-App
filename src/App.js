import React, { useState, useEffect } from 'react'
import axios from'axios';

function App() {

  const [news, setNews] = useState([])

  useEffect(()=>{
    axios.get("http://newsapi.org/v2/top-headlines?country=in&apiKey=b98ceb4d53e447cf8a80706d2386ede9")
    .then((res)=>{
      console.log(res.data.articles);
      setNews(res.data.articles)
    })
  },[])
  return (
    <>
      <center>
        <h1 className='my-4'>The India Times</h1>
        <h5>Welcome to the News App Made by AbhiVarde.</h5>
      </center>
      <div className="container my-5">
        <div className="row text-center">
          {
            news.map((val)=>{
              return (
                <div className="col my-3">
                  <div className="card" style={{width: "18rem"}}>
                    <img src={val.urlToImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{val.title}</h5>
                      <p className="card-text">{val.description}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <center><footer className='my-5'>&#169; Abhi Varde. All rights reserved.</footer></center>
    </>
  )
}

export default App
