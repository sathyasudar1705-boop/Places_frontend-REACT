import React, { useContext } from "react";
import Button from "../components/FormElements/Button";
import { AuthContext } from "../context/auth-context";
import bgImage from "../../Assets/main.jpg";
import dashboardBg from "../../Assets/SKY THROUGH BANANA LEAVES.jpg";
import "./LandingPage.css";

const LandingPage = () => {
  const auth = useContext(AuthContext);

  const bgStyle = {
    backgroundImage: `url(${bgImage})`
  };

  if (auth.isLoggedIn) {
    const dashStyle = {
      backgroundImage: `url("${dashboardBg}")`
    };

    return (
      <div className="landing-page dashboard-view" style={dashStyle}>
        <div className="landing-page__overlay dashboard-overlay"></div>
        <div className="landing-page__content">
           <h1 className="dashboard__greeting">
            HELLO <span className="explorer-text">EXPLORER</span>
          </h1>
          <p className="dashboard__subtitle">
            Where will your journey take you today?
          </p>
          <div className="landing-page__actions">
            <Button to={`/${auth.userId}/places`}>MY COLLECTION</Button>
            <Button to="/places/new" inverse>NEW DISCOVERY</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="landing-page" style={bgStyle}>
      <div className="landing-page__overlay"></div>
      <div className="landing-page__content">
        <h1 className="landing-page__title">
          SHARE YOUR <span className="highlight">WORLD</span>
        </h1>
        <p className="landing-page__subtitle">
          The most beautiful places on Earth, shared by people like you.
        </p>
        <div className="landing-page__actions">
          <Button to="/auth" inverse>START YOUR JOURNEY</Button>
        </div>
      </div>
    </div>
  );
};



export default LandingPage;
