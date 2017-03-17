import React, { PropTypes } from 'react';
import TopSalesListItem from './top_sales_item.component.js';
import Styles from './top_sales.scss';

const TopSalesList = ({products, className}) => (
  <div className={
      `${Styles.tslWrapper} ${className ? className : ''}`
    }>
    <div className={Styles.tslHeader}>
      <span>Top Sales Items</span>
    </div>

    <ul className={Styles.tslList}>
      {products.map((product, idx) => (
        <TopSalesListItem product={product} key={idx} idx={idx + 1}/>
      ))}
    </ul>

  </div>
);

TopSalesList.propTypes = {
    products: PropTypes.array.isRequired,
    className: PropTypes.string
};

export default TopSalesList;
