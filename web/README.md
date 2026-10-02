# Persona Style Calculator

<img width="1919" height="991" alt="image" src="https://github.com/user-attachments/assets/3271a33d-6fe5-45a9-befe-a7c0fc0df048" />


Uma calculadora web estilizada com uma interface de usuário fortemente inspirada no design da franquia **Persona** (com uma paleta voltada para as cores de Persona 3). O projeto conta com animações dinâmicas, cortes diagonais, tipografia de grande impacto e suporte a efeitos sonoros interativos.

## Funcionalidades

* **Estética Persona:** Fundo dividido por cortes diagonais agressivos, containers em formatos irregulares (polígonos rasgados) e botões caóticos.
* **Animações Dinâmicas:** 
  * O container da calculadora possui uma animação contínua de balanço ("sway") com rotações em eixos 3D.
  * O *hover* (passar o mouse) dos botões aplica rotações aleatórias simulando um efeito caótico de *freeze-frame*.
* **Número Gigante de Fundo:** Toda vez que a conta é finalizada (`=`) ou apagada (`C`), o resultado estilhaça a tela em formato gigante no plano de fundo.
* **Efeitos Sonoros:** Suporte nativo para efeitos sonoros imersivos que reagem ao mouse (hover, clique, e impacto final).
* **Matemática Funcional:** Uma calculadora real capaz de realizar somas, subtrações, divisões e multiplicações.

## Como usar

Para rodar a calculadora, você não precisa de nenhum servidor ou framework especial.

1. Baixe os arquivos do projeto.
2. Dê um duplo clique no arquivo `index.html` para abri-lo no seu navegador favorito (Chrome, Firefox, Edge, Safari, etc).

## Como ativar os Efeitos Sonoros

No design original dos jogos Persona, o áudio é essencial para passar a sensação de impacto na interface. O código já está preparado para tocar sons, mas você precisará fornecer os arquivos de áudio.

Para que os sons funcionem, você deve colocar **3 arquivos de áudio no formato `.wav`** na mesma pasta onde está o arquivo `index.html`. Os arquivos devem ter **exatamente** os seguintes nomes:

* `hover.wav` - Som que tocará rapidamente ao passar o mouse por cima de qualquer botão da calculadora.
* `click.wav` - Som que tocará ao clicar em qualquer botão da calculadora.
* `result.wav` - Som de impacto forte que tocará sempre que o botão `=` ou `C` for pressionado e o número gigante de fundo for atualizado.

*(Dica: Procure por "Persona UI sound effects" na internet para encontrar os sons fiéis à franquia).*
