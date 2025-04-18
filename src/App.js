import './App.css';
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";

function App() {

    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/projects" element={<Projects/>} />
                    <Route path="/skills" element={<Skills/>} />
                </Routes>
            </div>
        </>
    )
}

export default App;

