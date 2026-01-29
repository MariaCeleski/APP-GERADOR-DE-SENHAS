import React from "react";
// React para criação do componente

import { TextInput } from "react-native";
// TextInput para exibir a senha gerada

import { styles } from "./BatTextInputStyles";
// Estilos do campo de texto

// Tipagem das propriedades recebidas pelo componente
interface BatTextInputProps {
  pass: string; // Senha gerada
}

export function BatTextInput({ pass }: BatTextInputProps) {
  return (
    <TextInput
      style={styles.input}                 // Estilo do input
      placeholder="Senha gerada"            // Texto exibido quando vazio
      placeholderTextColor="#555"           // Cor do placeholder
      value={pass}                          // Valor exibido (senha)
      editable={false}                      // Impede edição manual
      selectTextOnFocus                     // Seleciona o texto ao tocar
      underlineColorAndroid="transparent"   // Remove linha no Android
    />
  );
}
