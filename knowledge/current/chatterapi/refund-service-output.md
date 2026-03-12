---
title: "Refund Service Output"
domain: chatterapi
topic: refund-service-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.897Z
estimatedTokens: 178
keywords: [Refund, Service, Output, comprehensive, representation]
---

# Refund Service Output

> Refund comprehensive output representation.

# Refund Service Output

Refund comprehensive output representation.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| error | ConnectApi.ErrorResponse | Error response representation for a refund. | Big, 49.0 | 49.0 |
| gatewayResponse | Refund Gateway Response Output | Gateway response representation for a refund. | Big, 49.0 | 49.0 |
| paymentGatewayLogs | Gateway Log Output[] | Gateway log collection representation for a refund. | Big, 49.0 | 49.0 |
| paymentGroup | Payment Group Output | Payment group associated with a refund. | Big, 49.0 | 49.0 |
| refund | Refund Output | Refund response representation. | Big, 49.0 | 49.0 |

## Related Topics

- ConnectApi.ErrorResponse (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_response.htm)
- Refund Gateway Response Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_refund_gateway_response.htm)
- Gateway Log Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_gateway_log_output.htm)
- Payment Group Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_payment_group.htm)
- Refund Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_refund_output.htm)
