import React, { useContext, useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ArtistsSlider from "../components/ArtistsSlider";
import ExploreDesigns from "../components/ExploreDesigns";
import { GlobalStateContext } from "../context/GlobalStateContext";
import CallToAction from "../components/CallToAction";
import CategorySlider from "../components/CategorySlider";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const { state } = useContext(GlobalStateContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (state.isAuthenticated) {
      navigate("/dashboard");
    }
  }, [state.isAuthenticated, navigate]);

  return (
    <div className="bg-[#f8f7f4] flex flex-col items-center w-full">
      <Header />
      <Hero />
      <ArtistsSlider />
      <ExploreDesigns />
      <CallToAction />
      <CategorySlider />
      <Footer />
    </div>
  );
};

export default Home;
