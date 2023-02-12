import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import Banner from "./Components/Banner";
import Joining from "./Components/Joining";
import SuccessStories from "./Components/SuccessStories";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Components/Register";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path={"/"}
            element={
              <div>
                <NavBar />
                <Banner />
                <Joining />
                <SuccessStories />
              </div>
            }
          />

          <Route
            path={"/login"}
            element={
              <div>
                <NavBar />
                <Register/>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
