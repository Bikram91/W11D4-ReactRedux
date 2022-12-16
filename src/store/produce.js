// import {produceData} from '../mockData/produce.json'
// const POPULATE = "produce/POPULATE";

// export const populateProduce = (produceData) => {
//     return{
//         type:POPULATE,
//         produce:produceData
//     }
// }

// export default function produceReducer(state = {}, action) {
//     Object.freeze(state);
//     const nextState = {...state};
//     console.log(action)
//     switch (action.type) {
//         case POPULATE:
//             nextState[action.produce.id] = action.produce;
//             return nextState;
//         default:
//             console.log(action.produce)
//             return state;
//     }
//   }

import produceData from '../mockData/produce.json';

const POPULATE = 'produce/POPULATE';
const LIKETOGGLE = 'LIKETOGGLE'

export const populateProduce = () => {
  return {
    type: POPULATE,
    produce: produceData
  };
};

export const likeToggle = (produce) => {
    return {
        type: LIKETOGGLE,
        id: produce
    }
}


export default function produceReducer(state = {}, action) {
    
  switch (action.type) {
    case POPULATE:
        const newState = {};
      action.produce.forEach(produce => {
        newState[produce.id] = produce;
      });
      return newState;
    case LIKETOGGLE:
        const neweState = {...state}
        if (state[action.id].liked) {
            neweState[action.id].liked = false
        }else {
            neweState[action.id].liked = true
        }
        return neweState;
            
    default:
      return state;
  }
}

