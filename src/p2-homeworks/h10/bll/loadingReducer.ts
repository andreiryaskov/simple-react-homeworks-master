const initState = {
    loading: false
}

export const loadingReducer = (state = initState, action: loadingACType): typeof initState => { // fix any
    switch (action.type) {
        case 'LOADING': {
            return {
                ...state,
                loading: action.loading
            }
        }
        default: return state
    }
}

type loadingACType = {
    type: 'LOADING'
    loading: boolean
}

export const loadingAC = (loading: boolean): loadingACType => {
    return {
        type: 'LOADING',
        loading
    } as const
} // fix any