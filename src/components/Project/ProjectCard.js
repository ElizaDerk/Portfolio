import styles from "./ProjectCard.css";
import Card from "react-bootstrap/Card";
import { ListGroup } from "react-bootstrap";
import projects from "./projectsData"; 

const ProjectCard = () => {
    return (
        <div className="project-card">
            {projects.map((project) => (
                <Card key={project.id} style={{ width: "400px" }} className="card-item">
                    <Card.Img variant="top" src={project.img} alt={project.title} />
                    <Card.Body>
                        <Card.Title>{project.title}</Card.Title>
                        <span className="line-title"></span>
                        <div className="class">
                            <ListGroup variant="flush">
                                {project.tools.map((tool, index) => (
                                    <ListGroup.Item key={index}>{tool}</ListGroup.Item>
                                ))}
                            </ListGroup>
                            <div>
                                <a className="btn-click" href={project.link} target="_blank" rel="noopener noreferrer">
                                    Click to visit!
                                </a>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};

export default ProjectCard;
