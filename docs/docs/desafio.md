---
hide:
  - navigation
---

# Desafio

> Enunciado oficial do desafio proposto.

## Descrição do Cenário

Miguel possui uma loja física de calçados e utiliza um ERP para gerenciar suas operações. Com o objetivo de aumentar o faturamento, Miguel decidiu investir em vendas online, anunciando seus produtos num marketplace. A quantidade de vendas online superou as expectativas do Miguel, que ficou bastante satisfeito com o aumento do faturamento, porém insatisfeito com o aumento de custo em sua operação, pois além de gerenciar as vendas no ERP, ele também precisa gerenciar em sua conta no marketplace. Com o objetivo de proporcionar ao Miguel a expansão do seu negócio de forma que ele possa vender em vários outros marketplaces com baixo custo operacional, é necessário construir uma solução sistêmica para centralizar a gestão de suas vendas.

## Desenvolvimento

- Uma solução que represente o ERP de acordo com o cenário mencionado

!!! note "Requisitos obrigatórios"
      1. Base de produtos (descrição e estoque);
      2. Simular os registros das baixas de estoque requisitados pela solução do item 3.

- Uma solução que represente o Marketplace de acordo com o cenário mencionado

!!! note "Requisitos obrigatórios"
      1. Simular os registros dos anúncios requisitados pela solução do item 3;
      2. Simular as entradas e registros de compras dos produtos anunciados;
      3. Simular os registros de baixa de estoque requisitados pela solução do item 3.

- Uma solução que represente a centralização da gestão de vendas (automatização das
operações ERP e Marketplace de acordo com o cenário mencionado)

!!! note "Requisitos obrigatórios"
      1. Simular a consulta à base de produtos da solução do item 1;
      2. Simular requisições de cadastro de anúncios dos produtos para a solução do item 2;
      3. Simular a consulta às compras registradas na solução do item 2;
      4. Para cada compra constatada, simular a requisição de atualização (baixa) do estoque do produto anunciado na solução do item 2 e estoque do produto registrado na base do produtos da solução do item 1.

### Documentação

!!! info "Descrever os requisitos funcionais para cada uma das soluções"
      1. Não considerar os requisitos obrigatórios como restritivos;
      2. Contemplar ao menos o Diagrama de Atividades com base nos padrões UML para cada uma das soluções.

### Qualidade

Elaborar um roteiro de testes que garanta a validação da qualidade da solução como um todo.

### Entregáveis

!!! tip ""
    - Documentação
    - Código-fonte das soluções zipado ou GitHub
    - Roteiro de Testes
