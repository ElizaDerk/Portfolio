import image from "../components/img/me.PNG";

const Skills = () =>{
    return (
        <div className="container-descr">
            <div className="container-title">
                <h2 className="title-text center">SKILLS</h2>
            </div>
            <div>
                <div className="block-wrapper">
                    <div className="block-text">
                        <p className="text wrapper">HTML</p>
                        <span>Exellent</span>
                    </div>
                    <div className="first-board">
                        <div className="second-board"></div>
                    </div>
                </div>
                <div className="block-wrapper">
                    <div className="block-text">
                        <p className="text wrapper">CSS, Sass & Bootstrap</p>
                        <span>Exellent</span>
                    </div>
                    <div className="first-board">
                        <div className="second-board"></div>
                    </div>
                </div>
                <div className="block-wrapper">
                    <div className="block-text">
                        <p className="text wrapper">JavaScript, JQuery</p>
                        <span>Exellent</span>
                    </div>
                    <div className="first-board">
                        <div className="second-board"></div>
                    </div>
                </div>
                <div className="block-wrapper">
                    <div className="block-text">
                        <p className="text wrapper">React.js</p>
                        <span>Regular</span>
                    </div>
                    <div className="first-board">
                        <div className="third-board"></div>
                    </div>
                </div>
                <div className="block-wrapper">
                    <div className="block-text">
                        <p className="text wrapper">Node.js</p>
                        <span>Beginner</span>
                    </div>
                    <div className="first-board">
                        <div className="forth-board"></div>
                    </div>
                </div>
            </div>
            <div className="add-skills">
                <h2 className="title-text">Additional technologies and skills</h2>
                <div className="skills-list">
                    <ul>
                        <li className="skills-item">Git</li>
                        <li className="skills-item">Photoshop / Illustrator / Figma</li>
                        <li className="skills-item">Redax</li>
                    </ul>
                    <ul>
                        <li className="skills-item">Mongo DB, Express.js</li>
                        <li className="skills-item">Webpack, Vite</li>
                        <li className="skills-item">English: INTERMEDIATE</li>
                    </ul>
                </div>

            </div>

        </div>
    )
}

export default Skills;
