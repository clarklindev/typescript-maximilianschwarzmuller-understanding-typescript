## node

- errors during build using node 18
- fix: using node-v16.19

## axios

- downgrade to axios ^0.27.2"

## Api key

geocoding - https://developers.google.com/maps/documentation/geocoding/start

js maps - https://developers.google.com/maps/documentation/javascript/overview
script tag + api key - https://developers.google.com/maps/documentation/javascript/get-api-key

## install google types

```shell
npm i --save-dev @types/googlemaps
```

## API Keys DO NOT COMMIT TO GITHUB

- api keys are exposed, do not upload to github
- api keys have also been removed from index.html <script> and app.ts GOOGLE_API_KEY

## run

- running with test local server on http://localhost:8080/

```shell
npm run start
```
