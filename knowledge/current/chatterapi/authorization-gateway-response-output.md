---
title: "Authorization Gateway Response Output"
domain: chatterapi
topic: authorization-gateway-response-output
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:17.304Z
estimatedTokens: 360
keywords: [Authorization, Gateway, Output, payment, adapter]
---

# Authorization Gateway Response Output

> Response returned by the payment gateway following an authorization
      request from the payment gateway adapter.

# Authorization Gateway Response Output

Response returned by the payment gateway following an authorization request from the payment gateway adapter.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| gatewayAuthorizationCode | String | Authorization code for the payment gateway. | Big, 49.0 | 49.0 |
| gatewayAvsCode | String | Address verification system used for tokenization in the payment gateway. | Big, 49.0 | 49.0 |
| gatewayDate | String | The date that the payment gateway processed the payment transaction. | Big, 49.0 | 49.0 |
| gatewayMessage | String | Optional method that the payment gateway returns to provide more information on the status of a payment transaction. | Big, 49.0 | 49.0 |
| gatewayReferenceDetails | String | Gateway reference details. | Big, 49.0 | 49.0 |
| gatewayReferenceNumber | String | Gateway reference number. | Big, 49.0 | 49.0 |
| gatewayResultCode | String | Gateway result code. Indicates the result of the gateway processing the payment transaction. Result codes for between different gateway providers. Must be mapped to a Salesforce result code. | Big, 49.0 | 49.0 |
| gatewayResultCodeDescription | String | Provides more information about the result code. | Big, 49.0 | 49.0 |
| salesforceResultCode | String | Salesforce result code. Must be set based on the value of the gateway result code. | Big, 49.0 | 49.0 |
