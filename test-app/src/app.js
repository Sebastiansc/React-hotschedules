import React from 'react';
import ReactDOM from 'react-dom';
import TopSalesList from "../../dist/TopSalesList/index.js";
import transformData from "../../dist/Utils/transformData.js";
import request from 'request';

// Wrapper so component can be render in different frameworks without having to
// expose React.
// Parameters:
  // element -> DOM element to append component to.
  // className -> String to add class to component's top level DOM element.
const showTopSalesList = (element, className) => {
  request.get('http://localhost:3000/PurchaseOrders', (err, response, body) => {
    const products = transformData(JSON.parse(body));
    ReactDOM.render(
      <TopSalesList products={products} className={className}/>,
      element
    );
  });
};

// Config webpack so bundle exposes this object as TopSalesList.
// agnostic: use as a function in other frameworks or plain js.
// react: <TopSalesList.react products={products} />
module.exports = {
  agnostic: showTopSalesList,
  react: TopSalesList
};
