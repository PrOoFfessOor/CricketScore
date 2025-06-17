import { Link } from "react-router-dom";
import style from "../App.module.css";
import News from "./News";

const Featured = () => {
  const matches = [
    {
      team1: "India 🇮🇳",
      team2: "Australia 🇦🇺",
      runs: 245,
      wickets: 6,
      overs: "38.2",
      runRate: "6.39",
      status: "Day 1: 3rd Session"
    },
    {
      team1: "BAN 🇧🇩",
      team2: "SL 🇱🇰",
      runs: 200,
      wickets: 3,
      overs: "62.1",
      runRate: "3.21",
      status: "Day 1: 2nd Session"
    }
  ];

  return (
    <>
      <div className={style.container}>
        {matches.map((match, index) => (
          <Link to={`/stats/${index}`} key={index} className={style.linkWrapper}>
            <div className={style.scoreCart}>
              <div className={style.scoreCartContent}>
                <h2>{match.team1} vs {match.team2}</h2>
                <div className={style.scoreStats}>
                  <div className={style.statBox}>Runs: {match.runs}</div>
                  <div className={style.statBox}>Wickets: {match.wickets}</div>
                  <div className={style.statBox}>Overs: {match.overs}</div>
                  <div className={style.statBox}>Run Rate: {match.runRate}</div>
                </div>
                <p className={style.matchStatus}>{match.status}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <News />
    </>
  );
};

export default Featured;