import { Route, BrowserRouter as Router, Routes} from "react-router-dom"
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
        <div className="flex flex-col justify-between h-screen">
          <Navbar></Navbar>
        <main className="container mx-auto px-3 pb-13">
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/about" element={<About></About>}> </Route>
            <Route path="/notfound" element={<NotFound></NotFound>}> </Route>
            <Route path="/*" element={<NotFound></NotFound>}></Route>
          </Routes>
        </main>
     
          <Footer></Footer>
        </div>
    </Router>
  );
}

export default App;