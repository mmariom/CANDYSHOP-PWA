import React from "react";
import  {BrowserRouter as Router,Route} from  'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from "./components/header.js"
import Footer from "./components/footer.js"
import HomeScreen from "./screens/HomeScreen.js";
import ProductScreen from "./screens/ProductScreen.js";
import CartScreen from "./screens/CartScreen.js";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/Profilescreen.js";
import ShippingScreen from "./screens/ShippingScreen.js";
import PaymentScreen from "./screens/PaymentScreen.js";
import PlaceOrderScreen from "./screens/PlaceOrderScreen.js";
import OrderScreen from "./screens/OrderScreen.js";
import UserListScreen from "./screens/UserListScreen.js";
import UserEditScreen from "./screens/UserEditScreen.js";
import ProductListScreen from "./screens/ProductListScreen.js";
import ProductEditScreen from "./screens/ProductEditScreen.js";
import OrderListScreen from "./screens/OrderListScreen.js";



const App = () => {
  return (

  <Router>  
      <Header />

            <main className='py-3'>
                  <Container>
                  <Route path='/order/:id' component={OrderScreen}  />
                  <Route path='/login' component={LoginScreen}  />
                  <Route path='/payment' component={PaymentScreen}  />
                  <Route path='/placeorder' component={PlaceOrderScreen}  />
                  <Route path='/shipping' component={ShippingScreen}  />
                  <Route path='/register' component={RegisterScreen}  />
                  <Route path='/profile' component={ProfileScreen}  />
                  <Route path='/product/:id' component={ProductScreen}  />
                  <Route path='/cart/:id?' component={CartScreen}  />
                  <Route path='/admin/userlist' component={UserListScreen}  />
                  <Route path='/admin/user/:id/edit' component={UserEditScreen}  />
                  <Route path='/admin/productlist' component={ProductListScreen}  />
                  <Route path='/admin/product/:id/edit' component={ProductEditScreen}  />
                  <Route path='/admin/orderlist' component={OrderListScreen}  />
                  <Route path='/' component={HomeScreen} exact />
                  </Container>
            </main>
    <Footer />
 </Router>
  );
}

export default App;
