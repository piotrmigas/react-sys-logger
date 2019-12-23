import React, { useEffect } from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import SearchBar from "./components/SearchBar";
import Logs from "./components/Logs";
import AddBtn from "./components/AddBtn";
import AddLogModal from "./components/AddLogModal";
import EditLogModal from "./components/EditLogModal";
import AddTechModal from "./components/AddTechModal";
import TechListModal from "./components/TechListModal";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  useEffect(() => {
    M.AutoInit(); // Init Materialize javascript
  });
  return (
    <Provider store={store}>
      <SearchBar />
      <div className="container">
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <TechListModal />
        <Logs />
      </div>
    </Provider>
  );
}

export default App;
