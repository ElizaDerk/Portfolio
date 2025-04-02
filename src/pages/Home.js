import drawing from "../components/img/drawing.jpeg"
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "../components/Contact/Contact";
const Home = () =>{
    return (
        <div className="container-block">
            <div className="first-block">
                <div>
                    <h1 className="title-name">Hi,<br/> My name is Elizaveta!</h1>
                    <p className="title-text">Front End Developer</p>

                    <a className="main-btn" href="mailto:elizaveta.derk@gmail.com">
                        Contact me!
                    </a>
                </div>
                <img className="img-drawing" src={drawing}/>
            </div>
            <div>
                <About />
                <Skills />
                <Projects />
            </div>
            <div>
            {/* Email: elizaveta.derk@gmail.com
            LinkedIn: linkedin.com/in/elizasafronova
            GitHub: github.com/ElizaDerk */}
            </div>
        </div>

    )
}

export default Home;
