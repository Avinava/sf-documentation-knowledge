---
title: "ConnectApi.PaymentMethodTokenizationResponse"
domain: apex-reference
topic: connectapipaymentmethodtokenizationresponse
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:39.564Z
keywords: [ConnectApi.PaymentMethodTokenizationResponse]
---

# ConnectApi.PaymentMethodTokenizationResponse

# ConnectApi.PaymentMethodTokenizationResponse

Payment method tokenization output representation.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| error | ConnectApi.​ErrorResponse | Error representation for the payment method tokenization process. Sent only if the tokenization process encounters an error in the gateway. | 52.0 |
| gatewayResponse | ConnectApi.​PaymentMethodTokenization​GatewayResponse | Response containing the tokenized payment method value from the payment gateway. | 52.0 |
| paymentGatewayLogs | List<ConnectApi.​GatewayLogResponse> | Logs showing more details about the tokenization process that occurred in the gateway. | 52.0 |
| paymentMethod | ConnectApi.PaymentMethod​Response | Object representation of the payment method object that was tokenized. | 52.0 |