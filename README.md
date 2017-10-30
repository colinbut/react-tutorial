# React Tutorial

#### Introduction

React is NOT a framework

React IS a library along with concepts & principles

React is a 'view' library for building fast responsive UI (User Interfaces).

In a traditional MVC architectural pattern - React is the View ('V') of MVC.

However, React brings its own new architectural pattern - Flux.

#### Concepts

- Virtual DOM
- One-Way Data Binding (Top-Down rendering)
- Component Driven (everything in React is component)

Allows server-side rendering.

React loves ES6!

React works well with Redux!

Redux come out as an alternative to Flux though and it works even more well with React.  

#### Thinking in React

In order to develop react applications you need to change your mindset a bit and start thinking of what is known as
the 'React way'.

The react way of thinking is forget traditional MVC approach that is already well adopted some client side full-blown
MVC framework like AngularJS, Backbone, Ember etc...

Angular does two-way data binding which is already very well known but React does things slightly differently. It is
adopts a uni-directional data flow where one-way data binding is at its core.

#### Creating React application

```
npm install -g create-react-app
```

installs a node module called `create-react-app` which generates a react application template

#### Developing a React application

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!
