# Task Estimation Trainer &middot;

![Tests](https://github.com/jimskretas/task-estimation-trainer/workflows/Test/badge.svg)
[![Maintainability](https://api.codeclimate.com/v1/badges/10e93b326f8bb0bbd6be/maintainability)](https://codeclimate.com/github/jimskretas/task-estimation-trainer/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/10e93b326f8bb0bbd6be/test_coverage)](https://codeclimate.com/github/jimskretas/task-estimation-trainer/test_coverage)

Web app that makes you better at estimating how long a task will take.

## Installation

- Clone the project.
- Install the dependencies: `npm install`

## How to run

- Start the app: `npm start`

## Other scripts available

- `npm run coverage`, with this script you can get the test coverage.
  - It uses: `coverage:clean` to remove any old coverage files,
  - `coverage:integration` to run the [Cypress](https://www.cypress.io/) tests,
  - `coverage:unit` to run the unit tests,
  - `coverage:merge` to merge the coverage reports.

## CICD

Every time a pull request opens:

- project gets tested and has its test coverage report sent to [Code Climate](https://codeclimate.com/) using Github Actions (with [this](.github/workflows/test.yml) script),
- Code Climate tests the code for Duplication/Complexity/Maintainability issues,
- Netlify creates a deploy preview.

When a pull request gets merged into master:

- using [this](.github/workflows/coverage-master.yml) script, a new test coverage report is created and sent to Code Climate,
- app gets deployed to Netlify.
