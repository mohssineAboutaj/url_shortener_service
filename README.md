<h1>URL Shortener Service</h1>

<h2>Table of contents</h2>

- [About](#about)
- [Quick Start](#quick-start)
- [Usage](#usage)
- [Endpoints](#endpoints)
	- [Create](#create)
- [License](#license)

## About

A service to create short urls using Nodejs, Express and MongoDB

## Quick Start

```bash
# Install dependencies
yarn install

# Edit the default.json file with your mongoURI and baseUrl
# Use production.json in production env

# Run
yarn start

# Dev
yarn dev
```

## Usage

## Endpoints

Endpoint to create short url

### Create

to create new shorten url
+ url: `api/url/shorten`
+ example
	```js
		{ "longUrl": "xxxx" }
	```


## License

[_MIT_](./LICENSE)
