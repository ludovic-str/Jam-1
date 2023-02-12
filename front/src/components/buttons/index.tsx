
import "./styles.css";
import Button from '@mui/material/Button';
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useNavigate } from "react-router-dom";
import React from "react";

const ButtonsReverse = () => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate("/guess/images");
  };

  const handleQuoteClick = () => {
    navigate("/guess/character");
  };

  const handleEmojiClick = () => {
    navigate("/guess/pedago");
  };

  return (
    <div className="flexbox-container">
      <div className="flexbox-item image_button">
      <Button variant="contained"
      style={{maxWidth: '200px',
      maxHeight: '100px',
      minWidth: '200px',
      minHeight: '100px',
      fontSize: '20px',
      backgroundColor: "#E33E39",}}
      onClick={handleImageClick}
      >
        <p className="icon"><ImageSearchIcon></ImageSearchIcon></p>
        <p className="text">Image</p>
      </Button>
      </div>

      <div className="flexbox-item quote_button">
        <Button variant="contained"
      style={{maxWidth: '200px',
      maxHeight: '100px',
      minWidth: '200px',
      minHeight: '100px',
      fontSize: '20px',
      backgroundColor: "#E33E39",}}
      onClick={handleQuoteClick}
      >
        <p className="icon"><AccountCircleIcon></AccountCircleIcon></p>
        <p className="text">Character</p>
          </Button>
      </div>
      <div className="flexbox-item emoji_button">
        <Button variant="contained"
      style={{maxWidth: '200px',
      maxHeight: '100px',
      minWidth: '200px',
      minHeight: '100px',
      fontSize: '20px',
      backgroundColor: "#E33E39",}}
      onClick={handleEmojiClick}
      >
        <p className="icon"><GitHubIcon></GitHubIcon></p>
        <p className="text">Pedago</p>
          </Button>
      </div>
    </div>
  )
}

export default ButtonsReverse;
