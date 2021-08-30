import { Pagination } from "antd";
import { ASC, DEFAULT_PAGE_SIZE } from "contants/page";
import { get } from "lodash";
import queryString from "query-string";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { fetchProductStore } from "../../redux/product/action";
import "../grocery/ProductGrocery.css";

function ProductGrocery() {
  const [page, setPage] = useState(1);

  const history = useHistory();

  const location = useLocation();

  const queryParams = queryString.parse(location.search);

  const dispatch = useDispatch();

  const product = useSelector((state) => state.product);

  const productCount = get(product, "productstore.result.total", []);

  const productResult = get(product, "productstore.result.data", []);
  const [filter, setFilter] = useState(() => ({
    page: page,
    pageSize: DEFAULT_PAGE_SIZE,
  }));

  const checkPageSize = (pageIndex, pageSize) => {
    setFilter((previ) => ({
      ...previ,
      page: pageIndex,
    }));
  };

  useEffect(() => {
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filter),
    });
  }, [history, filter]);

  useEffect(() => {
    dispatch(fetchProductStore({ filter }));
  }, [filter]);

  return (
    <div className="productgrocery-content">
      <div className="productgocery-flex">
        {productResult &&
          productResult.map((item) => {
            return (
              <div className="productgocery-content-small">
                <img src={item.image} />
                <div className="productgocery-content-text">
                  <h3>{item.productname}</h3>
                  <p>
                    {
                      /* {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(item?.payload.price)} */
                      item.price
                    }
                  </p>
                </div>
              </div>
            );
          })}
      </div>

      <div className="pagination">
        <Pagination
          total={productCount}
          pageSize={12}
          defaultCurrent={page}
          size="default"
          onChange={(pageIndex, pageSize) => checkPageSize(pageIndex, pageSize)}
        />
      </div>
    </div>
  );
}

export default ProductGrocery;
