// React import not required with new JSX runtime
import PropTypes from 'prop-types';
import './TotalCost.css';

const TotalCost = ({ totalCosts, items, ItemsDisplay }) => {
  const totalAmount = totalCosts.venue + totalCosts.av + totalCosts.meals;

  return (
    <div className="pricing-app">
      <div className="display_box">
        <div className="header">
          <h3 className="preheading">Total cost for the event</h3>
        </div>

        <div className="total-summary">
          <h2 id="pre_fee_cost_display" className="price">
            ${totalAmount.toLocaleString()}
          </h2>
        </div>

        <div className="render_items">
          {items.length > 0 ? (
            <ItemsDisplay items={items} />
          ) : (
            <p className="no-items">No items selected yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TotalCost;

TotalCost.propTypes = {
  totalCosts: PropTypes.shape({
    venue: PropTypes.number,
    av: PropTypes.number,
    meals: PropTypes.number,
  }).isRequired,
  items: PropTypes.array.isRequired,
  ItemsDisplay: PropTypes.func.isRequired,
};