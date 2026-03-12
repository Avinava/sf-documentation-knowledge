---
title: "ConnectApi.PaymentMethodTokenizationRequest"
domain: apex-reference
topic: connectapipaymentmethodtokenizationrequest
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:25.535Z
estimatedTokens: 285
keywords: [Payment, tokenization, input, consumed, service]
---

# ConnectApi.PaymentMethodTokenizationRequest

> Payment method tokenization input consumed by the payment tokenization
      service.

# ConnectApi.PaymentMethodTokenizationRequest

Payment method tokenization input consumed by the payment tokenization service.

Subclass of [ConnectApi.BaseRequest](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_gateway_callable_base.htm "Base parameters for making a request to the payment gateway.").

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| address | ConnectApi.​AddressRequest | Address of the payment method. | Required | 52.0 |
| bankPayment​Method | ConnectApi.​BankPayment​MethodRequest | Object representation of the bank payment method. | Required, if cardPaymentMethod isn't provided. | 65.0 |
| cardPayment​Method | ConnectApi.​CardPayment​MethodRequest | Object representation of the card payment method. | Required, if bankPaymentMethod isn't provided. | 52.0 |
| paymentGatewayId | String | ID of the card payment method's payment gateway. | Required | 52.0 |
| savedByMerchant | Boolean | Indicates whether the payment method tokenization is configured to be saved by merchant (true) or not (false). Default value is false. | Optional | 62.0 |

## Related Topics

- ConnectApi.BaseRequest (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_gateway_callable_base.htm)
- ConnectApi.​AddressRequest (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_address.htm)
- ConnectApi.​BankPayment​MethodRequest (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_bank_payment_method.htm)
- ConnectApi.​CardPayment​MethodRequest (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_card_payment_method.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
