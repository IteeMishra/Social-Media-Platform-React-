import "bootstrap/dist/css/bootstrap.min.css";
import CreatePost from "./Components/CreatePost";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import Postlist from "./Components/Postlist";
import { useState } from "react";
function App() {
    let [selectedTab,setselectedTab]=useState("Home");

  return (
    <div className="main-container">
    <Sidebar  selectedTab={selectedTab}  setselectedTab={setselectedTab}></Sidebar>
    <div className="inner"style={{width:"100%"}}>
      <Header></Header>
      {selectedTab=="Home"?<Postlist></Postlist>:  <CreatePost></CreatePost>}
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
