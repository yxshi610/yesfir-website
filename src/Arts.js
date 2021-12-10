import './styles/Projects.css';
import React from "react";

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
            <div style={{"max-width": 1280, "margin": "auto"}}>
                <div className="topnav" id="myTopnav" style={{"margin-left": 30, "margin-right": 30, "margin-top": 30, "margin-buttom": 30}}>
                    <a href="/" className="inactive">Home</a>
                    <a href="/projects" className="inactive">Projects</a>
                    <a href="/arts" className="active">Arts</a>
                    <a className="icon" onClick={ this.myFunction }>&#9776;</a>
                </div>
            </div>
        );
    }
}