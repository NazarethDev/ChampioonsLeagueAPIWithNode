# Champions League Node API

Este aplicativo foi desenvolvido juntamente com o conteúdo apresentado no Bootcamp da Dio para Mobile Developer.

### Objetivo
Esse aplicativo tem como objetivo realizar todo o ciclo CRUD (create, read, update e delete) em uma base de dados que contém informações sobre os jogadores e clubes participantes da Champions League.

### Funcionalidades

Como indicado anteriormente, o aplicativo realiza o ciclo CRUD sobre base de dados, o qual contém informações sobre a Champions League. Os seus respectivos endpoints e funcionalidades são:

- Listar jogadores: a aplicação retorna um arquivo JSON que contém todos os jogadores disponibilizados na base de dados do programa através do endpoint `api/players`. O retorno da API será um JSON semelhante a esse, com suas respectivas informações:

```Json
    [
        {
            id: number,
            name: string,
            club: string,
            nationality: string,
            position: string,
            statistics: {
                Overall: number,
                Pace: number,
                Shooting: number,
                Passing: number,
                Dribbling: number,
                Defending: number,
                Physical: number
                }
        },
        { 
            id: number,
            name: string,
            club: string,
            nationality: string,
            position: string,
            statistics: {
                Overall: number,
                Pace: number,
                Shooting: number,
                Passing: number,
                Dribbling: number,
                Defending: number,
                Physical: number
            }
        }
    ]
```

- Mostrar jogador: a aplicação mostra ao se buscar no endpoint `api/players/{idjogador}`. Ao se acessar o enpoint passado como parâmetro um id correspondente ao de um jogador, a aplicação retornará um objeto com essas características:

```Json
    id: number,
    name: string,
    club: string,
    nationality: string,
    position: string,
    statistics: {
        Overall: number,
        Pace: number,
        Shooting: number,
        Passing: number,
        Dribbling: number,
        Defending: number,
        Physical: number

    }
```

- Mostrar Clube: Além de se mostrar os jogadores, a API também é capaz de retornar aos usuários os times que participam do torneio, através do endpoint `api/clubs`. O retorno da aplicação será semelhante a esta:

```Json
{
    {
        id: number,
        name: string,
    },
    {
        id: number,
        name: string,
    },
    {
        id: number,
        name: string,
    },
}
```

- Cadastro de novos jogadores: É possível cadastrar um novo jogador na aplicação por meio do endpoint `api/players` com o verbo **POST**. Ao fazer isso, a requisição precisa enviar um corpo com um formato semelhante ao que a API devolve como resposta ao se buscar um jogador pelo ID:

```Json
    id: number,
    name: string,
    club: string,
    nationality: string,
    position: string,
    statistics: {
        Overall: number,
        Pace: number,
        Shooting: number,
        Passing: number,
        Dribbling: number,
        Defending: number,
        Physical: number

    }
```

- Atualizar jogador: através do endpoint `api/players/{idjogador}` com o devido id do objeto a se alterar e o verbo **PATCH**, o programa recebe um body que realiza a atualização de valores para o objeto corretamente. O corpo deve seguir o seguinte padrão:

```Json
    {
        Overall: number,
        Pace: number,
        Shooting: number,
        Passing: number,
        Dribbling: number,
        Defending: number,
        Physical: number
    }
```

- Exclusão de um jogador: um jogador pode ser excluídos da base de dados através do endpoint `api/players/{idjogador}` usando-se o verbo **DELETE**. 


### Contato do desenvolvedor

Email: lorran.nazareth@gmail.com

LinkedIn: www.linkedin.com/in/lorrannazareth/

---
# Champions League Node API

This application was developed alongside the content presented in Dio's Mobile Developer Bootcamp.

### Objective
The purpose of this application is to perform the full CRUD cycle (create, read, update, and delete) on a database that contains information about the players and clubs participating in the Champions League.

### Features

As mentioned earlier, the application performs the CRUD cycle on a database that contains information about the Champions League. Its respective endpoints and functionalities are:

- List players: the application returns a JSON file containing all players available in the program's database through the `api/players` endpoint. The API response will be a JSON similar to this, with its respective information:

```Json
    [
        {
            id: number,
            name: string,
            club: string,
            nationality: string,
            position: string,
            statistics: {
                Overall: number,
                Pace: number,
                Shooting: number,
                Passing: number,
                Dribbling: number,
                Defending: number,
                Physical: number
                }
        },
        { 
            id: number,
            name: string,
            club: string,
            nationality: string,
            position: string,
            statistics: {
                Overall: number,
                Pace: number,
                Shooting: number,
                Passing: number,
                Dribbling: number,
                Defending: number,
                Physical: number
            }
        }
    ]
```

- Show player: the application displays a player when querying the endpoint `api/players/{playerId}`. By accessing the endpoint with an ID corresponding to a player, the application will return an object with these characteristics:

```Json
    id: number,
    name: string,
    club: string,
    nationality: string,
    position: string,
    statistics: {
        Overall: number,
        Pace: number,
        Shooting: number,
        Passing: number,
        Dribbling: number,
        Defending: number,
        Physical: number

    }

```

- Show club: In addition to displaying players, the API can also return the clubs participating in the tournament through the `api/clubs` endpoint. The application's response will be similar to this:

```Json

{
    {
        id: number,
        name: string,
    },
    {
        id: number,
        name: string,
    },
    {
        id: number,
        name: string,
    },
}

```

- Register new players: It is possible to register a new player in the application through the `api/players` endpoint using the POST method. When doing so, the request must send a body in a format similar to what the API returns when searching for a player by ID:

```Json
    id: number,
    name: string,
    club: string,
    nationality: string,
    position: string,
    statistics: {
        Overall: number,
        Pace: number,
        Shooting: number,
        Passing: number,
        Dribbling: number,
        Defending: number,
        Physical: number

    }
```
- Update player: through the endpoint `api/players/{playerId}` with the respective ID of the object to be updated and the PATCH method, the program receives a body that correctly updates the object's values. The body must follow this pattern:

```Json
    {
        Overall: number,
        Pace: number,
        Shooting: number,
        Passing: number,
        Dribbling: number,
        Defending: number,
        Physical: number
    }
```

### Developer Contact

Email: lorran.nazareth@gmail.com

LinkedIn: www.linkedin.com/in/lorrannazareth/