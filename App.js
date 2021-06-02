import React from "react";
import Servicos from "./src/telas/Servicos";
import Carrinho from "./src/telas/Carrinho";
import "intl";
import "intl/locale-data/jsonp/pt-BR";
import Rotas from "./src/rotas";
import TelaPadrao from "./src/components/TelaPadrao";
export default function App() {
  return (
    <TelaPadrao>
      <Rotas />
    </TelaPadrao>
  );
}
