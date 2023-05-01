import { Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Login from "./pages/login";
import SignUp from "./pages/signUp";
import Profile from "./pages/profile";
import Detail from "./pages/detail";

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
