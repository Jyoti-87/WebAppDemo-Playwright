import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig ({
  testDir: './webapp',
  /* Run tests in files in parallel */

  reporter:  [["html"], ["allure-playwright"]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {

    browserName : 'chromium',
    headless : true,
    screenshot : 'on',
    trace : 'on',//off,on    
  },
  
  
   


});

