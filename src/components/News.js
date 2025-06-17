// src/components/News.js
import React from "react";
import style from "../App.module.css";

const newsData = [
  {
    title: "Virat Kohli returns to squad for England Test series",
    summary: "Kohli is back for the much-anticipated Test series. His return boosts India’s middle-order.",
  },
  {
    title: "Australia beat New Zealand by 5 wickets",
    summary: "A brilliant chase led by Maxwell sealed the win in the final overs.",
  },
  {
    title: "Bangladesh announces squad for Asia Cup",
    summary: "Shakib Al Hasan to lead. Young talents included, Tamim ruled out.",
  },
];

const News = ({news}) => {
  return (
    <div className={style.newsSection}>
      <h2 className={style.newsHeading}>Latest News</h2>
      <ul className={style.newsList}>
        {newsData.map((item, index) => (
          <li key={index} className={style.newsItem}>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
            <p>{news}</p>
          </li>
      
      
        ))}
      </ul>
    </div>
  );
};

export default News;