import React, { Component } from "react";
import "./HeroImage.css";

class HeroImage extends Component {
  render() {
    return (
      <div className="hero-img">
        <div className="headings">
          <h1>{this.props.heading}</h1>
          <p>{this.props.data}</p>
        </div>
      </div>
    );
  }
}

export default HeroImage;
