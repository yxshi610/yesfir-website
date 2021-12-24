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
                <div className="topnav" id="myTopnav" >
                    <a href="/" className="inactive">Home</a>
                    <a href="/projects" className="active">Projects</a>
                    <a href="/arts" className="inactive">Arts</a>
                    <a className="icon" onClick={ this.myFunction }>&#9776;</a>
                </div>
                <div className="mb-3" style={{"margin-left": 30, "margin-right": 30}}>
                    <div className="container" style={{"marginLeft": 0}}>
                        <div style={{"display": "inline-block"}}>
                            <img src={ avatar } className="card-img" style={{"width": 200}} />
                            <p>&copy; Tea Me @ArtSation</p>
                        </div>
                        <div style={{"display": "inline-block", "paddingLeft": "20px"}}>
                            <h5 className="name">YUXING SHI</h5>
                            <p className="text"><IoSchoolOutline/ > Computer Science graduate @Rice Univ.</p>
                            <p className="text"><IoLocationOutline/ > Houston, Texas</p>
                            <p style={{"font-size": 18}}>Web Development: <span className="tag">Full Stack</span> <span className="tag">MongoDB</span> <span className="tag">Express</span> <span className="tag">React</span> <span className="tag">Node.js</span></p>
                            <p style={{"font-size": 18}}>Computer Graphics: <span className="tag">C#</span> <span className="tag">Unity3D</span> <span className="tag">Physical Simulation</span> </p>
                            <p style={{"font-size": 18}}>Others: <span className="tag">C/C++</span> <span className="tag">Data Structres</span> <span className="tag">Algorithms</span> </p>
                            <SocialIcon target="_blank" url="https://www.linkedin.com/in/yuxing-shi-974989192/" style={{ height: 35, width: 35, marginRight: 15 }} bgColor="black" />
                            <SocialIcon target="_blank" url="https://github.com/yxshi610" style={{ height: 35, width: 35, marginRight: 15 }} bgColor="black" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}