import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import PostList from "./PostList";
import Home from "./Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<PostList />} />
      </Routes>
      <Link to="/list">List</Link>
    </>
  );
}

export default App;
