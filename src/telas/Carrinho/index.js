import React, { useState } from "react";
import estilosGlobal from "../../estilos";

//para usar os componentes do React Native eles precisam ser importados primeiro
import {
  SafeAreaView,
  StatusBar,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import Item from "./Item";
import TelaPadrao from "../../components/TelaPadrao";
import StatusCarrinho from "../../components/StatusCarrinho";
const servicos = [
  {
    id: 1,
    nome: "Banho",
    preco: 79.9,
    descricao: "NÃO DÊ BANHO NO SEU GATO! Mas se precisar nós damos!",
    quantidade: 2,
  },
  {
    id: 1,
    nome: "Vacina V4",
    preco: 89.9,
    descricao: "Uma dose da vacina V4. Seu gato precisa de duas!",
    quantidade: 1,
  },
  {
    id: 3,
    nome: "Vacina antirábica",
    preco: 99.9,
    descricao:
      "Uma dose da vacina antirábica. Seu gato precisa de uma por ano.",
    quantidade: 1,
  },
];

export default function Carrinho() {
  //const [total, setTotal] = useState();
  const total = servicos.reduce((soma, {preco, quantidade})=> soma + (preco * quantidade), 0);
  return (
    <TelaPadrao>
      <StatusCarrinho total={total} />
      <FlatList
        data={servicos}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={({ id }) => String(id)}></FlatList>
    </TelaPadrao>
  );
}
