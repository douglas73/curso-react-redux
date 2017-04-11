import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux' //vai ligar  as ações criadas com os dispachs
import { changeValue }  from './fieldActions' //Importando metodo changValue do ./fielsActions.js


class Field extends Component {
    render() {
        return (
            <div>
                <label>{this.props.value}</label><br />
                <input onChange={this.props.changeValue} value={this.props.value} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        value: state.field.value
    }
}

function mapDispatchToProps(dispatch) {
    /**
     *  mapeando oas actionsCreators para dentro da função...
     */
    return bindActionCreators({changeValue}, dispatch)

}

export default connect(mapStateToProps, mapDispatchToProps )(Field)