import './styles/Projects.css';
import React from "react";
import "./styles/nav.css";

export default class Projects extends React.Component {
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
            <div className="topnav" id="myTopnav">
                <a href="/">Home</a>
                <a href="/projects" className="active">Projects</a>
                <a className="icon" onClick={ this.myFunction }>&#9776;</a>
            </div>
        );
    }
}