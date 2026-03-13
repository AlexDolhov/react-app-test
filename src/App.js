import { lazy } from "react";
// import Stuff from "./pages/Stuff";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"

const Home = lazy(() => import("./pages/Home"));
const Stuff = lazy(() => import("./pages/Stuff"));
const Tasks = lazy(() => import("./pages/Tasks"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>} >
        <Route index element={<Home/>} />
        <Route path="stuff" element={<Stuff/>} />
        <Route path="tasks" element={<Tasks/>} />
      </Route>
    </Routes>
  );
};

export default App