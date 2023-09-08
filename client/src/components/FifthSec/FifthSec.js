import { Component } from "react";
import "./fifthSec.css"
import apple_tv_logo from "../../CommonResource/images/icons/apple-tv-logo.png";
import banker from "../../CommonResource/images/home/banker.png";
import watch_series5_logo from "../../CommonResource/images/icons/watch-series5-logo.png";
import SectionTemplate from "../SectionTemplate";

class FifthSec extends Component{
	render(){
		return (
			<section className="fifth-heghlight-wrapper">
				<div className="container-fluid">
				<div className="row">
					<div className="left-side-wrapper col-sm-12 col-md-6">
					<div className="left-side-container">
						<div className="top-logo-wrapper">
						<div className="logo-wrapper">
							<img src={apple_tv_logo} />
						</div>
						</div>

						<div className="tvshow-logo-wraper">
						<img src={banker} />
						</div>

						<div className="watch-more-wrapper">
						<a href="#">Watch now on the Apple TV App</a>
						</div>
					</div>
					</div>
					<div className="right-side-wrapper col-sm-12 col-md-6">
					<div className="right-side-container">
						<div className="top-logo-wrapper">
						<div className="logo-wrapper">
							<img src={watch_series5_logo} />
						</div>
						</div>
						<SectionTemplate
                            desc="With the Always-On Retina display. You’ve never seen a watch like this."
							first_link="Learn more"
							sec_link="Buy"
							color
                        />
						{/* <div className="description-wraper">
						
						<br />
						
						</div>
						<div className="links-wrapper">
						<ul>
							<li>
							<a href="#"></a>
							</li>
							<li>
							<a href="#"></a>
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

export default FifthSec;
