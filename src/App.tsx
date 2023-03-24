import { Routes, Route } from "react-router-dom";
import Detail from "./Pages/Detail";
import Login from "./Pages/Login";
import Main from "./Pages/Main";
import Profile from "./Pages/Profile";
import SignUp from "./Pages/SignUp";

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
