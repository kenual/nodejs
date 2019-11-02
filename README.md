# ECMAScript node.js Project

## Create Project Folder
```
mkdir my-project
cd my-project
```

## Initialize Project Default *package.json*
```
npm init -y
```

## Customize Project Author and License 
```
npm config list

npm set init.author.name "<Your Name>"
npm set init.author.email "you@example.com"
npm set init.author.url "example.com"
npm set init.license "MIT"
```

## Create Proejct Entry
```
mkdir server
touch server/index.js
```

## Add start Task to *package.json*
*package.json*
```
 ...
  "scripts": {
    "start": "node server/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  ...
```

## Run start Task to Execute server/index.js
```
npm start
```

## Monitor Change and Auto Start

### Install Development Dependency on *nodemon*
```
npm install nodemon --save-dev
```

### Switch *package.json* to Use *nodemon*
*package.json*
```
  ...
  "scripts": {
    "start": "nodemon server/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  ...
```

## Add Babel to Supplement node.js with Latest ECMAScript Features
### Install development dependency
```
npm install @babel/core @babel/node --save-dev
```

### Add babel to *package.json*
*package.json*
```
 ...
  "scripts": {
    "start": "nodemon --exec babel-node server/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  ...
```

### Install latest ECMAScript features
```
npm install @babel/preset-env --save-dev
```

### Create project root *.babelrc* file
*.babelrc*
```
{
  "presets": [
    "@babel/preset-env"
  ]
}
```

## Externalize Configuration Settings to *.env* File
### Install project dependency dotenv
```
npm install dotenv --save
```

### Create project root *.env* settings file
```
touch .env
```

### Read **MY_KEY** in .js code through dotenv/config
```
import 'dotenv/config'
console.log(process.env.MY_KEY);
```
