import ProductList from "./pages/ProductList";
import Home from "./pages/Home"
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Favourite from "./pages/Favourite"
import { useSelector } from "react-redux";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

//navigates to each page
const App = () => {
  const user = useSelector((state) => state.user.currentUser);;
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/favourite" element={<Favourite/>} />
        <Route path="/products/:category" element={<ProductList/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        //if there is user , then direct to home page.Else ,stay in login page.
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />}/>
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register />}/>
      </Routes>
    </Router>
  );
};

export default App;