import { values } from 'lodash';

//transform data if needed here
export default function transformData(data, limit = 10) {
    const result = {};
    // Count times ordered and aggregate revenue for each product.
    data.forEach(order => {
      order.products.forEach(product => {
        // Initiate or add data to product.
        updateProduct(result, product);
      });
    });
    // Sort by order_count and return an array of size limit.
    return productCollection(result, limit);
}

function productCollection(result, limit) {
  return (
    values(result)
    .sort( (a, b) => b.order_count - a.order_count)
    .slice(0, limit)
  );
}

function updateProduct(result, product) {
  const id = product.product_id;
  result[id] = result[id] || { order_count: 0, revenue: 0, name: product.name };
  result[id].order_count += 1;
  result[id].revenue += revenue(product);
}

function revenue(product) {
  const cost = (
    product.vendor_price.value / Math.pow(10, product.vendor_price.scale)
  );
  return product.order_count * cost;
}
