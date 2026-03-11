---
title: "PaymentMethodTokenizationRequest Constructors"
domain: apex-reference
topic: paymentmethodtokenizationrequest-constructors
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.058Z
keywords: [PaymentMethodTokenizationRequest, Constructors, Payment, gateway, constructor, used, paymentMethodTokenizationRequest., intended, test, usage, throws, exception, outside, Apex, context., paymentGatewayId, Signature, Parameters]
---

# PaymentMethodTokenizationRequest Constructors

> Payment gateway ID constructor used with paymentMethodTokenizationRequest. This constructor is
      intended for test usage and throws an exception if used outside of the Apex test
    context.

## PaymentMethodTokenizationRequest Constructors

The following are constructors for PaymentMethodTokenizationRequest.

-   **[PaymentMethodTokenizationRequest(paymentGatewayId)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodTokenizationRequest.htm#apex_commercepayments_PaymentMethodTokenizationRequest_ctor)**  
    Payment gateway ID constructor used with paymentMethodTokenizationRequest. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.
-   **[PaymentMethodTokenizationRequest()](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentMethodTokenizationRequest.htm#apex_commercepayments_PaymentMethodTokenizationRequest_ctor_2)**  
    The following are constructors for PaymentMethodTokenizationRequest.

### PaymentMethodTokenizationRequest(paymentGatewayId)

Payment gateway ID constructor used with paymentMethodTokenizationRequest. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

#### Signature

global PaymentMethodTokenizationRequest(String paymentGatewayId)

#### Parameters

paymentGatewayId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The payment method’s payment gateway ID that will be tokenized.

### PaymentMethodTokenizationRequest()

The following are constructors for PaymentMethodTokenizationRequest.

#### Signature

global PaymentMethodTokenizationRequest()