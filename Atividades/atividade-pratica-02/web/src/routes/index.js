import Home from "../pages/Home/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function RoutesApp() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
}
