import React, { PropTypes } from 'react';
import Styles from './top_sales.scss';

export default class TopSalesListItem extends React.Component {
  constructor() {
    super();
    this.state = { toolTipClass: '' };
  }

  toggleToolTip() {
    const toolTipClass = this.state.toolTipClass ? '' : 'tslToolTipShow';
    this.setState({ toolTipClass });
  }

  renderProductName() {
    // For bigger projects I'd use https://github.com/JedWatson/classnames.
    let toolTipClass = `${Styles.tslToolTip} ${Styles.tslHide}`;
    if (this.state.toolTipClass) toolTipClass += ` ${Styles.tslShow}`;

    return(
      <div
        onMouseOver={() => this.toggleToolTip()}
        onMouseOut={() => this.toggleToolTip()}>
        <span className={`${Styles.tslProductText} ${Styles.tslProductName}`}>
          {this.props.product.name}
        </span>

        <span className={Styles.tslProductText}>
          <span className={toolTipClass}>
            {this.props.product.name}
          </span>
        </span>

      </div>
    );
  }

  render() {
    return(
      <li className={Styles.tslListItem}>
        <div className={Styles.tslListIdx}>
          <span>{this.props.idx}</span>
        </div>
        <div className={Styles.tslListInfo}>
          {this.renderProductName()}
          <span className={Styles.tslRevenue}>
            ${this.props.product.revenue}
          </span>
        </div>
      </li>

    );
  }
}

TopSalesListItem.propTypes = {
  idx: PropTypes.number.isRequired,
  product: PropTypes.object.isRequired
};
