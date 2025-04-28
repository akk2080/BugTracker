const initialValue = {
    logs:[]
};

function logsReducer(state = initialValue, action){
    switch(action.type){
        case 'upload':
            return {...state, logs:[...state.logs, ...action.payload]}
        default:
            return state;
    }
    
        
}

export default logsReducer;