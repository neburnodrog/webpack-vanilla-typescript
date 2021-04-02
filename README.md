# 🚀 My personal guide to webpack bundle with typescript!

## initial project setup (steps taken)

---

### initialize project

```
$ npm init -y
```

---

### initialize git repo

```
$ git init
$ git add .
$ git commit -m "initial commit"

create github repository

$ git remote add (url)
$ git branch -M master
$ git push -u origin master       // -u flag for upstream branch
```

---

### install eslint / typescript / webpack

```
$ npm i -D webpack webpack-cli
$ npx webpack-cli init                  // this creates tsconfig.json, a new package.json, etc
$ npm i -D typescript ts-loader @types/node
$ npm i -D eslint
$ npx eslint --init                     // here the types for eslint are installed automatically

```

---

### configuring tsconfig.json for jsx

```
+ "outDir": "./dist",
+ "jsx": "react",
+ "exclude": ["./node_modules", "./dist", "./webpack.config.js"],
```

---

### creating a .eslintignore file

```
// node_modules is excluded by default

/dist
webpack.config.js

```

---
