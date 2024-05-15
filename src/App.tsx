import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>
      <Route element={<Profile />} path="/profile" />
      <Route element={<Login />} path="/" />
    </Routes>
  );
}

export default App;
