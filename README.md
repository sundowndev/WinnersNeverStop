# WinnersNeverStop

La différence entre les gagnants et les perdants se voit à la grandeur face à la pression. Leur capacité à persévérer et ne jamais arrêter de s'entraîner. Découvrez les coulisses d’une discipline sportive qui se développe de plus en plus, et en particulier en France.

Winners Never Stop est un projet de web documentaire destiné à étudier la place de l'esport en France, les législations et les formations qui se mettent en place. Dans ce web-documentaire, vous découvrirez les coulisses d’un sport qui se développe de plus en plus, et en particulier en France. Depuis plus de 10 ans, des événements e-sportifs sont organisés chaque année en France réunissant des milliers de joueurs sur différents jeux. Bien que l'activité physique ne soit pas comparable à celle des sports traditionnels, l'e-sport a été reconnu comme une discipline sportive à part entière grâce à l'entrainement mental qu'elle nécessite. Ce documentaire à pour but de montrer l'envers du décors de cette discipline et comment elle évolue en France.

À l’heure où le domaine du sport électronique est en pleine expansion, des joueurs du monde entier s’entraînent chaque jour pour se dépasser et espérer arriver un jour au sommet de la scène professionnelle, regroupant les meilleurs joueurs du monde. Malgré le débat grandissant sur son association aux sports traditionnels, l’esport ne cesse de grandir et de se démocratiser chaque jour. Ce documentaire a pour but de montrer l’envers du décors de cette discipline et comment elle évolue en France.

## Crédits

#### Design & développement

- Aymeline Chemin
- Matthieu Blok
- Mickael De jesus
- Quentin Aimé
- Raphael Cerveaux

#### Articles & contenu vidéo

- Raphael Cerveaux

### Remerciements

- [VaKarM](https://www.vakarm.net/)
- [HLTV.org](https://www.hltv.org/)

----

# Web application

## Installation

~~~bash
$ git clone git@github.com:sundowndev/WinnersNeverStop.git
$ cd WinnersNeverStop
$ chmod +x scripts/*
$ ./scripts/setup
~~~

## Usage (Docker)

~~~bash
$ docker-compose up -d
~~~

## Usage

Start the client (port 8000)

~~~bash
$ cd client
$ npm run build
$ npm start
~~~

Start the server (port 3000)

~~~bash
$ cd server
$ node server.js
~~~

## API usage

### Requests

As best practice, use these headers to make requests to the API:

~~~
Content-Type:application/x-www-form-urlencoded
Accept:application/json
~~~

When signed in, you must provide the access token:

~~~
Authorization: <Access_token>
~~~

*Note: The token is valid for 3 hours. After that delay you have to sign in again to get another one.*

### Responses

Note: the HTTP response code will never be in the response.

Validation error example:

~~~json
{
    "success": false,
    "message": "Form is invalid.",
    "errors": [
        {
            "message": "\"password\" is required",
            "path": [
                "password"
            ],
            "type": "any.required",
            "context": {
                "key": "password",
                "label": "password"
            }
        }
    ]
}
~~~

`success` key indicate if an error occured or not. It may not be present in case of success.

Getting object(s):

~~~json
{
    "data": {
      "_id": "5bec2fed257ab94172cd3874",
      "firstname": "Raphael",
      "lastname": "NA",
      "username": "sundown",
      "createdAt": "2018-11-14T14:23:41.581Z",
      "updatedAt": "2018-11-14T14:23:41.581Z",
      "__v": 0
    }
}
~~~

Handling arrays:

~~~json
{
    "data": [
      {
        "_id": "5bec2fed257ab94172cd3874",
        "firstname": "Raphael",
        "lastname": "NA",
        "username": "sundown",
        "createdAt": "2018-11-14T14:23:41.581Z",
        "updatedAt": "2018-11-14T14:23:41.581Z",
        "__v": 0
      },
      {
        "_id": "2byz2fed257ab94172cd3858",
        "firstname": "Quentin",
        "lastname": "NA",
        "username": "quentin",
        "createdAt": "2018-11-14T14:23:41.581Z",
        "updatedAt": "2018-11-14T14:23:41.581Z",
        "__v": 0
      }
    ]
}
~~~

When fetching an object, `data` key presence will indicate that the action succeeded and there's no error.
