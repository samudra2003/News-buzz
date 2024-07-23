import { useEffect, useState } from "react"
import NewsItem from "./NewsItem";


function NewsBoard({category}) {
    const [articles,setArtices]= useState([]);
    useEffect(()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=a63867d7294b48b2ba49ce1d8cd2545d`;
        fetch(url).then(response=> response.json()).then(data=> setArtices(data.articles));
    },[category])
  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
      {articles.map((news,index)=>{
        return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
      })}
    </div>
  )
}

export default NewsBoard