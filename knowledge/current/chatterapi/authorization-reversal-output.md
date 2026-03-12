---
title: "Authorization Reversal Output"
domain: chatterapi
topic: authorization-reversal-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.296Z
estimatedTokens: 194
keywords: [Authorization, Reversal, Output, representation]
---

# Authorization Reversal Output

> Authorization reversal output representation.

# Authorization Reversal Output

Authorization reversal output representation.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| error | Error Response Output | Error response representation for the authorization reversal. | Big, 51.0 | 51.0 |
| gatewayResponse | Authorization Reversal Gateway Response Output | Gateway response representation for the authorization reversal. | Big, 51.0 | 51.0 |
| paymentAuthAdjustment | Authorization Adjustment Output | Payment authorization adjustment response representation for the authorization reversal. | Big, 51.0 | 51.0 |
| paymentGatewayLogs | Gateway Log Output[] | Gateway log collection representation for the authorization reversal. | Big, 51.0 | 51.0 |

## Related Topics

- Error Response Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_response.htm)
- Authorization Reversal Gateway Response Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_auth_reversal_gateway_response.htm)
- Authorization Adjustment Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_auth_adjustment_output.htm)
- Gateway Log Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_gateway_log_output.htm)
