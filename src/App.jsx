import Navbar from "./navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
function App() {

  //to use dynamic value write normal js before return and the using curly braces call the function
  const name = "Yo it's crazyyyy here";
  return (
    <Router>
      <div>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={< BlogDetails/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
