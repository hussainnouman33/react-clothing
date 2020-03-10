  import React from 'react';

  import {connect} from 'react-redux'
  import {toggleCartHidden} from "../../redux/cart/cart.actions";
  import {selectCartItemsCount} from '../../redux/cart/cart.selectors';

  import './cart-icon.styles.scss';
  import {ReactComponent as ShopingIcon} from "../../assets/shopping-bag.svg.svg";


  const CartIcon =({toggleCartHidden,itemCount})=>(

    <div className='cart-icon' onClick={toggleCartHidden}>
    <ShopingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
    </div>
    )
  



  const mapDispatchToPros =(dispatch)=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
  })

  const mapStateToProps=(state)=>({
    itemCount:selectCartItemsCount(state)
  });

  export default  connect(mapStateToProps,mapDispatchToPros)(CartIcon);
