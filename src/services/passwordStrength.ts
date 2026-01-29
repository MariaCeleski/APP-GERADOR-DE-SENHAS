// Define o formato do retorno da força da senha
export type PasswordStrength = {
  label: 'Fraca' | 'Média' | 'Forte'; // Texto exibido ao usuário
  score: number; // Pontuação da senha (0 a 100)
  color: string; // Cor associada ao nível da senha
};

// Função que calcula a força da senha
export function getPasswordStrength(password: string): PasswordStrength {
  let score = 0;
  // Variável usada para acumular a pontuação

  // Avalia o tamanho da senha
  if (password.length >= 6) score += 25;
  if (password.length >= 10) score += 25;

  // Verifica se contém letras maiúsculas
  if (/[A-Z]/.test(password)) score += 20;

  // Verifica se contém números
  if (/[0-9]/.test(password)) score += 15;

  // Verifica se contém símbolos
  if (/[^A-Za-z0-9]/.test(password)) score += 15;

  // Classificação da senha como fraca
  if (score < 40) {
    return { label: 'Fraca', score, color: '#E74C3C' };
  }

  // Classificação da senha como média
  if (score < 70) {
    return { label: 'Média', score, color: '#F1C40F' };
  }

  // Classificação da senha como forte
  return { label: 'Forte', score, color: '#2ECC71' };
}
