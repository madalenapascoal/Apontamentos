import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Nota from "./Nota";
import list from "../list";

function inserirLista(nota) {
  return (
    <div>
      <Nota title={nota.title} content={nota.content} />
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      {list.map(inserirLista)}
      <Footer />
    </div>
  );
}

export default App;
