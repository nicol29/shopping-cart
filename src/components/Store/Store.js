import Card from "../Card/Card";

function Store (props) {
  let cards = props.beats.map((element, index) => (
    <Card 
      key={element.key}
      index={index}
      image={element.image}
      title={element.title}
      price={element.price}
      bpm={element.bpm}
      addItemToCart={props.addItemToCart}
      changeAmount={props.changeAmount}
      amount={props.amount}
    />
  ))

  return (
    <div className="beats-section">
      {cards}
    </div>
  )
}

export default Store;