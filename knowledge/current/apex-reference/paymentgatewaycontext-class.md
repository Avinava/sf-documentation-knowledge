---
title: "PaymentGatewayContext Class"
domain: apex-reference
topic: paymentgatewaycontext-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:22.371Z
estimatedTokens: 759
namespace: CommercePayments
keywords: [PaymentGatewayContext, Wraps, payment, Usage, requestType, getPaymentRequest, getPaymentRequestType]
---

# PaymentGatewayContext Class

> Wraps the information related to a payment request.

**Namespace:** `CommercePayments`

# PaymentGatewayContext Class

Wraps the information related to a payment request.

## Namespace

[CommercePayments](atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm "Use the CommercePayments namespace to provide a safe and customizable platform for managing customer payments and refunds.")

## Usage

The constructor of this class takes no arguments. For example:

CommercePayments.PaymentGatewayContext pgc = new CommercePayments.PaymentGatewayContext();

## Example

```

```

-   **[PaymentGatewayContext Constructors](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentGatewayContext.htm#apex_commerce_payments_PaymentGatewayContext_constructors)**

-   **[PaymentGatewayContext Methods](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentGatewayContext.htm#apex_commerce_payments_PaymentGatewayContext_methods)**


## PaymentGatewayContext Constructors

The following are constructors for PaymentGatewayContext.

-   **[PaymentGatewayContext(request, requestType)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentGatewayContext.htm#apex_commerce_payments_PaymentGatewayContext_ctor)**
    Constructor to enable instance creation. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

### PaymentGatewayContext(request, requestType)

Constructor to enable instance creation. This constructor is intended for test usage and throws an exception if used outside of the Apex test context.

#### Signature

global PaymentGatewayContext(commercepayments.PaymentGatewayRequest request, String requestType)

#### Parameters

request

Type: commercepayments.PaymentGatewayRequest

Raw payload. Sensitive attributes are masked to ensure PCI compliance.

requestType

Type: [commercepayments.RequestType Enum](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_enum_commercepayments_RequestType.htm)

Defines the type of request made to the gateway

## PaymentGatewayContext Methods

The following are methods for PaymentGatewayContext.

-   **[getPaymentRequest()](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentGatewayContext.htm#apex_commerce_payments_PaymentGatewayContext_getPaymentRequest)**
    Returns the payment request object.
-   **[getPaymentRequestType()](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentGatewayContext.htm#apex_commerce_payments_PaymentGatewayContext_getPaymentRequestType)**
    Returns the payment request type.

### getPaymentRequest()

Returns the payment request object.

#### Signature

global commercepayments.PaymentGatewayRequest getPaymentRequest()

#### Return Value

Type: PaymentGatewayRequest

### getPaymentRequestType()

Returns the payment request type.

#### Signature

global String getPaymentRequestType()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## Code Examples

```apex
global commercepayments.GatewayResponse processRequest(commercepayments.PaymentGatewayContext gatewayContext) {
    commercepayments.RequestType requestType = gatewayContext.getPaymentRequestType();
    if (requestType == commercepayments.RequestType.Capture) {
        commercepayments.CaptureRequest captureRequest = (commercepayments.CaptureRequest) gatewayContext.getPaymentRequest();
    }
}
```

## Related Topics

- CommercePayments (atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm)
- PaymentGatewayContext Constructors (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentGatewayContext.htm)
- PaymentGatewayContext Methods (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentGatewayContext.htm)
- PaymentGatewayContext(request, requestType) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentGatewayContext.htm)
- getPaymentRequest() (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentGatewayContext.htm)
- getPaymentRequestType() (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_PaymentGatewayContext.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
