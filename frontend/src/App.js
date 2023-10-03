import "./App.css";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import Header from "./Components/Header/Header";
import routes from "./routes";
import { useRoutes } from "react-router-dom";

function App() {
  const router = useRoutes(routes);
  return (
    <>
      <Sidebar />
      <div className="main">
        <Header />
        {router}
      </div>
    </>
  );
}

export default App;
