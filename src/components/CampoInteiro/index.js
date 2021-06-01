import React from "react";
import { TextInput } from "react-native";
import estilosPadrao from "./estilos";

export default function CampoInteiro({ valor, acao, estilos }) {
  const atualiza = (newValue, acaoRetorno) => {
    const verificaInteiro = newValue.match(/^[0-9]*$/);
    if (!verificaInteiro) return;
    const removeZeroEsquerda = newValue.replace(/^(0)(.+)/, "$2");
    acaoRetorno(removeZeroEsquerda);
  };
  const numeroString = String(valor);
  return (
    <TextInput
      style={[estilosPadrao.campo, estilos]}
      //abre o teclado numérico
      keyboardType="number-pad"
      //mantém o valor selecionado por padrão
      selectTextOnFocus
      //o método onchange passa o valor para o handler
      onChangeText={(newValue) => {
        atualiza(newValue, acao);
      }}
      value={numeroString}
    />
  );
}
