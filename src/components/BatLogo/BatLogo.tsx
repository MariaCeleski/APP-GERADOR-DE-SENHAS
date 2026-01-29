import React from 'react';
// React para criação do componente

import { View, Text, Image } from 'react-native';
// Text → exibe o título
// Image → exibe a imagem do logo

import { styles } from './BatLogoStyles';
// Estilos do componente BatLogo

import batLogo from '../../../assets/bat-logo.png';
// Imagem do logo importada dos assets

export function BatLogo() {
  return (
    <>
      {/* Título do aplicativo */}
      <Text style={styles.title}>
        BAT PASS GENERATOR
      </Text>

      {/* Logo do aplicativo */}
      <Image
        source={batLogo}
        style={{
          resizeMode: 'contain', // Mantém proporção da imagem
          height: 140,           // Altura do logo
          marginTop: 10,         // Espaçamento superior
        }}
      />
    </>
  );
}
