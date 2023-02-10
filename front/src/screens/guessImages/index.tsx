import "./styles.css";
import Tom from "./tom.jpg";
import { TextField } from "@mui/material";

const GuessImages = () => {
  return (
    <div className="guess-images-container">
      <div className="guess-images-form-container">
        <img src={Tom} alt="tom" className="hero-image" />
        <TextField label="Hero name"/>
      </div>
    </div>
  );
};

export default GuessImages;
