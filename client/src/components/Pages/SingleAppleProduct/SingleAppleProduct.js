import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SingleAppleProduct() {
  const [iphones, setIphones] = useState([]);
  useEffect(() => {
    fetch("/iphone.json")
      // fetch("http://localhost:3111/iphones")
      .then((res) => res.json())
      .then((data) => {
        const P_iphones = data.products;
        setIphones(P_iphones);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <section className="internal-page-wrapper">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12 mt-5">
              <div className="title-wraper font-weight-bold mt-5">Iphones</div>
              <div className="brief-description">
                The best for the brightest.
              </div>
            </div>
          </div>
          {iphones?.map((iphone, index) => {
            console.log(iphone);
            const {
              product_url,
              product_name,
              product_img,
              product_brief_description,
              starting_price,
              price_range,
            } = iphone;

            let productDiv = (
              <div
                key={product_url}
                className="row justify-content-center text-center product-holder h-100 my-5"
              >
                <div
                  className={`col-sm-12 col-md-6 my-auto order-${
                    index % 2 === 0 ? "1" : "2"
                  }`}
                >
                  <div className="product-title">{product_name}</div>
                  <div className="product-brief">
                    {product_brief_description}
                  </div>
                  <div className="starting-price">
                    {`Starting at ${starting_price}`}
                  </div>
                  <div className="monthly-price">{price_range}</div>
                  <div className="links-wrapper">
                    <ul>
                      <li>
                        <Link to={`/iphone/${product_url}`}>Learn more</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div
                  className={`col-sm-12 col-md-6 order-${
                    index % 2 === 0 ? "2" : "1"
                  }`}
                >
                  <div className="prodict-image">
                    <img src={product_img} alt="product" />
                  </div>
                </div>
              </div>
            );
            return productDiv;
          })}
        </div>
      </section>
    </div>
  );
}

export default SingleAppleProduct;
