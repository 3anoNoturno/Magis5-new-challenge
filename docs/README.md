# Documentação

Para desenvolver a documentação foi utilizado [mkdocs](https://www.mkdocs.org/) estilizado com o tema [mkdocs-material](https://squidfunk.github.io/mkdocs-material/). Mkdocs exige uma versão recente de python, preferivelmente [***python3.7***](https://www.python.org/downloads/) ou maior. Acesse [***https://joaobotelho072002.github.io/***]() para visualização.

## Instalação

Acesse a pasta `docs` no terminal:

```bash
cd magis5-new-challenge/docs
```

Criar e ativar um ambiente virtual em python.

```bash
python3 -m venv <venv_name>
source <venv_name>/bin/activate
```

Use o gerenciador de pacotes [pip](https://pip.pypa.io/en/stable/) para instalar os requerimentos (já é incluso na instalação do python).

```bash
pip install -r requirements.txt
```

## Uso

Como buildar e rodar local:

```bash
mkdocs build # faz o build da documentação
mkdocs serve # localhost
```
