# README - Instruções de Uso

## Funcionalidades da Página
A página é estruturada em quatro seções principais:
* **Hero:** Primeira seção da página, com apresentação inicial do projeto e chamada para participação.
* **Sobre:** Seção que explica o objetivo da pesquisa e sua proposta.
* **Metodologias:** Descreve como a pesquisa é realizada e organizada.
* **FAQ:** Reúne perguntas frequentes sobre o projeto.

### Navegação e Interatividade
* **Navegação Inteligente:** O menu (navbar) possui botões de redirecionamento que levam o usuário diretamente para a seção desejada da página.
* **Acesso ao Formulário:** Botões com a chamada “Participar da pesquisa” estão posicionados no navbar e na seção Hero, direcionando o usuário imediatamente para o formulário de votação.
* **FAQ Dinâmico:** Cada pergunta possui um ícone de “+”. Ao clicar, um pop-up é exibido com a resposta correspondente.
* **Redes Sociais:** Ícones com links externos que redirecionam o usuário para as respectivas plataformas.
* **Foco do Design:** Interface totalmente construída com foco na facilidade de navegação, experiência do usuário (UX) e consistência visual.

---

## Funcionalidades do Formulário
O formulário foi desenvolvido para coletar as seguintes informações básicas dos participantes:
* Nome
* Idade
* Opção de voto (Candidato 1, Candidato 2, Candidato 3 ou Indeciso)

### Fluxo de Preenchimento e Envio
1. **Entrada de Dados:** O usuário insere o nome e a idade nos campos de texto e seleciona sua intenção de voto por meio de botões de rádio. Todos os campos são de preenchimento obrigatório.
2. **Processamento (JavaScript):** Ao clicar em enviar, o JavaScript impede o recarregamento da página e organiza as informações estruturadas em formato JSON.
3. **Integração com API (Google Apps Script):** Os dados são enviados via requisição assíncrona `POST` utilizando `fetch` para um endpoint do Google Apps Script.
4. **Armazenamento:** O script recebe as informações e as registra automaticamente em uma planilha do Google (aba "Respostas"), computando a data e a hora do envio.
5. **Dashboard em Tempo Real:** A planilha conta com uma aba dedicada ("Gráfico") com um contador de escolhas (total de votos por opção) e um gráfico de setores (pizza) para exibição dos resultados em tempo real.
6. **Feedback Visual:** Após o envio bem-sucedido, o formulário desaparece, uma mensagem de confirmação é exibida na tela e, após alguns segundos, a interface é totalmente ocultada de forma limpa.
