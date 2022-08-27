import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PauseButton from "./PauseButton";
import PlayButton from "./PlayButton";
import SettingsButton from "./SettingsButton";
const red = "#f54e4e";
const green = "#4ec8c";

function Timer() {
  return (
    <div>
      <CircularProgressbar
        value={66}
        text={`66%`}
        styles={buildStyles({
          rotation: 0,
          strokeLinecap: 'round',
          pathColor: red,
          textColor: "#fff",
          trailColor: "rgba(255,255,255,0.2)",
        })}
      />
      <div style={{marginTop: "20px"}}>
        <PlayButton />
        <PauseButton />
      </div>
      <div style={{marginTop: "20px"}}>
        <SettingsButton />
      </div>
    </div>
  );
}

export default Timer;
