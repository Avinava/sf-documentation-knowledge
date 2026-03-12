---
title: "Post Auth Gateway Response"
domain: chatterapi
topic: post-auth-gateway-response
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:20.359Z
estimatedTokens: 339
keywords: [Post, Auth, Gateway, authorization, payment]
---

# Post Auth Gateway Response

> Post authorization payment gateway response.

# Post Auth Gateway Response

Post authorization payment gateway response.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| gatewayAuthorizationCode | String | Code used with the authorization request in the payment gateway. | Big, 54.0 | 54.0 |
| gatewayAvsCode | String | Code sent by gateways that use an address verification system. | Big, 54.0 | 54.0 |
| gatewayDate | String | The date and time of the gateway communication that leads to the creation of this gateway log. | Big, 54.0 | 54.0 |
| gatewayMessage | String | Information or error messages sent from the gateway. | Big, 54.0 | 54.0 |
| gatewayReference​Details | String | Gateway reference details. | Big, 54.0 | 54.0 |
| gatewayReference​Number | String | Unique transaction ID created by the payment gateway. | Big, 54.0 | 54.0 |
| gatewayResult​Code | String | Gateway-specific result code. Must be mapped to a Salesforce-specific result code. | Big, 54.0 | 54.0 |
| gatewayResult​CodeDescription | String | Description of the gateway’s result code. | Big, 54.0 | 54.0 |
| paymentMethod​Details | Payment Method Details | Details about the payment method. | Big, 56.0 | 56.0 |
| salesforceResult​Code | String | Salesforce-specific result code that can map to one or more gateway result codes. | Big, 54.0 | 54.0 |

## Related Topics

- Payment Method Details (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_payment_method_details.htm)
