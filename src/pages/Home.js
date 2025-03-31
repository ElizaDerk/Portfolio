import drawing from "../components/img/drawing.png"
import About from "./About";
const Home = () =>{
    return (
        <div className="container-block">

            <h1 className="title-name">Hi,<br/> My name is Elizaveta!</h1>
            <p className="title-text">Front End Developer</p>

            <a className="main-btn" href="mailto:elizaveta.derk@gmail.com">
                Contact me!
            </a>

            <img className="img-drawing" src={drawing}/>
        </div>
    )
}

export default Home;
