---
hide:
  - navigation
---

# Documentação Técnica

# Requisitos Funcionais
## Solução 1
1. O usuário deve poder cadastrar novos produtos com nome, descrição e estoque.
2. O estoque deve ser atualizado tanto via ERP quanto via requisição de sistema Centralizador de Vendas.

## Solução 2
1. O sistema deve poder cadastrar anúncios requisitados pelo Centralizador de Vendas.
2. O usuário deve poder comprar produtos anunciados.
3. O sistema deve enviar a informação de que uma compra foi feita para o Centralizador de Vendas.
4. O sistema deve poder atualizar os valores de estoque com a requisição do Centralizador de Vendas.

## Solução 3
1. O usuário deve poder consultar a base de produtos cadastrados.
2. O usuário deve poder editar produtos cadastrados.
3. O usuário poder excluir produtos cadastrados.
4. O usuário deve poder requisitar a criação de novos anúncios nos Marketplaces conectados ao sistema.
5. O sistema deve atualizar o estoque com a chegada da requisição do Marketplace.


# Diagramas de Atividade
![Diagrama de Login](img/diagrams/Diagrama_Login.png){: class="aligncenter"}

![Diagrama de Cadastro de Produtos](img/diagrams/Diagrama_Cadastro_Produto.png){: class="aligncenter"}

![Diagrama de Edição e Consulta de Produtos](img/diagrams/Diagrama_Edicao_Consulta_Produto.png){: class="aligncenter"}
