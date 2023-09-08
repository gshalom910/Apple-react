import { Component } from "react";
import "./firstSec.css"
import SectionTemplate from "../SectionTemplate";

class FirstSec extends Component{
  render(){
    return (
      <section className="first-hightlight-wrapper">
        <div className="container">
          <SectionTemplate
            type="New"
            productName="iPad Pro"
            first_link="Learn more"
            sec_link="Order"
            color="black"
            bold
          />
          <div className="ipod-caption row">
            <div className="col-sm-12 col-md-6 text-md-right">
              iPad Pro available starting 3.25
            </div>
            <div className="col-sm-12 col-md-6 text-md-left">
              Magic Keyboard coming in May
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FirstSec