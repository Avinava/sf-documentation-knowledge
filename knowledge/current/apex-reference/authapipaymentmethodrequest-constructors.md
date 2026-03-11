---
title: "AuthApiPaymentMethodRequest Constructors"
domain: apex-reference
topic: authapipaymentmethodrequest-constructors
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.831Z
keywords: [AuthApiPaymentMethodRequest, Constructors, Constructs, sample, cardPaymentMethodRequest., constructor, intended, test, usage, throws, exception, used, outside, Apex, context., cardPaymentMethodRequest, Signature, Parameters]
---

# AuthApiPaymentMethodRequest Constructors

> Constructs a sample cardPaymentMethodRequest. This constructor is intended for test usage and throws
      an exception if used outside of the Apex test context.

## AuthApiPaymentMethodRequest Constructors

The following are constructors for AuthApiPaymentMethodRequest.

-   **[AuthApiPaymentMethodRequest(cardPaymentMethodRequest)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthApiPaymentMethodRequest.htm#apex_commercepayments_AuthApiPaymentMethodRequest_ctor)**  
    Constructs a sample cardPaymentMethodRequest. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.
-   **[AuthApiPaymentMethodRequest()](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthApiPaymentMethodRequest.htm#apex_commercepayments_AuthApiPaymentMethodRequest_ctor_2)**  
    Constructor for AuthApiPaymentMethodRequest.

### AuthApiPaymentMethodRequest(cardPaymentMethodRequest)

Constructs a sample cardPaymentMethodRequest. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

#### Signature

global AuthApiPaymentMethodRequest(commercepayments.CardPaymentMethodRequest cardPaymentMethodRequest)

#### Parameters

cardPaymentMethodRequest

Type: [commercepayments.CardPaymentMethodRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CardPaymentMethodRequest.htm#apex_class_commercepayments_CardPaymentMethodRequest "Sends data related to a card payment method to a gateway adapter during a service call.")

Contains information about the card payment method. Used to send information to a gateway adapter during a service call.

### AuthApiPaymentMethodRequest()

Constructor for AuthApiPaymentMethodRequest.

#### Signature

global AuthApiPaymentMethodRequest()