import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import Banner from "./Components/Banner";
import Joining from "./Components/Joining";
import SuccessStories from "./Components/SuccessStories";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Components/Register";
import ErrorPage from "./Components/ErrorPage";
import SingleProfiles from "./Components/SingleProfiles";

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
                <Register />
              </div>
            }
          />

          <Route
            path={"/notavailable"}
            element={
              <div>
                <ErrorPage />
              </div>
            }
          />

          <Route
            path={"/singles"}
            element={
              <div>
                <NavBar/>
                <SingleProfiles/>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
