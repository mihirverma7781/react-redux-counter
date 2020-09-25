import React from 'react'
import { connect } from 'react-redux'
import {buyIceCream} from '../redux/iceCreams/iceCreamActions'
// import { buyIceCream } from '../redux'

function iceCreamContainer(props) {
    return (
        <div>
            <h1>No of Cakes- {props.numOfIceCream}</h1>
            <button onClick={props.buyIceCream}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        numOfIceCream:state.iceCream.numOfIceCream
    }
}
const mapDispatchToProps=(dispatch)=>{
return{
    buyIceCream:()=>dispatch(buyIceCream())
}
}

export default connect(mapStateToProps,mapDispatchToProps)(iceCreamContainer)
