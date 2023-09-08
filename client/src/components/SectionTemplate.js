import React, { Component } from "react";

class SectionTemplate extends Component {
  render() {
    const {
      type,
      productName,
      desc,
      price,
      first_link,
      sec_link,
      color,
      superScript,
      bold,
      linkSuper,
    } = this.props;
    let colour = color ? "black" : "white";
    return (
      <>
        {type ? <div className="new-alert">{type}</div> : <></>}
        {productName ? (
          <div className={`title-wraper ${bold ? "bold" : ""} ${colour}`}>
            {productName}
          </div>
        ) : (
          <></>
        )}
        {desc ? (
          <div className={`description-wrapper ${colour}`}>{desc}</div>
        ) : (
          <></>
        )}
        {price ? (
          <div className="price-wrapper grey">
            {price} {superScript ? <sup>{superScript}</sup> : <></>}
          </div>
        ) : (
          <></>
        )}
        <div className="links-wrapper">
          <ul>
            <li>
              <a href="#">
                {first_link}
                {linkSuper ? <sup>{linkSuper}</sup> : <></>}
              </a>
            </li>
            <li>
              <a href="#">{sec_link}</a>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default SectionTemplate;
