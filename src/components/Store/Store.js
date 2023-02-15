import Card from "../Card/Card";

function Store () {
  return (
    <div className="beats-section">
      <Card 
        image={require('../../images/pop-smoke1.jpeg')}
        title={'Pop-Smoke type beat "Switch"'}
        price={'30.00'}
        bpm={'140bpm'}
      />
      <Card 
        image={require('../../images/central-cee.jpeg')}
        title={'Central Cee type beat "Let Go"'}
        price={'45.00'}
        bpm={'143bpm'}
      />
      <Card 
        image={require('../../images/digga-d.jpeg')}
        title={'Digga D type beat "Mercy"'}
        price={'35.00'}
        bpm={'144bpm'}
      />
      <Card 
        image={require('../../images/fivio-foreign.jpeg')}
        title={'Fivio Foreign type beat "Holy"'}
        price={'50.00'}
        bpm={'140bpm'}
      />
      <Card 
        image={require('../../images/sheff-g.jpeg')}
        title={'Sheff G type beat "Outside"'}
        price={'30.00'}
        bpm={'155bpm'}
      />
    </div>
  )
}

export default Store;