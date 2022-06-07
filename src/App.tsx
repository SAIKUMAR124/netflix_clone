import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Initial_page from "./components/initial_page/index";
import LoginPage from "./components/login_page/LoginPage";

function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Initial_page />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
