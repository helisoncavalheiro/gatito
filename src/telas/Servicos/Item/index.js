import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import Botao from "../../../components/Botao";
import CampoInteiro from "../../../components/CampoInteiro";
import estilos from "./estilos";

export default function Item({ nome, preco, descricao }) {
  const [quantidade, setQuantidade] = useState(1);
  const [total, setTotal] = useState(preco);

  const atualizaQuantidade = (novaQuantidade) => {
    setQuantidade(novaQuantidade);
    calculaTotal(novaQuantidade);
  };

  const calculaTotal = (quantidade) => {
    setTotal(quantidade * preco);
  };

  return (
    <>
      <View style={estilos.informacao}>
        <Text style={estilos.nome}>{nome}</Text>
        <Text style={estilos.descricao}>{descricao}</Text>
        <Text style={estilos.preco}>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(preco)}
        </Text>
      </View>
      <View style={estilos.carrinho}>
        <View>
          <View style={estilos.valor}>
            <Text style={estilos.descricao}>Quantidade: </Text>
            <CampoInteiro
              valor={quantidade}
              acao={atualizaQuantidade}
              estilos={estilos.quantidade}
            />
          </View>
          <View style={estilos.valor}>
            <Text style={estilos.descricao}>Total: </Text>
            <Text style={estilos.preco}>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(total)}
            </Text>
          </View>
        </View>
        {/* <Button title="Adicionar"></Button> */}
        <Botao valor="Adicionar" />
      </View>
      <View style={estilos.divisor} />
    </>
  );
}
