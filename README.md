# Basic Routes Lab

## Learning Goals

- Use the `<Routes>` and `<Route>` components to display different components
  based on the URL
- Use the `<NavLink>` component to allow client-side navigation

## Introduction

In this lab we are going to build out a Movie application that has routes for a
Home Page, Actors Page, Movies Page and Directors Page. Our goal is to provide
routes and links for these 4 pages.

Here is what each page of our app should look like when we are done with this
lab:

- [Home Page](https://s3.amazonaws.com/learn-verified/react-router-lab-home-page.png)
- [Movies Page](https://s3.amazonaws.com/learn-verified/react-router-lab-movies-page.png)
- [Directors Page](https://s3.amazonaws.com/learn-verified/react-router-lab-directors-page.png)
- [Actors Page](https://s3.amazonaws.com/learn-verified/react-router-lab-actors-page.png)

Let's work through this one component at a time.

## Setup

Our `src` folder contains the following:

```txt
src/
├── data.ts
├── index.tsx
└── components/
    ├── App.tsx
    ├── Actors.tsx
    ├── Directors.tsx
    ├── Home.tsx
    ├── Movies.tsx
    └── NavBar.tsx
```

All of the file and module imports are done for you, so you just need to focus
on the JSX for these components.

Fork and clone this assignment, then run `npm install && npm start` to get the
app started. Don't forget to run `npm test` when you're finished to ensure
you've completed all deliverables.

Let's take a closer look at the files given to us and what we'll need to do in
each one, if anything.

### index.tsx

Our `index.tsx` file is completed for us. It loads the `BrowserRouter` component
from React Router, as well as `App` as the top level component.

### data.ts

This file contains seed data for **Actors**, **Movies**, and **Directors**. Be
sure to examine this file to understand how the data is structured to make
accessing it easier later on.

## Components

### App

Inside this component, we'll need to render our `NavBar` and four **React
Router** `Route` components with the following paths:

- `/movies`: should render the `Movies` component
- `/directors`: should render the `Directors` component
- `/actors`: should render the `Actors` component
- `/`: should render the `Home` component

### NavBar

This component needs to render four `NavLink` components. They will be for `/`,
`/movies`, `/directors`, `/actors`, **in this order**.

> **Note**: The tests will check that the links are in that given order, so be
> sure to follow it!

### Home

This component should render the text `Home Page` in an `<h1>`.

### Movies

This component should render:

1. The text `Movies Page` in an `<h1>`
1. A new `<div>` for each movie with the following:
   - The movie's `title` in an `h3`.
   - The movie's `time` and a `p`.
   - A `<ul>` with a list of the movie's `genres`, each within their own `<li>`.

[Completed Movies Page Screenshot](https://s3.amazonaws.com/learn-verified/react-router-lab-movies-page.png)

### Directors

This component should render:

1. The text `Directors Page` in an `<h1>`
1. A new `<div>` for each director with the following:
   - The director's `name` in an `h3`.
   - A `<ul>` with a list of the director's `movies`, each within their own
     `<li>`.

[Completed Directors Page Screenshot](https://s3.amazonaws.com/learn-verified/react-router-lab-directors-page.png)

### Actors

This component should render:

1. The text `Actors Page` in an `<h1>`
1. A new `<div>` for each actor with the following:
   - The actor's `name` in an `h3`.
   - A `<ul>` with a list of the actor's `movies`, each within their own `<li>`.

[Completed Actors Page Screenshot](https://s3.amazonaws.com/learn-verified/react-router-lab-actors-page.png)

> **Note**: The tests will count how many `<div>`s are nested inside your
> `Movies`, `Directors`, and `Actors` components. So to get tests to pass, you
> must create _exactly one_ `<div>` for each movie, director, or actor, and no
> additional nested `<div>`s in those components.

## Resources

- [React Router](https://reactrouter.com/en/main)
