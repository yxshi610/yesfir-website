import './styles/nav.css';
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
                <a href="/" className="active">Home</a>
                <a href="/projects">Projects</a>
                <a className="icon" onClick={ this.myFunction }>&#9776;</a>
            </div>
            <div className="mb-3" style={{"margin-left": 20, "margin-right": 20}}>
                <div className="row no-gutters">
                    <div className="col-md-3">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png" className="card-img" style={{"width": 200}} />
                    </div>
                    <div className="col-md-9">
                        <div className="card-body">
                            <h5 className="card-title">Yuxing Shi</h5>
                            <p className="card-text"><small className="text-muted">first year Computer Science graduate @Rice University</small></p>
                            <p>Houston, Texas</p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{"margin-left": 20, "margin-right": 20}}>
                <p className="font-light">A paragraph of introduction and show <a
                        href="/projects/">projects</a> here.
                </p>
            </div>
      </div>
    );
  }
}
