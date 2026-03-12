---
title: "GatewayErrorResponse Class"
domain: apex-reference
topic: gatewayerrorresponse-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:21.943Z
estimatedTokens: 665
namespace: CommercePayments
keywords: [GatewayErrorResponse, respond, error, indication, following, errors, PaymentGateway, adapter, such, request-forbidden, responses, custom, validation, expired, API, tokens., Usage, Example, errorCode, errorMessage]
---

# GatewayErrorResponse Class

> Use to respond with an error indication following errors from the
        PaymentGateway adapter, such as request-forbidden
      responses, custom validation errors, or expired API tokens.

**Namespace:** `CommercePayments`

# GatewayErrorResponse Class

Use to respond with an error indication following errors from the PaymentGateway adapter, such as request-forbidden responses, custom validation errors, or expired API tokens.

## Namespace

[CommercePayments](atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm "Use the CommercePayments namespace to provide a safe and customizable platform for managing customer payments and refunds.")

## Usage

Use GatewayErrorResponse to create an object that stores information about error responses sent by the payment gateway adapter.

## Example

If GatewayResponse receives an exception rather than a valid request, it calls GatewayErrorResponse to create an error object with information about the exception.

```

```

-   **[GatewayErrorResponse Constructors](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_GatewayErrorResponse.htm#apex_commerce_payments_GatewayErrorResponse_constructors)**


## GatewayErrorResponse Constructors

The following are constructors for GatewayErrorResponse.

-   **[GatewayErrorResponse(errorCode, errorMessage)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_GatewayErrorResponse.htm#apex_commerce_payments_GatewayErrorResponse_ctor)**
    Constructor to create a GatewayErrorResponse object that accepts errorCode and errorMessage.

### GatewayErrorResponse(errorCode, errorMessage)

Constructor to create a GatewayErrorResponse object that accepts errorCode and errorMessage.

#### Signature

global GatewayErrorResponse(String errorCode, String errorMessage)

#### Parameters

errorCode

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Should match with the HTTP status code to be returned to the user. Here are a few examples.

-   If the status code is for a bad request, the errorCode should be 400.
-   If the status code is for a forbidden request, errorCode should be 403.
-   If errorCode isn’t a valid HTTP status code, a 500 internal server error is returned.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

errorCode must have a value, otherwise the platform throws an error.

errorMessage

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The message response to users following an error.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

errorMessage must have a value, otherwise the platform throws an error.

## Code Examples

```apex
global commercepayments.GatewayResponse processRequest(commercepayments.paymentGatewayContext gatewayContext) {
        commercepayments.RequestType requestType = gatewayContext.getPaymentRequestType();
        commercepayments.GatewayResponse response;
        try {
            if (requestType == commercepayments.RequestType.Authorize) {
                response = createAuthResponse((commercepayments.AuthorizationRequest)gatewayContext.getPaymentRequest());
            } else if (requestType == commercepayments.RequestType.Capture) {
                response =  createCaptureResponse((commercepayments.CaptureRequest)gatewayContext.getPaymentRequest()) ;
            } else if (requestType == commercepayments.RequestType.ReferencedRefund) {
                response = createRefundResponse((commercepayments.ReferencedRefundRequest)gatewayContext.getPaymentRequest());
            }
            return response;
        } catch(SalesforceValidationException e) {
             commercepayments.GatewayErrorResponse error = new commercepayments.GatewayErrorResponse('400', e.getMessage());
             return error;
        }
    }
```

## Related Topics

- CommercePayments (atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm)
- GatewayErrorResponse Constructors (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_GatewayErrorResponse.htm)
- GatewayErrorResponse(errorCode, errorMessage) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_GatewayErrorResponse.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
