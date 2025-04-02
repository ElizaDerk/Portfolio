import image from "../components/img/me.PNG"
const About = () =>{
    return(
        <div className="container-descr">
            <div className="container-title">
                <p className="title-text center">ABOUT ME</p>
            </div>
            <div className="container-about">
                <div>
                    <img src={image} className="about-img" alt="photo"/>
                </div>
                <div className="about-block">
                    <p className="text">
                        I am a detail-oriented and creative Frontend Developer with a strong passion for crafting intuitive, high-performance web applications. My expertise spans modern frontend technologies like Blazor, React.js, and JavaScript, with a deep understanding of UI/UX principles, API integration, and performance optimization. I thrive on solving complex challenges and delivering pixel-perfect, responsive designs that enhance user experience.
                    </p>

                    <h2 className="title_h2">Why Work With Me?</h2>
                    <p className="text">
                    I believe that a great digital experience is built on a combination of aesthetics, functionality, and performance. My background in both frontend development and UI/UX design allows me to bridge the gap between visual appeal and technical efficiency. Whether it's developing a robust Blazor-based application, optimizing a React.js project, or designing a seamless WIX website, I bring precision, creativity, and technical excellence to every project.
                    </p>
                </div>

            </div>

        </div>
    )
}

export default About;
