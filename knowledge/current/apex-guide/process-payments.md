---
title: "Process Payments"
domain: apex-guide
topic: process-payments
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.709Z
keywords: [Process, Payments]
---

# Process Payments

# Process Payments

Process a payment in the payment gateway.

| Available in: Salesforce Spring ’20 |
| --- |
  

To access commercepayments API, you need the PaymentPlatform org permission.

1.  Get the payment capture request object from the [PaymentGatewayContext Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_commercepayments_PaymentGatewayContext.htm#apex_class_commerce_payments_PaymentGatewayContext).
    
    ```
    
    ```
    
2.  Set the HTTP request object.
    
    ```
    
    ```
    
3.  Read the parameters from the [CaptureRequest](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_commercepayments_CaptureRequest.htm#apex_class_commerce_payments_CaptureRequest) object and prepare the HTTP request body.
4.  Make the HTTP call to the gateway using the [PaymentsHttp Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_commercepayments_PaymentsHttp.htm#apex_class_commerce_payments_PaymentsHttp).
    
    ```
    
    ```
    
5.  Parse the httpResponse and prepare the [CaptureResponse](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_commercepayments_CaptureResponse.htm#apex_class_commerce_payments_CaptureResponse) object.
    
    ```
    
    ```
    
6.  Return the captureResponse.