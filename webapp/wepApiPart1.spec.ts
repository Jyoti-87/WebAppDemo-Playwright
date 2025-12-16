// author: Jyoti Sajwan
import { test, expect, request } from '@playwright/test';
import  {APIUtils}  from '../utils/APIUtils';

const loginPayload = { userEmail: "jyoti.sajwan936@gmail.com", userPassword: "Iamqueen@26" };
const orderPayload = { orders: [{ country: "Cuba", productOrderedId: "68a961459320a140fe1ca57a" }] };

interface OrderResponse {
  token: string;
  orderId: string;
}

let response: OrderResponse;

test.beforeAll(async () => {
  const apiContext = await request.newContext();
  const apiUtils = new APIUtils(apiContext, loginPayload);
  response = await apiUtils.createOrder(orderPayload);
});

test('@API Place the order', async ({ page }) => {
  await page.addInitScript((value) => {
    window.localStorage.setItem('token', value);
  }, response.token);

  await page.goto("https://rahulshettyacademy.com/client");
  await page.locator("button[routerlink*='myorders']").click();
  await page.locator("tbody").waitFor();

  // Optimized: Use a direct locator instead of looping
  const orderButton = page.locator(`tbody tr:has(th:has-text("${response.orderId}")) button`).first();
  await orderButton.click();

  const orderIdDetails = await page.locator(".col-text").textContent();
  expect(orderIdDetails).toBe(response.orderId);
});