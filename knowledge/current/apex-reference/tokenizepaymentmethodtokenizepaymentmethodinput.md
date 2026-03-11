---
title: "tokenizePaymentMethod(tokenizePaymentMethodInput)"
domain: apex-reference
topic: tokenizepaymentmethodtokenizepaymentmethodinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.516Z
keywords: [tokenizePaymentMethod, tokenizePaymentMethodInput, Method, take, input, parameters, payment, method, want, tokenize, then, pass, gateway's, tokenization, service., results, request, returned, response, gateway.]
---

# tokenizePaymentMethod(tokenizePaymentMethodInput)

> Method to take the input parameters of the payment method you want to
      tokenize and then pass them to the payment gateway's tokenization service. The results of the
      tokenization request are returned as a response from the payment gateway.

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