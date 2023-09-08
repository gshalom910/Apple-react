import { Component } from "react";
import "./fourthSec.css"
import SectionTemplate from "../SectionTemplate";

class FourthSec extends Component {
  render(){
    return (
      <section className="fourth-heghlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="left-side-wrapper col-sm-12 col-md-6">
              <div className="left-side-container">
                <SectionTemplate
                  productName="iPhone 11"
                  desc="Just the right amount of everything."
                  price="From $18.70/mo. or $499 with trade‑in."
                  first_link="Learn more"
                  sec_link="Apply now"
                  superScript="1"
                  color
                />
              </div>
            </div>
            <div className="right-side-wrapper col-sm-12 col-md-6">
              <div className="right-side-container">
                <SectionTemplate
                  productName="Get the latest CDC response to COVID-19."
                  sec_link="Watch the PSA"
                />
                {/* <div className="title-wraper white">
                  
                </div>

                <div className="links-wrapper white">
                  <ul>
                    <li>
                      <a href=""></a>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FourthSec