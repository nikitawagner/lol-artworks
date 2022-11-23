import "./App.css";
import Landingpage from "./landingpage/Landingpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigationbar from "./navbar/Navigationbar";

function App() {
  return (
    <>
      <Navigationbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
