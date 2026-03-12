---
title: "Refund Gateway Response Output"
domain: chatterapi
topic: refund-gateway-response-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.884Z
estimatedTokens: 283
keywords: [Refund, Gateway, Output, representation]
---

# Refund Gateway Response Output

> Refund gateway response representation.

# Refund Gateway Response Output

Refund gateway response representation.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| gatewayAvsCode | String | Code sent by gateways that use an address verification system. | Big, 48.0 | 48.0 |
| gatewayDate | String | The date and time that of the gateway communication that lead to the creation of this gateway log. | Big, 48.0 | 48.0 |
| gatewayMessage | String | Information or error messages sent from the gateway. | Big, 48.0 | 48.0 |
| gatewayReference​Details | String | Gateway reference details. | Big, 48.0 | 48.0 |
| gatewayReference​Number | String | Unique transaction ID created by the payment gateway. | Big, 48.0 | 48.0 |
| gatewayResult​Code | String | Gateway-specific result code. Must be mapped to a Salesforce-specific result code. | Big, 48.0 | 48.0 |
| gatewayResult​CodeDescription | String | Description of the gateway’s result code. | Big, 48.0 | 48.0 |
| salesforceResult​Code | String | Salesforce-specific result code that can map to one or more gateway result codes. | Big, 48.0 | 48.0 |
