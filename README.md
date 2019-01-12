# WinnersNeverStop

Winners Never Stop est un projet de web documentaire destiné à étudier la place de l'esport en France, les législations et les formations qui se mettent en place. Dans ce web-documentaire, vous découvrirez les coulisses d’un sport qui se développe de plus en plus, et en particulier en France. Depuis plus de 10 ans, des événements e-sportifs sont organisés chaque année en France réunissant des milliers de joueurs sur différents jeux. Bien que l'activité physique ne soit pas comparable à celle des sports traditionnels, l'e-sport a été reconnu comme une discipline sportive à part entière grâce à l'entrainement mental qu'elle nécessite. Ce documentaire à pour but de montrer l'envers du décors de cette discipline et comment elle évolue en France.

## Installation

~~~bash
$ git clone git@github.com:sundowndev/WinnersNeverStop.git
$ chmod +x bin/setup
$ ./setup # developpment only
~~~

## Usage (Docker)

~~~bash
$ docker-compose up -d
~~~

## Usage

~~~bash
# API
$ cd server
$ npm install
$ npm i -g @adonisjs/cli
$ adonis key:generate

# Client
$ cd ../client
$ npm install
$ npm run build
$ npm start
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

The response code will never be in the response. However, `success` key will always be present.

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

Getting object(s):

~~~json
{
    "success": true,
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
    "success": true,
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
