import React from 'react';
import ReactDOM from 'react-dom';
import transformData from "../../dist/Utils/transformData.js";
import request from 'request';

request.get('http://localhost:3000/PurchaseOrders', (err, response, body) => {
  const products = transformData(JSON.parse(body));
  ReactDOM.render(
    <TopSalesList.react products={products}/>,
    document.getElementById("app")
  );
});
