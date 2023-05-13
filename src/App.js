
import videoLetMeOut from './Image/EARTH ATTACK - Let Me Out ( Official Music Video ).mp4';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import BackgroundVideo from './components/BackgroundVideo';
import Discography from './components/Discography';
import TourPage from './components/TourPage';
import Footer from './components/Footer';
import PageNews from './components/PageNews';
import NewsDetails from './components/NewsDetails';

const AppContent = () => {
  const location = useLocation();

  const shouldShowFooter = () => {
    // Ne pas afficher le footer sur la page d'accueil ou sur une route spécifique où BackgroundVideo est présent
    return location.pathname !== '/' && location.pathname !== '*';
  };

  return (
    <>
      <div className="content">
        <Routes>
          <Route
            path="*"
            element={<BackgroundVideo videoSrc={videoLetMeOut} />}
          ></Route>
          <Route
            exact
            path="/"
            element={<BackgroundVideo videoSrc={videoLetMeOut} />}
          ></Route>
          <Route path="/discography" element={<Discography />} />
          <Route path="/tour" element={<TourPage />} />
          <Route path="/news" element={<PageNews />} />
          <Route path="/news/:url" element={<NewsDetails/>} />
        </Routes>
      </div>

      {shouldShowFooter() && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <AppContent />
      </Router>
    </div>
  );
};

export default App;

