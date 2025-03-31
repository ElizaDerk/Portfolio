import image from "../components/img/me.PNG"
const About = () =>{
    return(
        <div className="container-descr">
            <div className="container-title">
                <p className="title-text center">ABOUT ME</p>
            </div>
            <div className="container-about">
                <div className="about-block">
                    <p className="text">
                        I am persistent in achieving the goals, good with multitasking and communications.
                        I have organizational skills, and demanding to myself. I plan my work routine and I am stress resistant.
                        Love to work with information and respect the punctuality.
                    </p>
                    <p className="text">
                        I practice developing nearby a year. During this year I mastered HTML&CS and JS.
                        Also I practice React JS and I want to work with it in a future.
                        I am open for new opportunities as a Front End Developer!
                    </p>
                </div>
                <div>
                    <img src={image} className="about-img" alt="photo"/>
                </div>
            </div>

        </div>
    )
}

export default About;
