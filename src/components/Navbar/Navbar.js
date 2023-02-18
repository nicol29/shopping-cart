import { Outlet, Link } from 'react-router-dom';
import { useState } from 'react';
import Basket from '../Basket/Basket';

function Navbar () {
  const [modal, setModal] = useState(false);

  function enableDisableShoppingCart () {
    modal ? setModal(false) : setModal(true); 
  }

  return (
    <>
      <header>
      <Link to='/'>
        <img
          className='logo' 
          alt='Website logo' 
          src={require('../../images/sound-wave.png')}
        />
      </Link>
      <ul>
        <li>
          <Link to='/'>Home</Link> 
        </li>
        <li>
          <Link to='/store'>Store</Link>
        </li>
        <li><img className='basket' src={require('../../images/shopping-outline-custom.png')} alt='basket' onClick={enableDisableShoppingCart}/></li>
      </ul>
      </header>
      
      <Outlet />

      {modal && (
        <Basket 
          closeModal = {enableDisableShoppingCart}
        />
      )}
      {/* {props.basket.length > 0 ? <div>lol</div> : null} */}
    </>
  )
}

export default Navbar;