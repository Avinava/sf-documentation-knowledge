---
title: "PostAuthorizationRequest
            Class"
domain: apex-reference
topic: postauthorizationrequest-class
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:35.081Z
keywords: [PostAuthorizationRequest, Class, Namespace, Usage]
---

# PostAuthorizationRequest
            Class

# PostAuthorizationRequest Class

Sends information about a postauthorization request to a gateway adapter during a service call.

## Namespace

[CommercePayments](atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm "Use the CommercePayments namespace to provide a safe and customizable platform for managing customer payments and refunds.")

## Usage

This class extends [BaseRequest](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_commercepayments_BaseRequest.htm) and contains information about a transaction postauthorization request. The gateway adapter reads fields from this class to validate the client-side transaction with the payment gateway. An object of this class is available by calling getPaymentRequest() in the [PaymentGatewayContext Class](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentGatewayContext.htm#apex_class_commerce_payments_PaymentGatewayContext "Wraps the information related to a payment request.")).

```

```

-   **[PostAuthorizationRequest Constructors](atlas.en-us.apexref.meta/apexref/apex_commercepayments_PostAuthorizationRequest_constructors.htm)**  
    Lists the constructors for postauthorization requests.
-   **[PostAuthorizationRequest Properties](atlas.en-us.apexref.meta/apexref/apex_commercepayments_PostAuthorizationRequest_properties.htm)**  
    Lists properties for a postauthorizaiton request.