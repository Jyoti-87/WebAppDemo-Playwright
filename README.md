<!-- Important link for reporter setup -->
https://playwright.dev/docs/test-reporters
npx playwright test --reporter=line,allure-playwright

<!-- Generate Allure Report after the tests are executed: -->
 npx allure generate ./allure-results -o ./allure-report

<!-- Open the generated report: -->
npx allure open ./allure-report

Path - http://localhost:56686
