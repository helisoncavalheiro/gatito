import React from "react";
import { KeyboardAvoidingView, SafeAreaView, StatusBar } from "react-native";
import estilosGlobal from "../../estilos";

export default function TelaPadrao({ children }) {
  return (
    <SafeAreaView style={estilosGlobal.preencher}>
      <StatusBar />
      <KeyboardAvoidingView
        style={estilosGlobal.preencher}
        behavior={Platform.OS == "ios" ? "padding" : "height"}>
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
