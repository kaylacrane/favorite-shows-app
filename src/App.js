import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import NotFound from "./components/NotFound";
import SeasonList from "./components/SeasonList";
import EpisodeList from "./components/EpisodeList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shows/">
          <Route path=":showId" index element={<SeasonList />} />
          <Route path=":showId/seasons/:seasonId" element={<EpisodeList />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
