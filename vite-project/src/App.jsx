import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AddPost from "./components/addPost/AddPost";

import "./App.css";

function App() {
  return (
  <BrowserRouter>
    <Header isLogged={true}/>
    <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-post" element={<AddPost/>} />
        {/*<Route path='/about' element = {/*<About/>//>*/}
        {/*<Route path='/contact' element = {<Contact/>}/>*/}
        {/*<Route path="/my-blogs" element={<MyBlogs />} />*/}
      </Routes>
    </div>
    <Footer />
  </BrowserRouter>
  )
}

export default App;
