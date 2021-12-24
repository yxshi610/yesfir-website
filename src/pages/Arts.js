import '../styles/Projects.css';
import React from "react";
import { Row, Col, Card, Button, CardGroup } from 'react-bootstrap';
import { artsData } from '../data/arts';
import { BsCalendar2Date } from "react-icons/bs";

export default class Projects extends React.Component {
    constructor() {
        super();
        this.state = { data: [] };
    }

    componentDidMount() {
        this.setState({data: artsData});
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
            <div style={{"maxWidth": 1294, "margin": "auto"}}>
                <div className="topnav" id="myTopnav" style={{"margin-left": 30, "margin-right": 30, "margin-top": 30, "margin-buttom": 30}}>
                    <a href="/" className="inactive">Home</a>
                    <a href="/projects" className="inactive">Projects</a>
                    <a href="/arts" className="active">Arts</a>
                    <a className="icon" onClick={ this.myFunction }>&#9776;</a>
                </div>
                <div className="mb-3" style={{"margin-left": 30, "margin-right": 30}}>
                    <Row xs={1} md={3} className="g-4 mt-1">
                        {artsData.map((p, i) => (
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
                                </Card>
                            </CardGroup>
                        ))}
                    </Row>
                </div>
            </div>
        );
    }
}