import React, { useState } from "react";
import ProductData from "./ProductData";
import { IoIosCloseCircle } from "react-icons/io";
import Buy from "./Buy";
import { Link } from "react-router-dom";

const Product = () => {
  const [detail, setDetail] = useState([]);
  const [close, setClose] = useState(false);
  const detailPage = (Product) => {
    setDetail([{ ...Product }]);
    setClose(true);
  };
  return (
    <>
      {close ? (
        <div className="product-detail-container">
          <div className="product-detail-contant">
            <button className="product-close" onClick={() => setClose(false)}>
              <IoIosCloseCircle />
            </button>
            {detail.map((x) => {
              return (
                <>
                  <div className="product-detail-info">
                    <div className="product-img-box">
                      <img src={x.img} alt={x.title}></img>
                    </div>
                    <div className="product-detail">
                      <h2>{x.title}</h2>
                      <h3>${x.Price}</h3>
                      <p>{x.Des}</p>
                      <Link to="/buynow" className="buy-now-link">
                        <button><Buy/></button>
                      </Link>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      ) : null}
      <div className="product-cont">
        {ProductData.map((currElm) => {
          return (
            <>
              <div className="product-box">
                <div className="product-contant">
                  <div className="product-img-box">
                    <img src={currElm.img} alt={currElm.title}></img>
                  </div>
                  <div className="product-deatil">
                    <div className="product-info">
                      <h3>{currElm.title}</h3>
                      <p>${currElm.Price}</p>
                    </div>
                    <button onClick={() => detailPage(currElm)}>View</button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Product;
