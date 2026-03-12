---
title: "AuthApiPaymentMethodRequest Class"
domain: apex-reference
topic: authapipaymentmethodrequest-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:22.170Z
estimatedTokens: 995
namespace: CommercePayments
keywords: [AuthApiPaymentMethodRequest, payment, gateway, adapter, authorization, service, call, Usage, cardPaymentMethodRequest, cardPaymentMethod]
---

# AuthApiPaymentMethodRequest Class

> Sends information about a payment method to a gateway adapter during
      an authorization service call.

**Namespace:** `CommercePayments`

# AuthApiPaymentMethodRequest Class

Sends information about a payment method to a gateway adapter during an authorization service call.

## Namespace

[CommercePayments](atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm "Use the CommercePayments namespace to provide a safe and customizable platform for managing customer payments and refunds.")

## Usage

Contains information about the payment method that is used for an authorization request. It contains all available payment methods as fields, but populates only one field for each request. The gateway adapter uses this class when constructing an authorization request. An object of this class is available through the paymentMethod field on the [AuthorizationRequest Class](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthorizationRequest.htm#apex_class_commercepayments_AuthorizationRequest "Sends information about an authorization request to a gateway adapter during a service call. This class extends the BaseRequest class and inherits all its methods.") object.

-   **[AuthApiPaymentMethodRequest Constructors](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthApiPaymentMethodRequest.htm#apex_commercepayments_AuthApiPaymentMethodRequest_constructors)**

-   **[AuthApiPaymentMethodRequest Properties](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthApiPaymentMethodRequest.htm#apex_commercepayments_AuthApiPaymentMethodRequest_properties)**


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

## AuthApiPaymentMethodRequest Properties

The following are properties for AuthApiPaymentMethodRequest.

-   **[cardPaymentMethod](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthApiPaymentMethodRequest.htm#apex_commercepayments_AuthApiPaymentMethodRequest_cardPaymentMethod)**
    The card payment method object used in a payment method request.

### cardPaymentMethod

The card payment method object used in a payment method request.

#### Signature

global commercepayments.CardPaymentMethodRequest cardPaymentMethod {get; set;}

#### Property Value

Type: [commercepayments.CardPaymentMethodRequest](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CardPaymentMethodRequest.htm#apex_class_commercepayments_CardPaymentMethodRequest "Sends data related to a card payment method to a gateway adapter during a service call.")

## Related Topics

- CommercePayments (atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm)
- AuthorizationRequest Class (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthorizationRequest.htm)
- AuthApiPaymentMethodRequest Constructors (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthApiPaymentMethodRequest.htm)
- AuthApiPaymentMethodRequest Properties (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthApiPaymentMethodRequest.htm)
- AuthApiPaymentMethodRequest(cardPaymentMethodRequest) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthApiPaymentMethodRequest.htm)
- AuthApiPaymentMethodRequest() (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthApiPaymentMethodRequest.htm)
- commercepayments.CardPaymentMethodRequest (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CardPaymentMethodRequest.htm)
- cardPaymentMethod (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_AuthApiPaymentMethodRequest.htm)
