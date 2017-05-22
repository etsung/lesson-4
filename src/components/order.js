/**
 * Created by eddiemac on 5/21/2017.
 */
import React from 'react'
import { Link } from 'react-router-dom'

import './order.css'


function formatPrice (priceInCents) {
    return `$${(priceInCents / 100).toFixed(2)}`
}






class Order extends React.Component {
    
   

    render () {
        const { order } = this.props
        return(
            <div>
               <div className="orderList">
                    <h1>Shopping Cart</h1>
                   <Link to="/"><span className="keepShopping">(Keep Shopping)</span></Link>
                            <li>
                                {(order.items.length === 0) ?   <ul className="emptyCart">Cart is empty</ul> :
                                    order.items.map(pastry => {
                                    return <ul className="orderItem">
                                        <span className="itemName">Pastry: {pastry.name}</span><br/>
                                        <span className="itemPrice"> Price: {formatPrice(pastry.price)}</span><br/>
                                        <span className="itemQuantity">Quantity: {pastry.quantity}</span>
                                       </ul>
                                })}
                            </li>
                        <span className="cartPrice">Total Price: {formatPrice(order.cartPrice)}</span>
                </div>
                <div>
                    <p><small>Debugging for JSON object: {JSON.stringify(order)}</small></p>
                </div>
            </div>
        )
    }
}

export default Order