import './styles/App.css';
import React from "react";

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
        <div>
            <div className="topnav" id="myTopnav">
                <a href="/" className="active" >Home</a>
                <a href="/projects" className="inactive">Projects</a>
                <a href="/arts" className="inactive">Arts</a>
                <a className="icon" onClick={ this.myFunction }>&#9776;</a>
            </div>
            <div className="mb-3" style={{"margin-left": 50, "margin-right": 50}}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src="https://cdna.artstation.com/p/assets/images/images/027/149/850/large/xision-wu-bc0ec2f9ly1g82pwpnad4j21hc0y1qv5.jpg?1590723150" className="card-img" style={{"width": 200}} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="name">YUXING SHI</h5>
                            <p className="text"><small className="text-muted">first year Computer Science graduate @Rice University</small></p>
                            <p className="text">Houston, Texas</p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{"margin-left": 50, "margin-right": 50}}>
                <p className="text">Just to make the paragraph seems to be longer. Just to make the paragraph seems to be longer.Just to make the paragraph seems to be longer.Just to make the paragraph seems to be longer.A paragraph of introduction and show <a
                        href="/projects/">projects</a> here.
                </p>
            </div>
      </div>
    );
  }
}
