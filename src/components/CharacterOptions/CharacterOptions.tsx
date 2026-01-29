import React from 'react';
// React para criação do componente

import { View, Text, Switch } from 'react-native';
// View → container
// Text → rótulo da opção
// Switch → botão liga/desliga

import { styles } from './CharacterOptionsStyles';
// Estilos do componente

// Tipagem das propriedades recebidas
type Props = {
  label: string;                 // Texto exibido (ex: "Maiúsculas")
  value: boolean;               // Estado atual (ligado/desligado)
  onChange: (value: boolean) => void; // Função chamada ao alterar o switch
};

export function CharacterOption({ label, value, onChange }: Props) {
  return (
    <View style={styles.container}>
      {/* Texto que identifica a opção */}
      <Text style={styles.label}>{label}</Text>

      {/* Switch para ativar/desativar a opção */}
      <Switch
        value={value}                    // Estado atual do switch
        onValueChange={onChange}         // Atualiza o estado no componente pai
        thumbColor="#E5BF3C"              // Cor do botão
        trackColor={{ false: '#555', true: '#E5BF3C' }} // Cor da trilha
      />
    </View>
  );
}
