const INITIAL_STATE = { description: '', list: [] }

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'DESCRIPTION_CHANGED':
            return {...state, description:  action.payload}
        case 'TODO_SEARCHED':
            return {...state, list: action.payload.data }

        default :
            return state
    }
}
// 
/**
 * o REDUCER recebe o estado atual e uma action.
 * e sempre que uma action for executada os reducers da aplicação
 * são chamados 
 */