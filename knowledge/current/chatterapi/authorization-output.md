---
title: "Authorization Output"
domain: chatterapi
topic: authorization-output
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:17.307Z
estimatedTokens: 230
keywords: [Authorization, Output, Payment, representation]
---

# Authorization Output

> Payment authorization output representation.

# Authorization Output

Payment authorization output representation.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| error | Error Response Output | Error representation for Payment Authorization | Big, 49.0 | 49.0 |
| gatewayResponse | Authorization Gateway Response Output | Gateway response representation for payment authorization. | Big, 49.0 | 49.0 |
| paymentAuthorization | Payment Authorization Output | Payment authorization representation. | Big, 49.0 | 49.0 |
| paymentGatewayLogs | Gateway Log Output[] | Gateway log list representation for the payment authorization. | Big, 49.0 | 49.0 |
| paymentGroup | Payment Group Output | Payment group representation for the payment authorization. | Big, 49.0 | 49.0 |
| paymentMethod | Payment Method Output | Payment method representation for the payment authorization. | Big, 49.0 | 49.0 |

## Related Topics

- Error Response Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_response.htm)
- Authorization Gateway Response Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_authorization_gateway_response.htm)
- Payment Authorization Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_payment_authorization_output.htm)
- Gateway Log Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_gateway_log_output.htm)
- Payment Group Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_payment_group.htm)
- Payment Method Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_payment_method_output.htm)
