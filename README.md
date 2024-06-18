# AutomationTests_DeltaGreen
A suite of automated tests for the Delta Green web application using Playwright.

## Table of Contents

- [Introduction](#introduction)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Directory Structure](#directory-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project aims to automate the testing of the Delta Green web application using [Playwright](https://playwright.dev/).

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

1. **Run the tests**:

    ```sh
    npx playwright test
    ```

## Directory Structure

```plaintext
web-automation-tests/
├── Tests/
│   ├── example.test.js
├── .gitignore
├── package.json
├── playwright.config.js
├── README.md
└── node_modules/ (created after running npm install)
