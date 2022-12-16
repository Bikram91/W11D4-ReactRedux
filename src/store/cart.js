// import 
const ADDPRODUCE = "ADDPRODUCE"
const DECPRODUCE = 'DECPRODUCE'
const REMOVEPRODUCE = "REMOVEPRODUCE"
const EMPTYCART = "EMPTYCART"
export const cartReducer = (state={}, action) =>{
    let newState = {...state};
    switch(action.type){
        case ADDPRODUCE:
            if(state[action.id]){
                newState[action.id].count++;
                return newState;
            }else{
                newState = {...newState, [action.id]:{id: action.id, count: 1}};
                return newState;
            }
        case DECPRODUCE:
            if(state[action.id].count > 1){
                newState[action.id].count--;
                return newState
            }else{
                delete newState[action.id];
                return newState
            }
        case REMOVEPRODUCE:
            delete newState[action.id];
            return newState
        case EMPTYCART:
            return {}
        default:
            return newState
    }
}

export const cartAddProduce = (produceId) => {
    return {
        type: ADDPRODUCE,
        id: produceId
    }
}

export const cartDecProduce = (produceId) => {
    return {
        type: DECPRODUCE,
        id: produceId
    }
}

export const cartRemoveProduce = (produceId) => {
    return {
        type: REMOVEPRODUCE,
        id: produceId
    }

}

export const cartEmpty = () => {
    return {
        type: EMPTYCART
    }
}