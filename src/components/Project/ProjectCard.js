import styles from "./ProjectCard.css"
import Card from 'react-bootstrap/Card';
import {ListGroup} from "react-bootstrap";

const ProjectCard = () => {
    // const project = [
    //     {
    //         id: 1,
    //         title: "Help for animals in Ukraine",
    //         description: "This project is for volunteers from the city of Kharkiv, who helped to evacuate/feed/treat pets that were left without a home/owners.",
    //         tools: "React",
    //         link: "https://elizaderk.github.io/AnimalHelp/",
    //         img: "https://i.postimg.cc/kGLYqtzY/Animal.png"
    //     },
    //     {
    //         id: 2,
    //         title: "Perfect Day",
    //         description: "" ,
    //         tools: "HTML, CSS, JavaScript",
    //         link: "https://elizaderk.github.io/PerfectDay/",
    //         img: "https://i.postimg.cc/rpzFzDpC/Perfect-Day.png"
    //     },
    //     {
    //         id: 3,
    //         title: "FilmSearcher",
    //         description: "" ,
    //         tools: "React, Redax",
    //         link: "https://elizaderk.github.io/FilmSearcher/",
    //         img: "https://i.postimg.cc/tJgYdBqw/film.png"
    //     },
    // ]


    return(
        <div className="project-card">
            <Card style={{ width: '400px' }} className='card-item'>
                <Card.Img variant="top" src="https://i.postimg.cc/kGLYqtzY/Animal.png" alt='Animal' />
                <Card.Body>
                    <Card.Title>Help for animals in Ukraine</Card.Title>
                    <span className="line-title"></span>
                    <div className="class">
                        <ListGroup variant="flush">
                            <ListGroup.Item>React</ListGroup.Item>
                        </ListGroup>
                        <div>
                            <a className="btn-click" href="https://elizaderk.github.io/AnimalHelp/">Click to visit!</a>
                        </div>

                    </div>

                </Card.Body>
            </Card>

            <Card style={{ width: '400px' }} className='card-item'>
                <Card.Img variant="top" src="https://i.postimg.cc/rpzFzDpC/Perfect-Day.png" alt='Day' />
                <Card.Body>
                    <Card.Title>Perfect Day</Card.Title>
                    <span className="line-title"></span>
                    <div className="class">
                        <ListGroup variant="flush">
                            <ListGroup.Item>HTML</ListGroup.Item>
                            <ListGroup.Item>CSS</ListGroup.Item>
                            <ListGroup.Item>Java Script</ListGroup.Item>
                        </ListGroup>
                        <div>
                            <a className="btn-click" href="https://elizaderk.github.io/PerfectDay/">Click to visit!</a>
                        </div>

                    </div>
                </Card.Body>
            </Card>

            <Card style={{ width: '400px' }} className='card-item'>
                <Card.Img variant="top" src="https://i.postimg.cc/tJgYdBqw/film.png" alt='Film' />
                <Card.Body>
                    <Card.Title>Film Searcher</Card.Title>
                    <span className="line-title"></span>
                    <div className="class">
                        <ListGroup variant="flush">
                            <ListGroup.Item>React</ListGroup.Item>
                            <ListGroup.Item>Redax</ListGroup.Item>
                        </ListGroup>
                        <div>
                            <a className="btn-click" href="https://elizaderk.github.io/FilmSearcher/">Click to visit!</a>
                        </div>

                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProjectCard;
