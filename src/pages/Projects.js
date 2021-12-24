import '../styles/Projects.css';
import React from "react";
import { Row, Col, Card, Button, CardGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { projectsData } from '../data/projects';
import avatar from '../assets/avatar.png';
import { AiOutlinePlayCircle } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { BsCalendar2Date } from "react-icons/bs";

export default class Projects extends React.Component {
    constructor() {
        super();
        this.state = { data: [] };
    }

    componentDidMount() {
        this.setState({data: projectsData});
    }

    myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }

    render() {
        return (
            <div style={{"maxWidth": 1280, "margin": "auto"}}>
                <div className="topnav" id="myTopnav" >
                    <a href="/" className="inactive">Home</a>
                    <a href="/projects" className="active">Projects</a>
                    <a href="/arts" className="inactive">Arts</a>
                    <a className="icon" onClick={ this.myFunction }>&#9776;</a>
                </div>
                <div className="mb-3" style={{"margin-left": 30, "margin-right": 30}}>
                    * source protected for course projects <br />
                    <Row xs={1} md={3} className="g-4 mt-1">
                        {this.state.data.map((p, i) => (
                            <CardGroup>
                                <Card>
                                    <Card.Img style={{height: 200, "object-fit": "cover"}} variant="top" src= {require("../assets/p" + i + ".png")} />
                                    <Card.Body>
                                        <Card.Title className="name" >{p.name}</Card.Title>
                                        <Card.Subtitle style={{"margin-bottom": 5, "color": "grey"}}>
                                            <BsCalendar2Date /> {p.date}</Card.Subtitle>
                                        <Card.Text className="text">
                                            {p.description}
                                        </Card.Text>
                                    </Card.Body>
                                    <div style={{"margin-left": 15, "margin-bottom": 15}}>
                                        <a href={p.demo} target="_blank" style={{"margin-right": 10}}>
                                            <Button variant="outline-dark">
                                                <AiOutlinePlayCircle /> Demo
                                            </Button>
                                        </a>
                                        <a href={p.source} target="_blank" >
                                            <Button variant="outline-dark" disabled={!p.source} >
                                                <FiGithub /> Source
                                            </Button>
                                        </a>
                                    </div>
                                </Card>
                            </CardGroup>
                        ))}
                    </Row>
                </div>
            </div>
        );
    }
}