import logo from "./logo.svg";
import "./App.css";
import ListOfBooks from "./components/ListOfBooks";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import CreateBookComponent from "./components/CreateBookComponent";
import UpdateComponent from "./components/UpdateComponent";
function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
      <Routes>
        <Route exact path="/" element={<ListOfBooks />}></Route>
        <Route exact path="/add/books" element={<CreateBookComponent />}></Route>
        <Route exact path="/book/update" element={<UpdateComponent />}></Route>
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
