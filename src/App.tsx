import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ArticlePage from "./pages/ArticlePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import CreateArticle from "./pages/CreateArticle";
import About from "./pages/About";
import SettingsPage from "./pages/SettingsPage";
import Rating from "./pages/Rating";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/rating" element={<Rating />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<CreateArticle />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/article/:id" element={<ArticlePage />} />
      </Routes>
    </>
  );
}

export default App;




