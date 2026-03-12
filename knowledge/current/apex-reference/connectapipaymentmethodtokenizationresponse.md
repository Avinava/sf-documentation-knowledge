---
title: "ConnectApi.PaymentMethodTokenizationResponse"
domain: apex-reference
topic: connectapipaymentmethodtokenizationresponse
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:28.406Z
estimatedTokens: 208
keywords: [Payment, tokenization, output, representation]
---

# ConnectApi.PaymentMethodTokenizationResponse

> Payment method tokenization output representation.

# ConnectApi.PaymentMethodTokenizationResponse

Payment method tokenization output representation.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| error | ConnectApi.​ErrorResponse | Error representation for the payment method tokenization process. Sent only if the tokenization process encounters an error in the gateway. | 52.0 |
| gatewayResponse | ConnectApi.​PaymentMethodTokenization​GatewayResponse | Response containing the tokenized payment method value from the payment gateway. | 52.0 |
| paymentGatewayLogs | List<ConnectApi.​GatewayLogResponse> | Logs showing more details about the tokenization process that occurred in the gateway. | 52.0 |
| paymentMethod | ConnectApi.PaymentMethod​Response | Object representation of the payment method object that was tokenized. | 52.0 |

## Related Topics

- ConnectApi.​ErrorResponse (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_error_response.htm)
- ConnectApi.​PaymentMethodTokenization​GatewayResponse (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_payment_method_tokenization_gateway_response.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​GatewayLogResponse (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_gateway_log_output.htm)
- ConnectApi.PaymentMethod​Response (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_payment_method_output.htm)
