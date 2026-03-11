---
title: "BaseApiPaymentMethodRequest Constructors"
domain: apex-reference
topic: baseapipaymentmethodrequest-constructors
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.935Z
keywords: [BaseApiPaymentMethodRequest, Constructors, Constructs, payment, method., constructor, intended, test, usage, throws, exception, used, outside, Apex, context., address, saveForFuture, Signature, Parameters]
---

# BaseApiPaymentMethodRequest Constructors

> Constructs a payment method. This constructor is intended for test
      usage and throws an exception if used outside of the Apex test context.

## BaseApiPaymentMethodRequest Constructors

The following are constructors for BaseApiPaymentMethodRequest.

-   **[BaseApiPaymentMethodRequest(address, id, saveForFuture)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BaseApiPaymentMethodRequest.htm#apex_commercepayments_BaseApiPaymentMethodRequest_ctor)**  
    Constructs a payment method. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

### BaseApiPaymentMethodRequest(address, id, saveForFuture)

Constructs a payment method. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

#### Signature

global BaseApiPaymentMethodRequest(commercepayments.AddressRequest address, String id, Boolean saveForFuture)

#### Parameters

address

Type: [commercepayments.AddressRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AddressRequest.htm#apex_class_commercepayments_AddressRequest "Contains address request data that is sent to a gateway adapter during a service call.")

Sends data related on address request to a gateway adapter during a service call.

id

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

saveForFuture

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Indicates whether Salesforce saves the payment method for future use.