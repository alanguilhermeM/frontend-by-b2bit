import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route element={<Login />} path="/" />
      {/* <Route element={<TodoList />} path="/Home" /> */}
    </Routes>
  );
}

export default App;
