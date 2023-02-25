//import logo from './logo.svg';
import React from "react"
import './App.css';
import Header from "./components/Header"
import Main from "./components/Main"
import Service from "./components/Service"
import Servicetwo from "./components/Servicetwo"
import Products from "./components/Products"
import Basket from "./components/Basket"

import Feature from "./components/Feature"
import Process from "./components/Process"
import Clinic from "./components/Clinic"
import Footer from "./components/Footer"
import Testimonial from "./components/Testimonial"
import Gear from "./components/Gear"

// import CardProductGrid from "./components/card/CardProductGrid"
import Expertise from "./components/Expertise"
import ContactUs from "./components/ContactUs"
import DoctorLogin from "./components/Auth/DoctorLogin"
import Login from "./components/Auth/Login"
import Dashboard from "./components/Dashboard"
import drdata from "./doctordata"
import {Switch,Route} from 'react-router-dom';
import {useState} from "react"
import  {data}  from "./data";


function App() {

  const {products} = data;
  console.log(products)
  const doctor = drdata.map(item => {
    return(
       <Feature
       key = {item.id}
       {...item} />
    )
}) 

/* login functionality--*/


const [token,setToken] = useState();

/* cart functionality */
const [cartItems,setCartItems] = React.useState([]);


const onAdd = (product) => {
  
  const exist = cartItems.find(x => x.id === product.id);
  if (exist) {
    setCartItems(cartItems.map(x => x.id===product.id ? {
      ...exist,qty:exist.qty+1} : x
    ));
    } else{
      setCartItems([...cartItems,{...product,qty:1}])
    }

  };


  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const test = {
    id: 1,
        link: "/product/detail",
        name: "Ankle air splint",
        img: "../../images/products/ortho/ankle/Ankle air splint.png",
        price: 180,
        isNew: true,
        description:
          "Nulla sodales sit",
    }
    

  return (
    <div className="App">
   
      <Switch>
        

        <Route exact path="/">
                  <Header countCartItems={cartItems.length} onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>
                  <Main />
                  <Service/>
                  <Servicetwo/>
                  <Process />
                  <Products/>
                  <Footer/>
                  
        </Route>
              
        <Route path="/gear">
              <Header  countCartItems={cartItems.length} onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}/>
              <Gear onAdd={onAdd} onRemove={onRemove} products={data}/>  
              <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>     
                <Footer />
          </Route>

          <Route path="/Expertise">
              <Header />
                <Expertise />
                <Footer />
          </Route>
              
              
          <Route path="/doctorlogin">
                <Header />
                <DoctorLogin />
                <Login setToken={setToken}/>
                <Footer />
          </Route>

          <Route path="/dashboard">
          <Header />
          <Dashboard />
          <Footer />
        </Route>
         
        <Route path="/contactus">
         <Header />
          <ContactUs />
          <Footer />
        </Route>

      </Switch>
        
    </div>
  );
}

export default App;
