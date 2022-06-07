import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Initial_page from "./components/initial_page/index";

function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Initial_page />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
