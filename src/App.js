import './styles/App.css';
import React from "react";
import { SocialIcon } from 'react-social-icons';
import avatar from './assets/avatar.png';
import { IoLocationOutline } from "react-icons/io5";
import { IoSchoolOutline } from "react-icons/io5";

export default class App extends React.Component {
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
                <a href="/" className="active" >Home</a>
                <a href="/projects" className="inactive">Projects</a>
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
                            <p className="text"><IoSchoolOutline/ > First year Computer Science graduate @Rice University</p>
                            <p className="text"><IoLocationOutline/ > Houston, Texas</p>
                        <p style={{"font-size": 18}}>Web Development: <span className="tag">Full Stack</span> <span className="tag">MongoDB</span> <span className="tag">Express</span> <span className="tag">React</span> <span className="tag">Node.js</span></p>
                        <p style={{"font-size": 18}}>Computer Graphics: <span className="tag">C#</span> <span className="tag">Unity3D</span> <span className="tag">Physical Simulation</span> </p>
                        <p style={{"font-size": 18}}>Others: <span className="tag">C/C++</span> <span className="tag">Data Structres</span> <span className="tag">Algorithms</span> </p>
                            <SocialIcon target="_blank" url="https://www.linkedin.com/in/yuxing-shi-974989192/" style={{ height: 35, width: 35, marginRight: 15 }} bgColor="black" />
                            <SocialIcon target="_blank" url="https://github.com/yxshi610" style={{ height: 35, width: 35, marginRight: 15 }} bgColor="black" />
                    </div>
                </div>
            </div>
            <div style={{"margin-left": 30, "margin-right": 30}}>
                <p className="text">Hi! This is Yuxing Shi, a fresh year graduate student studying at Rice University. I am currently
                    pursuing my Computer Science Master Degree and have alredy learned a lot in this amazing digital world!</p>
                <p className="text">
                    I am interested in full stack web application development. This personal website is only a simple fronend-only page
                    implemented by React. I do have implemented some apps like RiceBook, which is inspired by Facebook, using MERN stack.
                    Also, I am interested in Computer Graphics and think it amazing to skillfully and beautifully cast objects on screens!
                    After years of learning, I have surely gained the basic Computer Science fundamentions like
                    computer architectures, computer networks and so on. Some works can be checked in <a href="/projects/" style={{"color": "black", "font-weight": "bold"}}>Projects</a>!
                </p>
                <p className="text">
                    By the way, I am an amateur photographer and digital painter, and some artworks are listed in <a href="/projects/" style={{"color": "black", "font-weight": "bold"}}>Arts</a>.
                    For the aesthetic reason, the current avatar is not my work and I have already put the artist's name. Hopefully I will
                    replace that in the near future.
                </p>
            </div>
            <p style={{display: "flex", justifyContent: "center",alignItems: "center"}}>&copy; 2021 Yuxing Shi</p>
      </div>
    );
  }
}
