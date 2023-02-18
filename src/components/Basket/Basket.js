function Basket (props) {
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
            {props.itemsInCart.length > 0 ? props.itemsInCart.map(item => (
              <div>
                <img src={item.image} alt='cover art'/>
                <div>
                  <p>{item.title}</p>
                  <button>Remove</button>
                </div>
              </div>
            )) : <div className='empty-cart'>Your cart is empty</div>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Basket;
