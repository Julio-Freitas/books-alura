import { lazy } from "react";
import {  Routes, Route } from "react-router-dom";

const Home = lazy(() =>
  import("../pages").then(({ Home }) => ({ default: Home }))
);

export const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
