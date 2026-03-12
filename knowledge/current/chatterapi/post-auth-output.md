---
title: "Post Auth Output"
domain: chatterapi
topic: post-auth-output
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:20.362Z
estimatedTokens: 287
keywords: [Post, Auth, Output, Payment, authorization]
---

# Post Auth Output

> Payment post authorization output.

# Post Auth Output

Payment post authorization output.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| error | Error Response Output | Information about errors that occurred in the payment gateway while evaluating the post authorization request. | Big, 54.0 | 54.0 |
| gatewayResponse | Post Auth Gateway Response | Payment gateway's response to the post authorization request. | Big, 54.0 | 54.0 |
| paymentAuthorization | Payment Authorization Output | Payment gateway's response to the original payment authorization request. | Big, 54.0 | 54.0 |
| paymentGatewayLogs | Gateway Log Output[] | Stores information exchanged between the Salesforce payments platform and external payment gateways. Gateway logs can also record payloads from external payment entities. | Big, 54.0 | 54.0 |
| paymentGroup | Payment Group Output | Payment group, consisting of one or more payments, sent to the gateway for the post authorization request. | Big, 54.0 | 54.0 |
| paymentMethod | Payment Method Output | Payment method used in the post authorization request. | Big, 54.0 | 54.0 |

## Related Topics

- Error Response Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_response.htm)
- Post Auth Gateway Response (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_post_auth_gateway_response.htm)
- Payment Authorization Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_payment_authorization_output.htm)
- Gateway Log Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_gateway_log_output.htm)
- Payment Group Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_payment_group.htm)
- Payment Method Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_payment_method_output.htm)
