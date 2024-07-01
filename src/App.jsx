import React, { useState } from "react";
import Main from "./pages/Main/Main";
import { Route, Routes } from "react-router-dom";
import AllProjects from "./pages/AllProjects/AllProjects";
import AllNews from "./pages/AllNews/AllNews";
import SingleNews from "./pages/SingleNews/SingleNews";
import AboutPage from "./pages/AboutPage/AboutPage";
import Contacts from "./pages/Contacts/Contacts";
import Loader from "./components/Loader/Loader";

export const setLoad = () => {
  setIsOnline(true);
};
const App = () => {
  const [isOnline, setIsOnline] = useState(false);
  (function () {
    setTimeout(() => {
      setIsOnline(true);
    }, 2000);
  })();
  return (
    <div className="overflow-hidden">
      <div className={isOnline ? "hidden" : ""}>
        <Loader />
      </div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/news" element={<AllNews />} />
        <Route path="/single_news/:id" element={<SingleNews />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
};

export default App;
