function Home () {
  return (
    <div className="home">
      <img
        className='background-image'
        alt='Background'
        src={require('../../images/background-image.jpg')}
      />
      <div className='hero'>
        <h1>
          Sell your beats online
        </h1>
        <div className='store'>
          <p>
            #1 Marketplace to buy & sell beats
          </p>
          <button>Store</button>
        </div>
      </div>
    </div>
  )
}

export default Home;