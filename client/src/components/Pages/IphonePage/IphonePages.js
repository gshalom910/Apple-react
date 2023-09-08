import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Four04 from "../Four04/Four04";

function IphonePage() {
  const [products, setProducts] = useState([]);
  const { productID } = useParams();
  useEffect(() => {
    // fetch("http://localhost:3111/iphones")
    fetch("/iphone.json")
      .then((res) => res.json())
      .then((products) => {
        const productList = products.products;
        const singleProduct = productList.filter(
          (product) => product.product_url === productID
        );
        setProducts(singleProduct);
      })
      .catch(() => console.log("Error: unable to fetch!!"));
  }, [productID]);

  if (products.length) {
    return (
      <div>
        <section className="internal-page-wrapper">
          <div className="container">
            {products?.map((product) => {
              const {
                product_id,
                product_name,
                product_img,
                product_brief_description,
                product_description,
                starting_price,
                price_range,
              } = product;
              // let id = product.product_id;
              // let title = product.product_name;
              // let img = product.product_img;
              // let Brief = product.product_description;
              // let StartPrice = product.starting_price;
              // let PriceRange = product.price_range;
              // // let productPage = "/iphone/" + id;
              // let details = product.product_brief_description;

              let productDiv = (
                <div key={product_id} className="my-5">
                  <div className="row justify-content-center text-center">
                    <div className="col-12 mt-5">
                      <div className="title-wraper font-weight-bold">
                        {product_name}
                      </div>
                      <div className="brief-description pb-3">
                        {product_description}
                      </div>
                    </div>
                  </div>

                  <div className="row justify-content-center text-center product-holder h-100">
                    <div className={`col-sm-12 col-md-6 my-auto`}>
                      <div className="starting-price">
                        {`Starting at ${starting_price}`}
                      </div>
                      <div className="monthly-price">{price_range}</div>
                      <div className="pt-3 black">
                        {product_brief_description}
                      </div>
                    </div>

                    <div className={`col-sm-12 col-md-6`}>
                      <div className="prodict-image">
                        <img src={product_img} alt="product" />
                      </div>
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
  } else {
    return <Four04 />;
  }
}

export default IphonePage;
