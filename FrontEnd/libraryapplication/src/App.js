import ListOfBooks from "./components/ListOfBooks";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import CreateBookComponent from "./components/CreateBookComponent";
import UpdateComponent from "./components/UpdateComponent";
import Login from "./components/LoginBookComponent";
import SingleBookComponent from "./components/SingleBookComponent";
function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" exact element={<ListOfBooks />}></Route>
          <Route path="/books" element={<ListOfBooks />}></Route>
          <Route path="/add/books" element={<CreateBookComponent />}></Route>
          <Route path="/books/login" element={<Login />}></Route>
          <Route path="/book/update" element={<UpdateComponent />}></Route>
          <Route
            path="/book/singleBook"
            element={<SingleBookComponent />}
          ></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
