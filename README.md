# Persona 3 Calculator

Uma calculadora funcional inspirada na interface e estética de **Persona 3**! Desenvolvida utilizando tecnologias Web (HTML, CSS e JavaScript) e empacotada como um aplicativo Desktop para Windows através do Python e PyWebView.

## Funcionalidades
- **Animações Dinâmicas:** Efeito de balanço constante (sway) e resposta ao passar o mouse.
- **Efeitos Sonoros:** Sons imersivos de clique, *hover* e som de impacto épico ao exibir o resultado final.
- **Versão Desktop:** Roda como um aplicativo nativo (`.exe`) sem precisar de um navegador.



https://github.com/user-attachments/assets/03ca57f6-4d55-48f8-af3c-20fe6371775b



---

## Como testar (Direto no Navegador Online)
Se você quer apenas usar a calculadora sem baixar o `.exe`, basta acessar o link abaixo:

**[Acessar a Versão Web no GitHub Pages]** *(https://gustavorubinho.github.io/P3-Calculator/)*

Você pode instalar a calculadora como se fosse um aplicativo no seu dispositivo!
* **No Computador (Chrome/Edge):** Abra o link, clique nos 3 pontinhos no canto superior direito e selecione **"Salvar e Compartilhar" > "Criar Atalho"** (ou "Instalar Aplicativo").
* **No Celular:** Abra o link, clique nos 3 pontinhos do navegador e escolha **"Adicionar à Tela Inicial"**.
Assim você terá um ícone da calculadora direto na sua área de trabalho ou tela do celular!

---

## Como baixar e rodar a Versão Web (Offline)
Se você usa Mac, Linux, ou apenas não quer rodar o arquivo `.exe`, você pode abrir a calculadora diretamente como uma página web comum:
1. No topo deste repositório, clique no botão verde **Code** e depois em **Download ZIP**.
2. Extraia o arquivo `.zip` no seu computador.
3. Abra a pasta `web` e dê um duplo clique no arquivo `index.html`.
4. A calculadora abrirá no seu navegador padrão (Chrome, Edge, Firefox, etc.) funcionando perfeitamente e com todos os sons!

---

## Como baixar o Aplicativo Desktop (Windows)
1. Vá até a aba **Releases** aqui no lado direito do repositório ou clique neste link (https://github.com/gustavorubinho/P3-Calculator/releases/download/Download/Calculadora.exe).
2. Baixe o arquivo `Calculadora.exe` da versão mais recente.
3. Dê um duplo clique e aproveite! (Por ser um `.exe` recém-criado, o Windows Defender pode avisar que é desconhecido. Basta clicar em "Mais informações" e "Executar assim mesmo").

---

## Tecnologias Utilizadas
- **HTML5 / CSS3 / JavaScript:** Toda a lógica matemática, animações e tocar de áudios.
- **Python:** Script principal (`main.py`) rodando a biblioteca `webview`.
- **PyWebView:** Cria a janela nativa do Windows e renderiza o HTML dentro dela.
- **PyInstaller:** Empacota o Python, os arquivos Web e o ícone num único `.exe`.

---

## Como rodar o código-fonte
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
