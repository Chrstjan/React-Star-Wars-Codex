import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useFetch } from "./hooks/useFetch";
import { useImages } from "./hooks/useImages";
import "./App.scss";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route>
            <Route />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
