export function changeValue(e){
    console.log('Valor de  retorno: ' + e.target.value)
    return {
        type: 'VALUE_CHANGED',
        payload: e.target.value
    }
}