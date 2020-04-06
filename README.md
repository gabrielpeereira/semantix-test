## Tecnologias que utlizei no teste Front-end

- React,
- Rotas para desenvolver o SPA;
- Axios para manipulação de Apis;
- React Icons para os icones;

## Como excutar o teste
- Versão do Nodejs: 12.16.1
Neste teste foram usandas alguns modulos e apis, para executar, após ter acessado o diretório instale as dependências:
- npm install
- npm start

<img src="https://semantix.com.br/wp-content/uploads/2019/12/Semantix-horizontal.png" alt="drawing" width="200"/>

# Teste de Front-end Semantix

Este teste é apresentado aos candidatos as vagas de desenvolvimento Front-end para avaliar os quesitos técnicos.


### Desafio

O objetivo é criar duas páginas com gráficos apresentando dados vindos de uma api rest.

### Requisitos:

- Implemente o HTML/CSS da tela com base no layout disponível;
- Pode ser usado qualquer framework javascript, recomendado o uso do [React](https://reactjs.org/);
- Recomendamos o usos das seguintes libs para construir os graficos:
  - [Chart js](https://www.chartjs.org/samples/latest/)
  - [Echarts](https://echarts.apache.org/examples/en/index.html)

### Ganhe pontos extras por:
- A página ser responsiva;
- Testes unitários e funcionais;
- Uso do React;
- Organização de código, componentes reutilizáveis.

Layout: [Figma file](https://www.figma.com/file/YCCwmJvJDqO5dq4nMkoxQI/front-end-teste?node-id=0%3A1)

## API

Gráfico de barra:

> GET https://private-afe609-testefront.apiary-mock.com/anual-result

Response:

```json
[
  {
    "label": "january",
    "value": 3000
  },
  {
    "label": "february",
    "value": 2000
  },
  {
    "label": "march",
    "value": 2600
  },
  {
    "label": "april",
    "value": 2000
  },
  {
    "label": "may",
    "value": 3000
  },
  {
    "label": "june",
    "value": 4000
  },
  {
    "label": "july",
    "value": 3500
  },
  {
    "label": "august",
    "value": 1000
  },
  {
    "label": "september",
    "value": 1200
  },
  {
    "label": "october",
    "value": 2000
  },
  {
    "label": "november",
    "value": 5000
  },
  {
    "label": "december",
    "value": 3000
  }
]
```

Gráfico pie:

> GET https://private-afe609-testefront.apiary-mock.com/anual-percentage

Response:

```json
[
  {
    "label": "legend 1",
    "value": 30
  },
  {
    "label": "legend 2",
    "value": 30
  },
  {
    "label": "legend 3",
    "value": 40
  }
]
```

Gráfico Line:

> GET https://private-afe609-testefront.apiary-mock.com/time-data

Response:

```json
{
  "today": [
    {
      "label": "12:00",
      "value": 30
    },
    {
      "label": "13:00",
      "value": 24
    },
    {
      "label": "14:00",
      "value": 40
    },
    {
      "label": "15:00",
      "value": 57
    },
    {
      "label": "16:00",
      "value": 67
    },
    {
      "label": "17:00",
      "value": 12
    },
    {
      "label": "18:00",
      "value": 34
    }
  ],
  "yesterday": [
    {
      "label": "12:00",
      "value": 22
    },
    {
      "label": "13:00",
      "value": 45
    },
    {
      "label": "14:00",
      "value": 32
    },
    {
      "label": "15:00",
      "value": 67
    },
    {
      "label": "16:00",
      "value": 43
    },
    {
      "label": "17:00",
      "value": 23
    },
    {
      "label": "18:00",
      "value": 1
    }
  ]
}
```


## Submissão:

Nos envie o repositorio do github, gitlab ou qualquer serviço de versionamento que tenha utilizado.

Qualquer dúvida entre em contato.

! Boa sorte.

