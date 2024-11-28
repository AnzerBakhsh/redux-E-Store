import React from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Navbar from "./Components/Navbar"
import { Provider } from "react-redux"
// import { stopCoverage } from "v8"
import store from "./store/store"


function App() {


  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
    </BrowserRouter>
    </Provider>

    </>
  )
}

export default App
