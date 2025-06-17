import { IoHome } from "react-icons/io5";
import { IoNewspaper } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { BiSolidCricketBall } from "react-icons/bi";

const Bottom = () => {
  return (
    <>
      <Link to="/"><IoHome size={24} /></Link>
      <Link to="/match"><BiSolidCricketBall /></Link>
      <Link to="/video"><MdOutlineSlowMotionVideo /></Link>
      <Link to="/news"><IoNewspaper /></Link>
    </>
  );
};

export default Bottom;