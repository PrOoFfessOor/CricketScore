import axios from "axios";

const BASE_URL = `https://www.thesportsdb.com/api/v1/json/123/search_all_teams.php?l=English%20Premier%20League`;

export const fetchLiveScores = async () => {
  try {
    const res = await axios.get(BASE_URL);
    if (res.data?.events) {
      return {
        success: true,
        matches: res.data.events
      };
    } else {
      return {
        success: true,
        matches: []
      };
    }
  } catch (err) {
    console.error("Error fetching live scores:", err);
    return { success: false };
  }
};