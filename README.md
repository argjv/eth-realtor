# eth-realtor (FrontEnd)

The project aims to simplify the process of managing real estate properties by using ethereum smart contracts to replace paper trail and legacy processes.

## Requirements

* Truffle
* Ganache
* NodeJS

## Run the project

1. Start ganache and verify it is serving in http://127.0.0.1:7545
2. Go to the root folder and compile and upload the ethereum contracts into the test network managed by Ganache:

```shell
truffle compile
truffle migrate
```

3. Start the server:

```shell
npm run start
```

This will start a server in http://localhost:3000 or in the next available port if it's in use.
