---
title: "Sale Gateway Response"
domain: chatterapi
topic: sale-gateway-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:22.885Z
estimatedTokens: 293
keywords: [Sale, Gateway, payment, gateway's, processing]
---

> Contains information about the payment gateway's processing of the
      payment sale request.

# Sale Gateway Response

Contains information about the payment gateway's processing of the payment sale request.

| Property Name | Type | Description | Available Version |  |
| --- | --- | --- | --- | --- |
| gatewayAvsCode | String | Code sent by gateways that use an address verification system. | Big, 54.0 | 54.0 |
| gatewayDate | String | The date and time that of the gateway communication that lead to the creation of this gateway log. | Big, 54.0 | 54.0 |
| gatewayMessage | String | Information or error messages sent from the gateway. | Big, 54.0 | 54.0 |
| gatewayReferenceDetails | String | Provides information about the gateway communication. | Big, 54.0 | 54.0 |
| gatewayReferenceNumber | String | Unique transaction ID created by the payment gateway. | Big, 54.0 | 54.0 |
| gatewayResult​Code | String | Gateway-specific result code. Must be mapped to a Salesforce-specific result code. | Big, 54.0 | 54.0 |
| gatewayResult​CodeDescription | String | Description of the gateway’s result code. | Big, 54.0 | 54.0 |
| salesforceResult​Code | String | Salesforce-specific result code that can map to one or more gateway result codes. | Big, 54.0 | 54.0 |
