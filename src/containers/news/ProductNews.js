import React from "react";
import { Link } from "react-router-dom";
import "../news/ProductNews.css";
function ProductNews(props) {
  const { newcontent } = props;
  return (
    <div>
      <div className="product-new">
        {newcontent.map((item,index) => {
          return (
            <div className="productgocery-content-small-new" key={index}>
              <Link to={"/vanibeauty/newdetail/" + item._id}>
                <img src={item.image} />
              </Link>
              <div className="productgocery-content-text">
                <h3>{item.title}</h3>
                <div className="is-divider"></div>
                <p>{item.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductNews;
