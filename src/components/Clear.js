import React from 'react';
import { clearAll,subtractFeature } from './actions';
import {connect} from 'react-redux';

const Clear = props =>{
    const {feature,clearAll,subtractFeature} = props;
    const handleClear = (feature) =>{
        
        clearAll(feature)
        // subtractFeature(feature)
    }
    return(
        <button onClick={()=>handleClear(feature)}>
            Clear All
        </button>
    );
};

export default connect(null,{subtractFeature,clearAll})(Clear);