# 🔐 Bat Pass Generator

Aplicativo mobile desenvolvido em React Native para geração de senhas seguras,
com opções personalizáveis e indicador de força da senha.

## 🚀 Funcionalidades
- Definição do tamanho da senha através de slider
- Inclusão opcional de:
  - Letras maiúsculas
  - Letras minúsculas
  - Números
  - Símbolos
- Geração de senhas aleatórias
- Indicador visual de força da senha (fraca, média ou forte)
- Cópia da senha para a área de transferência
- Feedback tátil (haptic feedback) ao copiar
- Animação de confirmação (toast)


## 🛠 Tecnologias
- React Native
- Expo
- TypeScript
- Animated API
- Expo Clipboard
- Expo Haptics

## 📱 Preview
<img width="574" height="939" alt="Image" src="https://github.com/user-attachments/assets/760566ae-7a9e-419b-baf9-93688639db3f" />

<img width="576" height="947" alt="Image" src="https://github.com/user-attachments/assets/3dc2d9ba-b7d2-4212-8268-73de6488b757" />---

## ▶️ Como Executar o Projeto

### Pré-requisitos
- Node.js instalado
- Expo CLI

### Passos

```bash
# Instalar as dependências
npm install

# Iniciar o projeto
npx expo start

npm start


src/
 ├─ components/
 │   ├─ BatButton/
 │   ├─ BatLogo/
 │   ├─ BatTextInput/
 │   └─ CharacterOptions/
 ├─ services/
 │   ├─ passwordService.ts
 │   └─ passwordStrength.ts
 ├─ screens/
 │   └─ Home/
 └─ styles/

 Aprendizados

Durante o desenvolvimento deste projeto, foram praticados:

Criação de componentes reutilizáveis

Controle de estado com useState

Tipagem com TypeScript

Separação de lógica em services

Animações com Animated

Boas práticas de organização de código

Melhoria da experiência do usuário (UX)
