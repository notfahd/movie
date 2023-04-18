// import React, { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Movies from "./pages/Movies";
import Tvs from "./pages/Tvs";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Person from "./pages/Person";
import Search from "./pages/Search";
// imporfrom "./ProtectedRoute";
import Nav from "./components/Nav";

export default function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie" element={<Movies />} />
        <Route path="tv" element={<Tvs />} />
        <Route path="person" element={<Person />} />
        <Route path="search/:inpot" element={<Search />} />

        <Route path="detail">
          <Route index element={<Detail />} />
          <Route path=":type/:id" element={<Detail />} />
        </Route>
      </Routes>
    </>
  );
}
