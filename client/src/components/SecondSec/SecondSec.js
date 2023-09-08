import { Component } from "react";
import "./secondSec.css"
import SectionTemplate from "../SectionTemplate";

class SecondSec extends Component {
  render(){
    return (
      <section className="second-hightlight-wrapper">
        <div className="container">
          <SectionTemplate
            type="New"
            productName="MacBook Air"
            desc="Twice the speed. Twice the storage."
            price="From $999."
            first_link="Learn more"
            sec_link="Buy"
            color="black"
            bold
          />
        </div>
      </section>
    );
  }
}

export default SecondSec