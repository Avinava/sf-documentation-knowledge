---
title: "PaymentGatewayNotificationRequest Methods"
domain: apex-reference
topic: paymentgatewaynotificationrequest-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.046Z
keywords: [PaymentGatewayNotificationRequest, Methods, Gets, HTTP, headers, notification, request, sent, payment, gateway., getHeaders, Signature, Return, Value, getRequestBody]
---

# PaymentGatewayNotificationRequest Methods

> Gets HTTP headers from the notification request sent by the payment
      gateway.

## PaymentGatewayNotificationRequest Methods

The following are methods for PaymentGatewayNotificationRequest.

-   **[getHeaders()](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentGatewayNotificationRequest.htm#apex_commercepayments_PaymentGatewayNotificationRequest_getHeaders)**  
    Gets HTTP headers from the notification request sent by the payment gateway.
-   **[getRequestBody()](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentGatewayNotificationRequest.htm#apex_commercepayments_PaymentGatewayNotificationRequest_getRequestBody)**  
    Stores the notification request body information from the payment gateway’s notification request.

### getHeaders()

Gets HTTP headers from the notification request sent by the payment gateway.

#### Signature

global Map<String,String\> getHeaders()

#### Return Value

Type: Map<String,String>

### getRequestBody()

Stores the notification request body information from the payment gateway’s notification request.

#### Signature

global Blob getRequestBody()

#### Return Value

Type: [Blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")