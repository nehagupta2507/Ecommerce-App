import React from 'react';
import { Link } from 'react-router-dom';
// Access to things related to redux - HOC
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import './header.styles.scss';
import { ReactComponent as Logo} from '../../assets/crown.svg';
import rootReducer from '../../redux/root-reducer';

const Header = ({currentUser}) =>(
  <div className='header'>
    <Link to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to ='/shop'>
        SHOP
      </Link>
      <Link className='option' to ='/contact'>
        CONTACT
      </Link> 
      {
        currentUser ? (
        <div 
          className='option' 
          onClick= { () => auth.signOut()}
        > 
          SIGN OUT
        </div>
        ) : (
        <Link 
          className='option' to='/signin'
        >
        SIGN IN
        </Link>
        )}
        <CartIcon />
    </div>
  </div>
);
const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})
export default connect(mapStateToProps)(Header);