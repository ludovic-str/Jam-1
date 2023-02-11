import "./styles.css";
import Title from "../../components/title";
import Buttons from "../../components/buttons";
import Background from "../../components/background";
import Checkboxes from "../../components/checkbox";
import React from "react";
import EasterEgg from "../../components/EasterEgg";

const Home = () => {
  return (
    <div>
      <EasterEgg />
      <Title></Title>
      <Buttons></Buttons>
      <Checkboxes></Checkboxes>
      <Background></Background>
    </div>
  );
};

export default Home;
