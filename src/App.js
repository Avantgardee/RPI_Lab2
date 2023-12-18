import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./main.css";
import MainPage from "./pages/MainPage/MainPage";
import React from "react";
import SearchSeriesPage from "./pages/SearchSeriesPage/SearchSeriesPage";
import SeriesPage from "./pages/SeriesPage/SeriesPage";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/searchSeries/" element={<SearchSeriesPage />} />
          <Route path="/SeriesPage/:id" element={<SeriesPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
