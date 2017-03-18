import React from 'react';
import ReactDOM from 'react-dom';
import TopSalesList from "../../dist/TopSalesList/index.js";

// Wrapper so component can be render in different frameworks without having to
// expose React.
// Parameters:
  // element -> DOM element to append component to.
  // className -> String to add class to component's top level DOM element.
const showTopSalesList = (element, className) => {
    ReactDOM.render(
      <TopSalesList className={className}/>,
      element
    );
};

// Config webpack so bundle exposes this object as TopSalesList.
// agnostic: use as a function in other frameworks or plain js.
// react: <TopSalesList.react products={products} />
module.exports = {
  agnostic: showTopSalesList,
  react: TopSalesList
};
