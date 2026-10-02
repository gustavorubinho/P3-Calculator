# 🌘 Persona 3 Calculator

Uma calculadora funcional inspirada na interface e estética de **Persona 3**! Desenvolvida utilizando tecnologias Web (HTML, CSS e JavaScript) e empacotada como um aplicativo Desktop para Windows através do Python e PyWebView.

## 🌟 Funcionalidades
- **Design Autêntico:** Cores, fontes e formas que remetem ao design marcante de Persona 3.
- **Animações Dinâmicas:** Efeito de balanço constante (sway) e resposta ao passar o mouse.
- **Efeitos Sonoros:** Sons imersivos de clique, *hover* e som de impacto épico ao exibir o resultado final.
- **Versão Desktop:** Roda como um aplicativo nativo (`.exe`) sem precisar de um navegador.

---

## 🚀 Como testar (Direto no Navegador)
Se você quer apenas brincar com a calculadora, não precisa baixar nada! 
Basta acessar a **[Versão Web no GitHub Pages]** (Insira aqui o link do seu GitHub Pages após ativá-lo).

---

## 💻 Como baixar o Aplicativo Desktop (Windows)
1. Vá até a aba **Releases** aqui no lado direito do repositório.
2. Baixe o arquivo `Calculadora.exe` da versão mais recente.
3. Dê um duplo clique e aproveite! (Por ser um `.exe` recém-criado, o Windows Defender pode avisar que é desconhecido. Basta clicar em "Mais informações" e "Executar assim mesmo").

---

## 🛠️ Tecnologias Utilizadas
- **HTML5 / CSS3 / JavaScript:** Toda a lógica matemática, animações e tocar de áudios.
- **Python:** Script principal (`main.py`) rodando a biblioteca `webview`.
- **PyWebView:** Cria a janela nativa do Windows e renderiza o HTML dentro dela.
- **PyInstaller:** Empacota o Python, os arquivos Web e o ícone num único `.exe`.

---

## 🔧 Como rodar o código-fonte
Se você é desenvolvedor e quer modificar o projeto:
1. Tenha o **Python** instalado na sua máquina.
2. Clone este repositório:
   ```bash
   git clone https://github.com/SEU-USUARIO/p3-calculator.git
   ```
3. Instale a dependência do PyWebView:
   ```bash
   pip install pywebview
   ```
4. Execute o script principal:
   ```bash
   python main.py
   ```

*(Para recompilar o `.exe`, basta rodar `pyinstaller Calculadora.spec` após instalar o pyinstaller).*
