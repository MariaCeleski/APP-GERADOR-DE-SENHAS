import React, { useRef, useState } from 'react';
// useState → controla estados (senha e força)
// useRef → controla valores animados sem re-renderizar

import { Text, Pressable, View, Animated } from 'react-native';
// Animated é usado para criar a animação do toast

import * as Clipboard from 'expo-clipboard';
// Permite copiar a senha para a área de transferência

import * as Haptics from 'expo-haptics';
// Gera feedback tátil (vibração)

import generatePass from '../../services/passwordService';
// Função responsável por gerar a senha

import { getPasswordStrength, PasswordStrength } from '../../services/passwordStrength';
// Calcula a força da senha e retorna score, cor e label

import { BatTextInput } from '../BatTextInput/BatTextInput';
// Input que exibe a senha gerada

import { styles } from './BatButtonStyles';
// Estilos do componente

// Tipagem das propriedades recebidas do componente pai
interface BatButtonProps {
  length: number;
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
}

export function BatButton({
  length,
  uppercase,
  lowercase,
  numbers,
  symbols,
}: BatButtonProps) {

  // Armazena a senha gerada
  const [pass, setPass] = useState('');

  // Armazena a força da senha (fraca, média, forte, etc.)
  const [strength, setStrength] = useState<PasswordStrength | null>(null);

  // Valores animados do toast (mensagem de "copiado")
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(20)).current;

  // Gera a senha com base nas opções escolhidas
  function handleGenerateButton() {
    const generated = generatePass({
      length,
      uppercase,
      lowercase,
      numbers,
      symbols,
    });

    setPass(generated); // Atualiza a senha exibida
    setStrength(getPasswordStrength(generated)); // Calcula a força da senha
  }

  // Copia a senha e exibe feedback visual e tátil
  async function handleCopyButton() {
    if (!pass) return; // Evita copiar se não houver senha

    await Clipboard.setStringAsync(pass); // Copia a senha
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success); // Vibração de sucesso

    // Anima a entrada do toast
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();

    // Após 2 segundos, esconde o toast
    setTimeout(() => {
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 20,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
    }, 2000);
  }

  return (
    <>
      {/* Input que mostra a senha gerada */}
      <BatTextInput pass={pass} />

      {/* Barra e texto que indicam a força da senha */}
      {strength && (
        <View style={styles.strengthContainer}>
          <View
            style={[
              styles.strengthBar,
              {
                width: `${strength.score}%`, // Porcentagem da força
                backgroundColor: strength.color, // Cor baseada na força
              },
            ]}
          />
          <Text style={[styles.strengthText, { color: strength.color }]}>
            {strength.label}
          </Text>
        </View>
      )}

      {/* Botão para gerar a senha */}
      <Pressable onPress={handleGenerateButton} style={styles.button}>
        <Text style={styles.text}>GENERATE</Text>
      </Pressable>

      {/* Botão para copiar a senha */}
      <Pressable onPress={handleCopyButton} style={styles.button}>
        <Text style={styles.text}>⚡ COPY</Text>
      </Pressable>

      {/* Toast animado exibido após copiar a senha */}
      <Animated.View
        style={[
          styles.toast,
          {
            opacity,
            transform: [{ translateY }],
          },
        ]}
      >
        <Text style={styles.toastText}>Senha copiada com sucesso ✅</Text>
      </Animated.View>
    </>
  );
}
