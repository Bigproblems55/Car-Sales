export const initialState = {
    additionalPrice: 0,
    car: {
      price: 11395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 2500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 1000 },
      { id: 4, name: 'Rear spoiler', price: 550 }
    ]
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case('ADD_FEATURE'): 
        if(!state.car.features.includes(action.payload)){
        return ({
            ...state, additionalPrice: (state.additionalPrice + action.payload.price),car: {
                ...state.car,
                features: [...state.car.features, action.payload]
            }
        });
    }
    else {
        return state;
    }
    case('SUBTRACT_FEATURE'):
    const {id, price} = action.payload;
    return ({
        ...state, 
        additionalPrice: (state.additionalPrice - price) , car: {
            ...state.car, features: state.car.features.filter(feature => 
                feature.id !== id
            )
        }
    })
    case('CLEAR_ALL'):
    return {
        ...state, 
        car: {
            ...state.car, features: state.car.features.splice()
            
        }
    }
    
  default:
            return(state);
    }
}
export default reducer;