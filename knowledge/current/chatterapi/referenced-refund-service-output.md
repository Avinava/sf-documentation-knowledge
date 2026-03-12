---
title: "Referenced Refund Service Output"
domain: chatterapi
topic: referenced-refund-service-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.881Z
estimatedTokens: 186
keywords: [Referenced, Refund, Service, Output, received, part]
---

# Referenced Refund Service Output

> Response received as part of the referenced refund
    service.

# Referenced Refund Service Output

Response received as part of the referenced refund service.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| error | Error Response Output | Error response representation for refund. | Big, 48.0 | 48.0 |
| gatewayResponse | Refund Gateway Response Output | Gateway response received for the refund request processed. | Big, 48.0 | 48.0 |
| paymentGateway​Logs | Gateway Log Output[] | Gateway log collection representation for refund. | Big, 48.0 | 48.0 |
| paymentGroup | Payment Group Output | Payment group associated with refund. | Big, 48.0 | 48.0 |
| refund | Refund Output | Refund response representation. | Big, 48.0 | 48.0 |

## Related Topics

- Error Response Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_response.htm)
- Refund Gateway Response Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_refund_gateway_response.htm)
- Gateway Log Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_gateway_log_output.htm)
- Payment Group Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_payment_group.htm)
- Refund Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_refund_output.htm)
