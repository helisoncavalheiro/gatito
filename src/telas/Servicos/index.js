import React from "react";

//para usar os componentes do React Native eles precisam ser importados primeiro
import { Text, SafeAreaView, StatusBar, FlatList } from "react-native";

import Item from "./Item";
const servicos = [
  {
    id: 1,
    nome: "Banho",
    preco: 79.9,
    descricao: "NÃO DÊ BANHO NO SEU GATO! Mas se precisar nós damos!",
  },
  {
    id: 1,
    nome: "Vacina V4",
    preco: 89.9,
    descricao: "Uma dose da vacina V4. Seu gato precisa de duas!",
  },
  {
    id: 3,
    nome: "Vacina antirábica",
    preco: 99.9,
    descricao:
      "Uma dose da vacina antirábica. Seu gato precisa de uma por ano.",
  },
];

export default function Servicos() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Text>Serviços</Text>
      <FlatList
        data={servicos}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={ ({id}) => String(id)} ></FlatList>
    </SafeAreaView>
  );
}
