# QA Shopping Assessment

## Application Under Test

Website: https://www.saucedemo.com

# SauceDemo QA Automation Project

## Overview

This project demonstrates automated testing of the SauceDemo web application using Playwright and TypeScript. It includes end-to-end test scenarios covering login, product inventory, shopping cart, checkout, product sorting, and invalid login validation.

The purpose of this project is to practice QA Automation concepts and build a portfolio demonstrating practical testing skills.

---

## Technologies Used

- Playwright
- TypeScript
- Node.js
- Visual Studio Code
- Git
- GitHub

---

## Project Structure

```text
qa-shopping-assessment/
│
├ e2e/
│   ├── login.spec.ts
│   ├── inventory.spec.ts
│   ├── cart.spec.ts
│   ├── checkout.spec.ts
│   ├── sorting.spec.ts
│   └── invalid-login.spec.ts
│
├── pages/
│   ├── LoginPage.ts
│   ├── InventoryPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
│
├── test-data/
│   └── users.ts
│
├── utils/
│
├── package.json
├── playwright.config.ts
└── README.md
```

---

## Automated Test Scenarios

- ✅ Valid Login
- ✅ Verify Product Inventory
- ✅ Add Product to Cart
- ✅ Complete Checkout
- ✅ Product Sorting (A–Z)
- ✅ Product Sorting (Z–A)
- ✅ Invalid Login

---

## How to Install

Clone the repository:

```bash
https://github.com/Thakgatso-ctr/qa-shopping-assessment.git
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## Running the Tests

Run all tests:

```bash
npx playwright test
```

Run a single test:

```bash
npx playwright test e2e/login.spec.ts
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

---

## Skills Demonstrated

- Manual Test Case Design
- Bug Reporting
- End-to-End UI Automation
- Page Object Model (POM)
- Cross-Browser Testing
- Git Version Control
- GitHub Collaboration
- Playwright Automation
- TypeScript Fundamentals

---

## Author

**Thakgatso Makola**

Junior QA Automation Portfolio Project