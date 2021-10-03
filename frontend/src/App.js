import React from "react";
import  {BrowserRouter as Router,Route} from  'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from "./components/header.js"
import Footer from "./components/footer.js"
import HomeScreen from "./screens/HomeScreen.js";
import ProductScreen from "./screens/ProductScreen.js";
import CartScreen from "./screens/CartScreen.js";

const App = () => {
  return (

  <Router>  
      <Header />

            <main className='py-3'>
                  <Container>
                  <Route path='/' component={HomeScreen} exact />
                  <Route path='/product/:id' component={ProductScreen} exact />
                  <Route path='/cart/:id?' component={CartScreen} exact />
                  </Container>
            </main>
    <Footer />
 </Router>
  );
}

export default App;
