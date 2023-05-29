import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <img src="https://link.to/your/avatar" alt="Аватар" />
      <About />
      <Link to="/projects">Перейти до проектів</Link>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h2>Ім'я Прізвище</h2>
      <p>Рід діяльності</p>
      <p>Де навчаєтесь, хоббі, навички і т.д.</p>
    </div>
  );
};

export default Home;
