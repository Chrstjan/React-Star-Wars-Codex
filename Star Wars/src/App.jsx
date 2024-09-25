import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useFetch } from "./hooks/useFetch";
import { useImages } from "./hooks/useImages";
import "./App.scss";
import { MainLayout } from "./layouts/MainLayout";
import { HomePage } from "./pages/HomePage";
import { SearchPage } from "./pages/SearchPage";
import { CharactersPage } from "./pages/CharactersPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={"/"} element={<MainLayout />}>
            <Route index element={<HomePage />}/>
            <Route path={"/search"} element={<SearchPage />}/>
            <Route path={"/characters"} element={<CharactersPage />}/>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
