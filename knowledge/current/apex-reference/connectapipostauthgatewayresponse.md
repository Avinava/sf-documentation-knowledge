---
title: "ConnectApi.PostAuthGatewayResponse"
domain: apex-reference
topic: connectapipostauthgatewayresponse
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:28.461Z
estimatedTokens: 176
keywords: [ConnectApi.PostAuthGatewayResponse, Gateway, confirmation, merchant, ready, capture, payment, pre-authorized, transaction]
---

# ConnectApi.PostAuthGatewayResponse

> Gateway response after confirmation that the merchant is ready to capture
      payment of an existing pre-authorized transaction.

# ConnectApi.PostAuthGatewayResponse

Gateway response after confirmation that the merchant is ready to capture payment of an existing pre-authorized transaction.

Sublass of [ConnectApi.AbstractGatewayResponse](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_gateway_txn_response.htm "Payment gateway response fields used in sale, authorization, and capture services.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| gateway​AuthorizationCode | String | Code used to authorize the payment that the payment gateway is processing. | 54.0 |
| paymentMethod​Details | ConnectApi.​PaymentMethod​Details | Details about the payment method. | 54.0 |

## Related Topics

- ConnectApi.AbstractGatewayResponse (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_gateway_txn_response.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​PaymentMethod​Details (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_payment_method_details.htm)
