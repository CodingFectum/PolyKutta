import React from "react";
import Menu from '../../section/Menu/menu'
import Header from '../../section/Header/header'
import About from '../../section/About/about'
import Feature from '../../section/Feature/feature'
import RoadMap from '../../section/Roadmap/roadmap'
import News from '../../section/News/news'
import FAQ from '../../section/FAQ/faq'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div>
      <Menu />
      <Header />
      <About />
      <Feature />
      <RoadMap />
      <News />
      <FAQ />
      <Footer />
    </div>
  );
}

export default Home;
