import TopSalesList from './top_sales.component.js';
import request from 'request';
import React from 'react';
import Styles from './top_sales.scss';

import transformData from "../utils/transformData.js";

// Request is not available in top_sales. Created this small class instead of
// reconfiguring webpack.
export default class ApiConnectedList extends React.Component {
  constructor() {
    super();
    this.state = { products: [], loaded: false};
  }

  componentWillMount(){
    request.get(
      'http://localhost:3000/PurchaseOrders',
      (err, response, body) => {
        this.setState({
          products: transformData(JSON.parse(body)),
          loaded: true
        });
      }
    );
  }

  render() {
    const className= this.state.loaded ? Styles.tslShow : '';
    return (
      <div className={`${Styles.tslHide} ${className}`}>
        <TopSalesList
          products={this.state.products}
          className={this.props.className}/>
      </div>
    );

  }
}
