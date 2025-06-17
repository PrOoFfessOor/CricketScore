import { useParams } from 'react-router-dom';
import style from '../App.module.css'; // or use a dedicated Stats.module.css

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

const playerStats = [
  {
    name: "Virat Kohli",
    runs: 120,
    balls: 150,
    fours: 10,
    sixes: 2,
    strikeRate: 80.00,
  },
  {
    name: "Rohit Sharma",
    runs: 100,
    balls: 120,
    fours: 8,
    sixes: 1,
    strikeRate: 83.33,
  }
];

const Stats = () => {
  const { id } = useParams();
  const match = matches[id];

  if (!match) {
    return <h2 className={style.error}>Match not found</h2>;
  }

  return (
    <div className={style.statsContainer}>
      <div className={style.matchInfo}>
        <h1>{match.team1} vs {match.team2}</h1>
        <p><strong>Runs:</strong> {match.runs}</p>
        <p><strong>Wickets:</strong> {match.wickets}</p>
        <p><strong>Overs:</strong> {match.overs}</p>
        <p><strong>Run Rate:</strong> {match.runRate}</p>
        <p><strong>Status:</strong> {match.status}</p>
      </div>

      <div className={style.playerStats}>
        <h2>Player Stats</h2>
        <table className={style.statsTable}>
          <thead>
            <tr>
              <th>Player</th>
              <th>Runs</th>
              <th>Balls</th>
              <th>Fours</th>
              <th>Sixes</th>
              <th>Strike Rate</th>
            </tr>
          </thead>
          <tbody>
            {playerStats.map((player, index) => (
              <tr key={index}>
                <td>{player.name}</td>
                <td>{player.runs}</td>
                <td>{player.balls}</td>
                <td>{player.fours}</td>
                <td>{player.sixes}</td>
                <td>{player.strikeRate.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Stats;