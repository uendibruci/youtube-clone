import "./App.css";
import Header from "./Header";
import RecommendedVideos from "./RecommendedVideos";
import Sidebar from "./Sidebar";
import SearchPage from "./SearchPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/search"
            element={
              <div className="app__page">
                <>
                  <Sidebar />
                  <SearchPage />
                </>
              </div>
            }
          />
          <Route
            path="/"
            element={
              <div className="app__page">
                <>
                  <Sidebar />
                  <RecommendedVideos />
                </>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
