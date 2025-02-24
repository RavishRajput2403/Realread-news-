import React, { useEffect, useState } from 'react';
import Card from './Card';

const Newsapp = () => {
      const [search, setSearch] = useState("india");
      const [newsdata, setNewsData] = useState(null);
      const API_KEY = "42e4f575040c491a979f661d2ac9e677";

      const getData = async() => {
            const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
            const jsonData = await response.json();
            console.log(jsonData.articles);
            setNewsData(jsonData.articles);
      }

      useEffect(() =>{
            getData()
      }, [])

      const handleInput = (e) => {
            console.log(e.target.value);
            setSearch(e.target.value)
      }
      const userInput = (event) => {
            setSearch(event.target.value);
      }

  return (
    <div>
      <nav>
            <div>
                  <h1>Trendy News</h1>
            </div>
            <ul>
                  <a>All news</a>
                  <a>Trending</a>
            </ul>
            <div className='searchBar'>
               <input type='text' placeholder='Search News'
               value={search}
               onChange={handleInput}/>
               <button onClick={getData}>Search</button>
            </div>
      </nav>
      <div>
            <p className='head'>Stay update with Briefly</p>
      </div>
      <div className='categoryBtn'>
            <button onClick={userInput} value="sports">Sports</button>
            <button onClick={userInput} value="politics">Politics</button>
            <button onClick={userInput} value="entertainment">Entertainment</button>
            <button onClick={userInput} value="health">Health</button>
            <button onClick={userInput} value="fitness">Fitness</button>
      </div>

      <div>
            {newsdata? <Card data = {newsdata}/>: null}
      </div>
    </div>
  )
}

export default Newsapp
