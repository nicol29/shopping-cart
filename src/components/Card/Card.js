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
      <button>${props.price}</button>
    </div>
  )
}

export default Card;