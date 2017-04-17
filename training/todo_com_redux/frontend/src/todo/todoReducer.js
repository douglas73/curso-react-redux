const INITIAL_STATE = {
    description: 'Ler livro', 
    list: [{
        _id: 1, 
        description: 'Pagar fatura do cartão',
        done:true
    }, {
        _id: 2, 
        description: 'Reunião com equipe as 10:00hs',
        done:false
    }, {
        _id: 3, 
        description: 'Consulta médicas na terça depois do almoço',
        done:false            
    }]

}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'DESCRIPTION_CHANGED':
            return {...state, description:  action.payload}
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