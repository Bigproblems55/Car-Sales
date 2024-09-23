export const addFeature = feature => {
    return ({
        type: 'ADD_FEATURE',
        payload: feature
    });
}

export const subtractFeature = feature => {
    return ({
        type: 'SUBTRACT_FEATURE',
        payload: feature
    })
} 

export const clearAll = feature =>{

    return({
        type: 'CLEAR_ALL' ,
        payload:[]
    })
}