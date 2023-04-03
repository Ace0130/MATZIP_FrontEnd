import { Routes, Route } from "react-router-dom";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Main />} />
      <Route path={"/login"} element={<Login />} />
      <Route path={"/signup"} element={<SignUp />} />
      <Route path={"/profile"} element={<Profile />} />
      <Route path={"/detail"} element={<Detail />} />
    </Routes>
  );
};

export default App;
