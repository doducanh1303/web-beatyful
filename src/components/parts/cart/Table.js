import React from "react";
import "../cart/Cart.css"
function Table(props) {
    const cart = localStorage.getItem("cart")
    
  return (
    <div>
      <table>
        <tr>
          <th>Anh</th>
          <th>Gía</th>
          <th>Số lượng</th>
          <th>Tổng</th>
        </tr>
            
      </table>
    </div>
  );
}

export default Table;
