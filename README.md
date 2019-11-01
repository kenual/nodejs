# Modern Javascript Project

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
mkdir src
touch src/index.js
```

## Add start Task to *package.json*
*package.json*
```
 ...
  "scripts": {
    "start": "node src/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  ...
```
### Run start Task to execute src/index.js
```
npm start
```