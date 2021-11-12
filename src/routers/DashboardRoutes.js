import React from "react";
import { Navigate, Route, Routes } from "react-router";
import { DcScreen } from "../Components/dc/DcScreen";
import { HeroScreen } from "../Components/heroes/HeroScreen";
import { MarvelScreen } from "../Components/marvel/MarvelScreen";
import { SearchScreen } from "../Components/search/SearchScreen";
import { Navbar } from "../Components/ui/Navbar";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-2">
        <Routes>
          <Route path="/marvel" element={<MarvelScreen />} />
          <Route path="/hero/:heroeId" element={<HeroScreen />} />
          <Route path="/dc" element={<DcScreen />} />
          <Route path="/search" element={<SearchScreen />} />
          <Route path="/*" element={<Navigate replace to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};
