// apiUtils.ts
import type { APIRequestContext, APIResponse } from '@playwright/test';
export class APIUtils {
 private apiContext: APIRequestContext;
 private loginPayLoad: any;
 constructor(apiContext: APIRequestContext, loginPayLoad: any) {
   this.apiContext = apiContext;
   this.loginPayLoad = loginPayLoad;
 }
 async getToken(): Promise<string> {
   const loginResponse: APIResponse = await this.apiContext.post(
     'https://rahulshettyacademy.com/api/ecom/auth/login',
     {
       data: this.loginPayLoad,
     }
   ); // 200, 201
   const loginResponseJson = await loginResponse.json();
   const token = (loginResponseJson as any).token as string;
   console.log(token);
   return token;
 }
 async createOrder(orderPayLoad: any): Promise<{ token: string; orderId: string }> {
   const response: { token: string; orderId: string } = {
     token: await this.getToken(),
     orderId: '',
   };
   const orderResponse: APIResponse = await this.apiContext.post(
     'https://rahulshettyacademy.com/api/ecom/order/create-order',
     {
       data: orderPayLoad,
       headers: {
         Authorization: response.token,
         'Content-Type': 'application/json',
       },
     }
   );
   const orderResponseJson = await orderResponse.json();
   console.log(orderResponseJson);
   const orderId = (orderResponseJson as any).orders[0] as string;
   response.orderId = orderId;
   return response;
 }
}