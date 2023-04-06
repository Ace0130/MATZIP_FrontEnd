import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Detail from "./pages/Detail";

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
