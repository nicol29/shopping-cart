function Taskbar () {
  return (
    <header>
      <img
        className='logo' 
        alt='Website logo' 
        src={require('../../images/sound-wave.png')}
      />
      <ul>
        <li>Home</li>
        <li>Store</li>
      </ul>
    </header>
  )
}

export default Taskbar;