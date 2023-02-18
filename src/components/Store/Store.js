import Card from "../Card/Card";

function Store (props) {
  let cards = props.beats.map((element) => (
    <Card 
      image={element.image}
      title={element.title}
      price={element.price}
      bpm={element.bpm}
      addItemToCart={element.addItemToCart}
    />
  ))

  return (
    <div className="beats-section">
      {cards}
    </div>
  )
}

export default Store;