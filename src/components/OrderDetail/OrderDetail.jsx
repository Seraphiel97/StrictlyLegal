import './OrderDetail.css';
import LineItem from '../LineItem/LineItem';

// Used to display the details of any order, including the cart (unpaid order)
export default function OrderDetail({ order, handleChangeQty, handleCheckout }) {
  if (!order) return null;

  // The component creates an array of LineItem components by mapping over the order.lineItems array.
  // Each LineItem component is passed three props: lineItem, isPaid, and key.
  const lineItems = order.lineItems.map(item =>
    <LineItem
      lineItem={item}
      isPaid={order.isPaid}
      handleChangeQty={handleChangeQty}
      key={item._id}
    />
  );

  return (
    <div className="OrderDetail">
      {/* The OrderDetail component then renders a heading section that displays the order ID (if the order has been paid for) or the text "NEW ORDER", as well as the date the order was last updated. */}
      <div className="section-heading">
        {order.isPaid ?
          <span>ORDER <span className="smaller">{order.orderId}</span></span>
          :
          <span>NEW ORDER</span>
        }
        <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
      </div>
      <div className="line-item-container flex-ctr-ctr flex-col scroll-y">
        {/* If there are line items in the order, the component renders a list of LineItem components, followed by a total section that displays the total quantity and total price of the order. 
        If the order has not been paid for, the component also renders a "CHECKOUT" button, which is disabled if there are no line items in the order. */}
        {lineItems.length ?
          <>
            {lineItems}
            <section className="total">
              {order.isPaid ?
                <span className="right">TOTAL&nbsp;&nbsp;</span>
                :
                <button
                  className="btn-sm"
                  onClick={handleCheckout}
                  disabled={!lineItems.length}
                >CHECKOUT</button>
              }
              <span>{order.totalQty}</span>
              <span className="right">${order.orderTotal.toFixed(2)}</span>
            </section>
          </>
          :
          // If there are no line items in the order, the component displays the text "Hungry?".
          <div className="hungry">Hungry?</div>
        }
      </div>
    </div>
  );
}