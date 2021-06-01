import React from "react";
import { TextInput } from "react-native";

export default function CampoInteiro({ valor, acao }) {
  const numeroString = String(valor);
  return (
    <TextInput
      //abre o teclado numérico
      keyboardType="number-pad"
      //mantém o valor selecionado por padrão
      selectTextOnFocus
      //o método onchange passa o valor para o handler
      onChangeText={(newValue) => {
        acao(newValue);
      }}
      value={numeroString}
    />
  );
}
