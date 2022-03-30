 import React from "react";
 
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import Salider from "./components/Salider/Salider";
import Product from "./components/Products/Product";
 
function App() {
  return (
    <div>
     <Header/>
     <Salider></Salider>
     <Product/>
    </div>
  );
}

export default App;
