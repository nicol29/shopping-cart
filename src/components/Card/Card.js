function Card (props) {
  return (
    <div className="card">
      <div>
        <img src={props.image} alt="Cover Art"/>
        <div className="beat-info">
          <p>{props.title}</p>
          <div className="price">
            <p>${props.price}</p>
            <p>• {props.bpm}</p>
          </div>
        </div>
      </div>
      <div className="checkout" data-item={props.index}>
        <input onChange={props.changeAmount} value={props.amount}></input>
        <button onClick={props.addItemToCart}>${props.price}</button>
      </div>
    </div>
  )
}

export default Card;