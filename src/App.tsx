import { Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Profile from "./Pages/Profile";
import Detail from "./Pages/Detail";

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
