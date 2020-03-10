import React from 'react';
import {Link} from 'react-router-dom'

import './header.styles.scss';
import {ReactComponent as Logo} from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from  "../cart-dropdown/cart-dropdown.component";
import {connect} from 'react-redux';

const Header = ({hidden}) => (
    <div className='header'>

        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>

        <div className='options'>

            <Link className="option" to="/shop">
                SHOP
            </Link>


            <Link className="option" to="/shop">
                CONTACT
            </Link>

            <Link className="option" to="/signin">
                SIGN IN
            </Link>

            <CartIcon/>

        </div>
        {hidden ? null:<CartDropDown />}


    </div>

);


const mapStateToProps= ({cart:{hidden}}) =>({
    hidden
});
// const mapStateToProps= (state) =>{
//     console.log(state.cart.hidden);
//
//     return {
//         hidden: state.cart.hidden
//     }
// };

export default connect(mapStateToProps)(Header);


