import React from "react";
import HeaderView from "./Components/Header/HeaderView";
import Home from "./Components/Home/Home";
import Movie from "./Components/Pages/movie";
import Original from "./Components/Pages/Original";
import Search from "./Components/Pages/Search";
import Series from "./Components/Pages/Series";
import WatchList from "./Components/Pages/Watchlist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./Components/Detail/Detail";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <HeaderView/>
        <Routes>
          <Route path="/movie" element={<Movie />} />
          <Route path="/orignal" element={<Original />} />
          <Route path="/search" element={<Search />} />
          <Route path="/series" element={<Series />} />
          <Route path="/watchlist" element={<WatchList />} />
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
