---
title: "SaleApiPaymentMethodRequest Constructors"
domain: apex-reference
topic: saleapipaymentmethodrequest-constructors
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.119Z
keywords: [SaleApiPaymentMethodRequest, Constructors, Sends, data, related, card, payment, method, gateway, adapter, during, sale, service, call., cardPaymentMethodRequest, Signature, Parameters]
---

# SaleApiPaymentMethodRequest Constructors

> Sends data related to a card payment method to a gateway adapter
      during a sale service call.

## SaleApiPaymentMethodRequest Constructors

The following are constructors for SaleApiPaymentMethodRequest.

-   **[SaleApiPaymentMethodRequest(cardPaymentMethodRequest)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleApiPaymentMethodRequest.htm#apex_commercepayments_SaleApiPaymentMethodRequest_ctor)**  
    Sends data related to a card payment method to a gateway adapter during a sale service call.
-   **[SaleApiPaymentMethodRequest()](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SaleApiPaymentMethodRequest.htm#apex_commercepayments_SaleApiPaymentMethodRequest_ctor_2)**  
    Constructor for building a sale payment method request. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

### SaleApiPaymentMethodRequest(cardPaymentMethodRequest)

Sends data related to a card payment method to a gateway adapter during a sale service call.

#### Signature

global SaleApiPaymentMethodRequest(commercepayments.CardPaymentMethodRequest cardPaymentMethodRequest)

#### Parameters

cardPaymentMethodRequest

Type: [CardPaymentMethodRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CardPaymentMethodRequest.htm#apex_class_commercepayments_CardPaymentMethodRequest "Sends data related to a card payment method to a gateway adapter during a service call.")

### SaleApiPaymentMethodRequest()

Constructor for building a sale payment method request. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

#### Signature

global SaleApiPaymentMethodRequest()