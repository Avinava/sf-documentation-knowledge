---
title: "Payment Method Tokenization Gateway Response Output"
domain: chatterapi
topic: payment-method-tokenization-gateway-response-output
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:20.244Z
estimatedTokens: 267
keywords: [Payment, Tokenization, Gateway, Output, representation]
---

# Payment Method Tokenization Gateway Response Output

> Payment method tokenization gateway response
    representation.

# Payment Method Tokenization Gateway Response Output

Payment method tokenization gateway response representation.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| gatewayAvsCode | String | Code sent by gateways that use an address verification system. | Big, 51.0 | 51.0 |
| gatewayDate | String | The date and time that of the gateway communication that lead to the creation of this gateway log. | Big, 51.0 | 51.0 |
| gatewayMessage | String | Information or error messages sent from the gateway. | Big, 51.0 | 51.0 |
| gatewayResult​Code | String | Gateway-specific result code. Must be mapped to a Salesforce-specific result code. | Big, 51.0 | 51.0 |
| gatewayResult​CodeDescription | String | Description of the gateway’s result code. | Big, 51.0 | 51.0 |
| gatewayToken | String | Payment method token from the payment gateway. | Big, 51.0 | 51.0 |
| salesforceResult​Code | String | Salesforce-specific result code that can map to one or more gateway result codes. | Big, 51.0 | 51.0 |
