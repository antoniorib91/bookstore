# Bookstore

Bookstore Library, made with angular 9 and Node. To run this project you need

to install Angular-CLI an Nodejs with Npm.

Install node and npm - https://nodejs.org/en/

(You need npm) Install angular CLI - https://cli.angular.io 

## Running with container

Firts you need do build docker image with the command above.

```
docker build -t bookstore-ui .
```

if you need to see docker images o your computer you can do
with this command
```
docker images
```

to Run de server just run

``` 
docker docker run -p 4000:4000 bookstore-ui
```

after the build you can access the localhost on 4000

```
http://localhost:4000
```

## Running Local

`ng serve` - Runs the Dev Server on localhost:4200

`ng test` - Runs unit tests of this project

`ng build` - Build the project

If you don't want to use dev server of angular, you can run 
```
ng test
```

And use node to runs my app
```
  node server.js
```
