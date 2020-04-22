# CutSolverFrontend

[![Vue 2.6](https://img.shields.io/badge/Vue-2.6-brightgreen.svg)](https://vuejs.org/)
[![Travis Build Status](https://travis-ci.org/ModischFabrications/CutSolverFrontend.svg?branch=master)](https://travis-ci.org/ModischFabrications/CutSolverFrontend)
[![Docker Image Version](https://img.shields.io/docker/v/modischfabrications/cutsolver_frontend.svg)](https://hub.docker.com/repository/docker/modischfabrications/cutsolver_frontend)
[![Docker Image Size](https://img.shields.io/docker/image-size/modischfabrications/cutsolver_frontend.svg)](https://hub.docker.com/repository/docker/modischfabrications/cutsolver)

This is a simple vue frontend for my [CutSolver](https://github.com/ModischFabrications/CutSolver). 

This is also my first vue project, keep looking for other references if you want to learn it. 

## Usage
### recommended, batteries included
Use the provided Docker compose file, add in your URL, done!

Set the backend path by adding a `VUE_APP_BACKEND_SOLVER_URL` to your environment or compose file.
See docker compose for details. 

### manual usage
I assume you know what you are doing if you want to install it manually.
Here are some hints for you if you need some help regardless.

#### Initial setup
```
npm install
```

#### Compiles and hot-reloads for development
```
npm run serve
```

#### Compiles and minifies for production
```
npm run build
```

## Tools & Stack
This project uses:
1. *WebStorm* as IDE (while I have it as a student)
1. *Vue* for everything
2. *Vue Bootstrap* for style
3. *VueShowdown* for markdown parsing
4. *Eslint* for linting and code formatting

## Contributing
Remember to set all versions for new releases:
 1. git tag
 2. package.json 
 3. Docker Multibuild (might be done by travis eventually)
