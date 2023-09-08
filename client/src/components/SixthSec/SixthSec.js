import { Component } from "react";
import "./sixthSec.css"
import arcade_icon from "../../CommonResource/images/icons/arcade.png";
import SectionTemplate from "../SectionTemplate";

class SixthSec extends Component {
	render(){
		return (
      <section className="sixth-heghlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="left-side-wrapper col-sm-12 col-md-6">
              <div className="left-side-container">
                <div className="top-logo-wrapper">
                  <div className="logo-wrapper">
                    <img src={arcade_icon} />
                  </div>
                </div>
                <SectionTemplate
                  desc="Agent 8 is a small hero on a big mission."
                  first_link="Play now"
                  sec_link="Learn about Apple Arcade"
                  linkSuper="2"
                />
              </div>
            </div>
            <div className="right-side-wrapper col-sm-12 col-md-6">
              <div className="right-side-container">
                <SectionTemplate
                  productName="Apple Card Monthly Installments"
                  desc="Pay for your next iPhone over time, interest-free with Apple
                  Card."
                  first_link="Learn more"
                  sec_link="Apply now"
                  color="black"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
	}
}

export default SixthSec