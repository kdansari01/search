import "./App.css";
import Navbar from "./component/navbar/Navbar";
import SearchProject from "./pages/searchProject/SearchProject";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route  path="/searchProject"  element={<SearchProject/>} />

        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
