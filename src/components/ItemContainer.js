import React from 'react'
import {connect} from 'react-redux'
import {buyIceCream} from '../redux/iceCreams/iceCreamActions'
import buyCake from '../redux/cake/cakeActions'

const ItemContainer = (props) => {
    return (
        <div>
            <h2>itemContainer-{props.item}</h2>
    <button onClick={props.buy}>BuyItem{props.item}</button>
        </div>
    )
}

const mapStateToProps=(state,ownProps)=>{
const itemState = ownProps.cake
?state.cake.numOfCakes
:state.iceCream.numOfIceCream

return{
    item:itemState
}
}
const mapDispatchToProps=(dispatch,ownProps)=>{

const buyItem = ownProps.cake
?()=> dispatch(buyCake())
:()=>dispatch(buyIceCream())
return{
    buy:()=>dispatch(buyItem())
}
}
export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer)
