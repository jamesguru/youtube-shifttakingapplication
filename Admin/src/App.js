import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Announcement from "./pages/Announcement/Announcement";
import ClientList from "./pages/ClientList/ClientList";
import Client from "./pages/client/Client"

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/staffs">
            <UserList />
          </Route>
          <Route path="/clients">
            <ClientList />
          </Route>
          <Route path="/client/:clientId">
           <Client />
          </Route>
          <Route path="/staff/:staffId">
            <User />
          </Route>
          <Route path="/announcement">
            <Announcement />
          </Route>
          <Route path="/newStaff">
            <NewUser />
          </Route>
          <Route path="/shifts">
            <ProductList />
          </Route>
          <Route path="/shift/:shiftId">
            <Product />
          </Route>
          <Route path="/newShift">
            <NewProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
