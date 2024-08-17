# Countries test project

Project stack:

- Angular 18
- NgRx (store, effects, dev-tools)
- Angular Material
- PrimeNG, PrimeFlex, PrimeIcons

## How to build

```
git clone https://github.com/Phenics13/developstoday-test-project
cd developstoday-test-project/
npm install
ng serve
```

## Overview

### Features

Project has `home` and `country` pages.

#### Home page

Home page consists of sidebar and list of countries.

Sidebar has 3 widgets with 3 random countries that display next holiday in the country. This widgets choose another random countries with `setInterval` every 10 seconds.

List of countries has cards that consist of country's name. Input is used to filter the list of countries with name parameter. Filter input uses `debounceTime(300)` to prevent multiple re-rendering at one time.

#### Country page

Click on country card navigates user to the `country` page. This page displays all holidays of the country in the selected year (default year is current). The year parameter could be from 2020 to 2030.

### Overall

All asynchronous actions displayed in the view as `loading-spinner` from `Angular Material` library to enhance UX.

### Folder structure

- components - basic ui elements
- models - interfaces related to entities on backend
- reducers - state management
- routes - pages of the website
- services - services for http requests logic

## Useful information

For `.env` file were installed `@ngx-env/builder` library

Project checked with `linter` and formatted with `prettier`
