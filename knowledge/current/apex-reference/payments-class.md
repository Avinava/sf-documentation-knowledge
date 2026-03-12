---
title: "Payments Class"
domain: apex-reference
topic: payments-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:18.645Z
estimatedTokens: 2534
namespace: ConnectApi
keywords: [Payments, Authorize, payment., authorize, authorizePayment, API, Version, Requires, Chatter, postAuth, postAuthorizePayment, reverseAuthorization, AuthReversalInput, authorizationId, capture, AuthCaptureInput, refund, ReferencedRefundInput, paymentId, sale]
---

# Payments Class

> Authorize a payment.

**Namespace:** `ConnectApi`

# Payments Class

Authorize a payment, capture an authorized payment, and refund an authorized payment.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## Payments Methods

These methods are for Payments. All methods are static.

To access Payments methods, you need these permissions.

-   Salesforce Order Management License
-   PaymentsAPIUser user permission. This permission is available with the Salesforce Order Management License. Your Salesforce admin assigns it to your profile.

-   **[authorize(authorizePayment)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Payments_static_methods.htm#apex_ConnectAPI_Payments_authorize_1)**
    Authorize a payment.
-   **[postAuth(postAuthorizePayment)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Payments_static_methods.htm#apex_ConnectAPI_Payments_postAuth_1)**
    Confirms that the merchant is ready to capture payment of an existing pre-authorized transaction.
-   **[reverseAuthorization(AuthReversalInput, authorizationId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Payments_static_methods.htm#apex_ConnectAPI_Payments_reverseAuthorization_1)**
    Reverses a payment authorization.
-   **[capture(AuthCaptureInput, authorizationId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Payments_static_methods.htm#apex_ConnectAPI_Payments_capture_1)**
    Capture an authorized payment.
-   **[refund(ReferencedRefundInput, paymentId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Payments_static_methods.htm#apex_ConnectAPI_Payments_refund_1)**
    Refund an authorized payment.
-   **[sale(sale)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Payments_static_methods.htm#apex_ConnectAPI_Payments_sale_1)**
    Captures a payment without any prior authorization and creates a payment entity. The payment sale transaction is a combination of an [Authorize](#apex_ConnectAPI_Payments_authorize_1 "Authorize a payment.") transaction and [Capture](#apex_ConnectAPI_Payments_capture_1 "Capture an authorized payment.") transaction. This payment sale method allows merchants to request that the funds are transferred to the merchant account in a single command, with no further action (such as charging a credit card) from the merchant.
-   **[tokenizePaymentMethod(tokenizePaymentMethodInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Payments_static_methods.htm#apex_ConnectAPI_Payments_tokenizePaymentMethod_1)**
    Method to take the input parameters of the payment method you want to tokenize and then pass them to the payment gateway's tokenization service. The results of the tokenization request are returned as a response from the payment gateway.

### authorize(authorizePayment)

Authorize a payment.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

global static ConnectApi.AuthorizationResponse authorize(ConnectApi.AuthorizationRequest authorizePayment)

#### Parameters

authorizePayment

Type: [ConnectApi.AuthorizationRequest](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_authorization.htm "Payment Authorization input consumed by the Payment Authorization service.")

Represents a payment authorization.

#### Return Value

Type: [ConnectApi.AuthorizationResponse](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_authorization_output.htm "Payment Authorization output representation.")

### postAuth(postAuthorizePayment)

Confirms that the merchant is ready to capture payment of an existing pre-authorized transaction.

#### API Version

54.0

#### Requires Chatter

No

#### Signature

global static ConnectApi.PostAuthorizationResponse postAuth(ConnectApi.PostAuthRequest postAuthorizePayment)

#### Parameters

postAuthorizePayment

Type: [ConnectApi.PostAuthRequest](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_post_auth.htm "Payment post authorization input consumed by the payment post authorization service.")

Information about the payment, payment method, and payment gateway from the original payment authorization.

#### Return Value

Type: [ConnectApi.PostAuthorizationResponse](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_post_auth_output.htm "Gateway response following a post authorization request.")

### reverseAuthorization(AuthReversalInput, authorizationId)

Reverses a payment authorization.

#### API Version

51.0

#### Requires Chatter

No

#### Signature

global static ConnectApi.AuthorizationReversalResponse reverseAuthorization(ConnectApi.AuthorizationReversalRequest AuthReversalInput, String authorizationId)

#### Parameters

AuthReversalInput

Type: [ConnectApi.AuthorizationReversalRequest](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_auth_reversal.htm "Authorization reversal input consumed by authorization reversal service.")

Input information for the payment authorization reversal.

authorizationId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the payment authorization to be reversed.

#### Return Value

Type: [ConnectApi.AuthorizationReversalResponse](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_auth_reversal_output.htm "Authorization Reversal output representation.")

### capture(AuthCaptureInput, authorizationId)

Capture an authorized payment.

#### API Version

50.0

#### Requires Chatter

No

#### Signature

global static ConnectApi.CaptureResponse capture(ConnectApi.CaptureRequest AuthCaptureInput, String authorizationId)

#### Parameters

AuthCaptureInput

Type: [ConnectApi.CaptureRequest](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_capture.htm "Payment capture input consumed by the payment capture service.")

A ConnectApi.CaptureRequest object with information about the payment capture.

authorizationId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the payment authorization. Required.

#### Return Value

Type: [ConnectApi.CaptureResponse](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_capture_output.htm "Capture output.")

### refund(ReferencedRefundInput, paymentId)

Refund an authorized payment.

To access Payments methods, you need these permissions.

-   Salesforce Order Management License
-   PaymentsAPIUser user permission. This permission is available with the Salesforce Order Management License. Your Salesforce admin assigns it to your profile.

#### API Version

50.0

#### Requires Chatter

No

#### Signature

global static ConnectApi.ReferencedRefundResponse refund(ConnectApi.ReferencedRefundRequest ReferencedRefundInput, String paymentId)

#### Parameters

ReferencedRefundInput

Type: [ConnectApi.ReferencedRefundRequest](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_referenced_refund.htm "Referenced refund input.")

A ConnectApi.ReferencedRefundRequest object with information about the refund.

paymentId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the payment to be refunded. Required.

#### Return Value

Type: [ConnectApi.ReferencedRefundResponse](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_refund_service_output.htm "Refund comprehensive output.")

### sale(sale)

Captures a payment without any prior authorization and creates a payment entity. The payment sale transaction is a combination of an [Authorize](#apex_ConnectAPI_Payments_authorize_1 "Authorize a payment.") transaction and [Capture](#apex_ConnectAPI_Payments_capture_1 "Capture an authorized payment.") transaction. This payment sale method allows merchants to request that the funds are transferred to the merchant account in a single command, with no further action (such as charging a credit card) from the merchant.

#### API Version

54.0

#### Requires Chatter

No

#### Signature

global static ConnectApi.SaleResponse sale(ConnectApi.SaleRequest sale)

#### Parameters

sale

Type: [ConnectApi.SaleRequest](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_sale.htm "Payment sale input consumed by the payment sale service.")

Payment sale input class.

#### Return Value

Type: [ConnectApi.SaleResponse](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_sale_output.htm "Payment sale response.")

### tokenizePaymentMethod(tokenizePaymentMethodInput)

Method to take the input parameters of the payment method you want to tokenize and then pass them to the payment gateway's tokenization service. The results of the tokenization request are returned as a response from the payment gateway.

#### API Version

52.0

#### Requires Chatter

No

#### Signature

global static ConnectApi.PaymentMethodTokenizationResponse tokenizePaymentMethod(ConnectApi.PaymentMethodTokenizationRequest tokenizePaymentMethodInput)

#### Parameters

tokenizePaymentMethodInput

Type: [ConnectApi.PaymentMethodTokenizationRequest](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_payment_method_tokenization.htm "Payment method tokenization input consumed by the payment tokenization service.")

Information about the payment method to be tokenized.

#### Return Value

Type: [ConnectApi.PaymentMethodTokenizationResponse](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_payment_method_tokenization_output.htm "Payment method tokenization output representation.")

#### Usage

Accepts input parameters representing a payment method and passes them in a tokenization request to the payment gateway. The results of the tokenization request are returned as a response from the payment gateway. If the tokenization was successful, the response contains the tokenized value and details about the tokenization process. Otherwise, the response contains an error message and details about the error.

#### Example

```

```

## Code Examples

```
ConnectApi.PaymentMethodTokenizationRequest request = new ConnectApi.PaymentMethodTokenizationRequest();
request.paymentGatewayId = ‘0b0xx0000001Ja5AAE’;
ConnectApi.CardPaymentMethodRequest cpmRequest = new ConnectApi.CardPaymentMethodRequest();
cpmRequest.cardHolderName = ‘Jo Manager’;
cpmRequest.expiryMonth = 11;
cpmRequest.expiryYear = 2222;
cpmRequest.cardNumber = ‘4111111111111111’;
cpmRequest.cvv = ‘111’;
cpmRequest.cardCategory = ConnectApi.CardCategory.CreditCard;
cpmRequest.cardType = ConnectApi.CardType.Visa.name();
request.cardPaymentMethod = cpmRequest;
ConnectApi.PaymentMethodTokenizationResponse response = ConnectApi.Payments.tokenizePaymentMethod(request);
```

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- authorize(authorizePayment) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Payments_static_methods.htm)
- postAuth(postAuthorizePayment) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Payments_static_methods.htm)
- reverseAuthorization(AuthReversalInput, authorizationId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Payments_static_methods.htm)
- capture(AuthCaptureInput, authorizationId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Payments_static_methods.htm)
- refund(ReferencedRefundInput, paymentId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Payments_static_methods.htm)
- sale(sale) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Payments_static_methods.htm)
- tokenizePaymentMethod(tokenizePaymentMethodInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_Payments_static_methods.htm)
- ConnectApi.AuthorizationRequest (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_authorization.htm)
- ConnectApi.AuthorizationResponse (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_authorization_output.htm)
