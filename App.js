import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import StyleApp from './style/StylesApp';
import Input from './components/input/Input';
/**
 * Erro ao aplicar o Input no View
 */

export default function App() {
  return (
      <View style={StyleApp.container}>
        <StatusBar style="auto" />
        <View>
          <Input/>
        </View>
        <View>
          <Text style={StyleApp.text}>Par ou Impar</Text>
          <Text style={StyleApp.text}>Digite um valor para saber se é par ou impar</Text>
        </View>
      </View>
  );
}
