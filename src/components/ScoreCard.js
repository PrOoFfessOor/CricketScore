import React from "react";

const ScoreCard = ({ match }) => {
  return (
    <div style={styles.card}>
      <h4>{match.strEvent}</h4>
      <p>{match.strLeague} | {match.strSport}</p>
      <p>{match.strHomeTeam} : {match.intHomeScore}</p>
      <p>{match.strAwayTeam} : {match.intAwayScore}</p>
      <p>Status: {match.strStatus}</p>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ddd",
    padding: "12px",
    margin: "10px 0",
    borderRadius: "6px"
  }
};

export default ScoreCard;