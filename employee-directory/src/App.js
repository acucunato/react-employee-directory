import React from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import TableHeader from "./components/TableHeader";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <TableHeader />
    </div>
  );
}

export default App;
