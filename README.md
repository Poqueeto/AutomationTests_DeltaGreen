# Web Automation Tests

This repository contains automation tests for the Delta Green web application using Playwright.

## Table of Contents

- [Introduction](#introduction)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Directory Structure](#directory-structure)

## Introduction

This project aims to automate the testing of the XYZ web application using [Playwright](https://playwright.dev/).

## Technologies

- Node.js
- Playwright

## Installation

1. **Clone the repository**:

    ```sh
    git clone https://github.com/Poqueeto/AutomationTests_DeltaGreen.git
    cd web-automation-tests
    ```

2. **Install dependencies**:

    ```sh
    npm install
    ```

## Usage

1. **Configure the tests**:
   - Update the `playwright.config.js` file with the necessary configuration (e.g., base URL, browser type).

2. **Run the tests**:

    ```sh
    npm test
    ```

## Directory Structure

```plaintext
web-automation-tests/
├── node_modules/
├── test-results
├── Tests/
│   └── backend/
│       └── api.test.js
│   └── frontend/
│       └── example.test.js
├── .gitignore
├── jest.config.js
├── package-lock.json
├── package.json
├── playwright.config.js
└──  README.md