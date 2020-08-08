import React from 'react';
import { auth } from '../../firebase/firebase.util';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import { ReactComponent as Logo } from '../../assets/logo.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {selectCurrentUser} from '../../redux/user/user.selectors'
import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.style'

function Header({currentUser, hidden} ) {
  
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer >
        <OptionLink  to="/shop">
          SHOP
        </OptionLink>
        <OptionLink to="/contact">
          CONTACT
        </OptionLink>
        {currentUser ? (
          <div  onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <OptionLink to="/signin">
            SIGN IN
          </OptionLink>
        )}
        <CartIcon/>
      </OptionsContainer>
      {
        hidden? null : (
          <CartDropdown />

        )
      }
    </HeaderContainer>
  );
}

const mapStateToProp = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProp)(Header);