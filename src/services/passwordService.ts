// Define as opções que controlam a geração da senha
type PasswordOptions = {
  length: number;     // Tamanho da senha
  uppercase: boolean; // Incluir letras maiúsculas
  lowercase: boolean; // Incluir letras minúsculas
  numbers: boolean;   // Incluir números
  symbols: boolean;   // Incluir símbolos
};

// Função responsável por gerar a senha
export default function generatePass({
  length,
  uppercase,
  lowercase,
  numbers,
  symbols,
}: PasswordOptions): string {

  let characters = '';
  // String que armazenará todos os caracteres permitidos

  // Adiciona letras maiúsculas se a opção estiver ativa
  if (uppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  // Adiciona letras minúsculas se a opção estiver ativa
  if (lowercase) characters += 'abcdefghijklmnopqrstuvwxyz';

  // Adiciona números se a opção estiver ativa
  if (numbers) characters += '0123456789';

  // Adiciona símbolos se a opção estiver ativa
  if (symbols) characters += '!@#$%^&*()_+-=';

  // Se nenhuma opção for selecionada, retorna string vazia
  if (!characters) return '';

  let password = '';
  // Variável que armazenará a senha final

  // Loop para montar a senha caractere por caractere
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
    // Escolhe um caractere aleatório da lista permitida
  }

  return password; // Retorna a senha gerada
}
