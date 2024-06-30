import { useEffect, useState } from 'react';
import './App.css';
import News from './News';

function App() {

  let [articles,setArticles] = useState([]);
  let [category,setCategory] = useState("india");

  useEffect(()=>{
    // eslint-disable-next-line no-template-curly-in-string
    fetch('https://newsapi.org/v2/everything?q=${category}&from=2024-06-20&apiKey=6fa02612b1fd4aa0bb9321ad90ffa2ed')
    .then((response)=>response.json())
    .then((news)=>{
      setArticles(news.articles)
      console.log(news.articles)
    })
    .catch((err)=>{
      console.log(err)
    })

    },[category])
  return (
  <div className="App">
    <header className='header'>
      <h1>Welcome Gopisetti</h1>
       
       <input type='text' onChange={(event)=>{
        //  setCategory(event.target.value);

        if(event.target.value!=="")
          {
            setCategory(event.target.value);
          }
          else
          {
            setCategory("india")
          }        
       }}placeholder='Search News'/>

    </header>

  <section className='news-articles'>
    {
      articles.length!==0?
      articles.map((article)=>{

        return (
          <News article = {article}/>
        )
      })
      :
      <h3>hello there is no data</h3>
    }
     
  </section>
    </div>
  );
}

export default App;

