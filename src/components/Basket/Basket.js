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
        </div>
      </div>
    </div>
  )
}

export default Basket;
