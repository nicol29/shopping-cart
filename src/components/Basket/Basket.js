import { useEffect } from 'react';

function Basket (props) {
  useEffect(() => {
    console.log(props.itemsInCart, 'lol');
  }, [props.itemsInCart])

  return (
    <div className="modal">
      <img 
        src={require('../../images/close-circle.png')} 
        className='close-cart' 
        alt='exit'
        onClick={props.closeModal}
      />
      <div className="overlay">
        <div className="modal-content">
          <h1>Your Cart</h1>
          <div className='cart-items'>
            {props.itemsInCart.length > 0 ? props.itemsInCart.map(item => {
              // console.log(props.itemsInCart);
              return (
                <div key={item.key}>
                <img src={item.image} alt='cover art'/>
                <div>
                  <p>{item.title}</p>
                  <button onClick={props.removeCartItem} data-id={item.id}>Remove</button>
                </div>
                </div>
              )
            }) : <div className='empty-cart'>Your cart is empty</div>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Basket;
