import { Outlet, Link } from 'react-router-dom';

function Taskbar () {
  return (
    <>
      <header>
      <img
        className='logo' 
        alt='Website logo' 
        src={require('../../images/sound-wave.png')}
      />
      <ul>
        <li>
          <Link to='/'>Home</Link> 
        </li>
        <li>
          <Link to='/store'>Store</Link>
        </li>
        <li><img className='basket' src={require('../../images/shopping-outline-custom.png')} alt='basket'/></li>
      </ul>
      </header>
      
      <Outlet />
    </>
  )
}

export default Taskbar;