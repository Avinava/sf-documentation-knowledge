---
title: "Tokenization Service"
domain: apex-guide
topic: tokenization-service
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.739Z
keywords: [Tokenization, Service]
---

# Tokenization Service

# Tokenization Service

The credit card tokenization process replaces sensitive customer information with a one-time algorithmically generated number, called a token, used during the payment transaction. Salesforce stores the token and then uses that token as a representation of the credit card used for transactions. The token lets you store information about the credit card without storing sensitive customer data, such as credit card numbers, in Salesforce.

-   **[Tokenization Service Apex Class Implementation](atlas.en-us.apexcode.meta/apexcode/apex_commercepayments_tokenization_service_apex_imp.htm)**  
    Use the tokenization service to hide sensitive customer payment method data. The Tokenization service uses PaymentMethodTokenizationRequest, PaymentMethodTokenizationResponse, and CardPaymentMethodRequest. Implement these classes in your payment gateway adapter.
-   **[Tokenization Service API](atlas.en-us.apexcode.meta/apexcode/apex_commercepayments_tokenization_service_api.htm)**  
    The credit card tokenization process replaces sensitive customer information with a one-time algorithmically generated number, called a token, to use during the payment transaction. Salesforce stores the token and then uses that token as a representation of the credit card used for transactions. The token stores information about the credit card without storing sensitive customer data such as credit card numbers. To add tokenization capabilities to your payment services, implement our Tokenization API.