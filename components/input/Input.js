import React from 'react';
import { View, TextInput, Text } from 'react-native';
import Styles from './Styles';

class Input extends React.Component {
    state = { 
        numero: '' 
    };
    render() {
        return (
            <View>
                {checaNumeroVazio(this.state.numero)}
                <TextInput
                    style={Styles.input}
                    onChangeText={(numero) => this.setState({numero})}
                    value={this.state.numero}
                    keyboardType='numeric'
                ></TextInput>
            </View>
        );
    }
}

function checaNumeroVazio(numero) {
    return numero == '' 
    ? <Text style={Styles.text}>Insira um número</Text> 
    : validarParOuImpar(numero)
}

function validarParOuImpar(numero) {
    return numero % 2 == 0
    ? <Text style={Styles.text}>O número é par!</Text>
    : <Text style={Styles.text}>O número é impar!</Text>
}

export default Input;
