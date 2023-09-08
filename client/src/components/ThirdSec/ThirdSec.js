import { Component } from "react";
import "./thirdSec.css"
import SectionTemplate from "../SectionTemplate";

class ThirdSec extends Component {
  render (){
    return (
      <section className="third-hightlight-wrapper">
        <div className="container">
          <SectionTemplate
            productName="iPhone 11 Pro"
            desc="Pro cameras. Pro display. Pro performance."
            price="From $24.95/mo. or $599 with trade‑in."
            first_link="Learn more"
            sec_link="Buy"
            bold="bold"
          />
        </div>
      </section>
    );
  }
}

export default ThirdSec