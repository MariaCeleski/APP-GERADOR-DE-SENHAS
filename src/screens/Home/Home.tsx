import React, { useState } from "react"; 
// React e useState para criar a tela e controlar estados (valores que mudam)

import { Text, View } from "react-native"; 
// Componentes básicos de layout e texto

import Slider from "@react-native-community/slider"; 
// Slider usado para escolher o tamanho da senha

import { StatusBar } from "expo-status-bar"; 
// Controla o estilo da barra de status do celular

import styles from "./Style"; 
// Estilos da tela Home

import { BatLogo } from "../../components/BatLogo/BatLogo"; 
// Logo do aplicativo

import { BatButton } from "../../components/BatButton/BatButton"; 
// Botão responsável por gerar a senha

import { CharacterOption } from "../../components/CharacterOptions/CharacterOptions"; 
// Componente para ativar/desativar tipos de caracteres

export default function Home() {
  // Estado que define o tamanho da senha
  const [length, setLength] = useState(8);

  // Estados que controlam quais tipos de caracteres serão usados
  const [uppercase, setUppercase] = useState(true); // Letras maiúsculas
  const [lowercase, setLowercase] = useState(true); // Letras minúsculas
  const [numbers, setNumbers] = useState(true);     // Números
  const [symbols, setSymbols] = useState(false);    // Símbolos

  return (
    <View style={styles.appContainer}>
      {/* Área do logo */}
      <View style={styles.logoContainer}>
        <BatLogo />
      </View>

      {/* Área do slider de tamanho */}
      <View style={styles.sliderContainer}>
        {/* Exibe o tamanho atual da senha */}
        <Text style={styles.sliderText}>Tamanho: {length}</Text>

        <Slider
          style={{ width: "100%" }}
          minimumValue={6}            // Tamanho mínimo da senha
          maximumValue={20}           // Tamanho máximo da senha
          step={1}                    // Incremento de 1 em 1
          value={length}              // Valor atual do slider
          onValueChange={setLength}   // Atualiza o tamanho da senha
          minimumTrackTintColor="#E5BF3C"
          maximumTrackTintColor="#666"
          thumbTintColor="#1ABC9C"
        />
      </View>

      {/* Opções de tipos de caracteres */}
      <CharacterOption
        label="Maiúsculas"
        value={uppercase}
        onChange={setUppercase}
      />

      <CharacterOption
        label="Minúsculas"
        value={lowercase}
        onChange={setLowercase}
      />

      <CharacterOption
        label="Números"
        value={numbers}
        onChange={setNumbers}
      />

      <CharacterOption
        label="Símbolos"
        value={symbols}
        onChange={setSymbols}
      />

      {/* Botão que gera a senha com base nas opções escolhidas */}
      <View style={styles.inputContainer}>
        <BatButton
          length={length}
          uppercase={uppercase}
          lowercase={lowercase}
          numbers={numbers}
          symbols={symbols}
        />
      </View>

      {/* Barra de status clara */}
      <StatusBar style="light" />
    </View>
  );
}
