let defaultState = {
    data: { isVerifed: false }
}

let BioMetricReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'BIOMETRIC_VERFIED': {
            let newState = { ...state };
            newState.data = {
                isVerifed: true
            }
            return newState;
        }
        case 'BIOMETRIC_FAILED': {
            let newState = { ...state };
            newState.data = {
                isVerifed: false
            }
            return newState;
        }
        default: {
            return state;
        }
    }
}

export default BioMetricReducer