---
title: "Return Order Output"
domain: chatterapi
topic: return-order-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:21.001Z
estimatedTokens: 114
keywords: [Order, Output, representation, created]
---

# Return Order Output

> Output representation of the created Return Order.

# Return Order Output

Output representation of the created Return Order.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Error Response Output[] | Any errors that were returned. | Big, 52.0 | 50.0 |
| returnOrderId | String | A newly created Return Order ID | Big, 50.0 | 50.0 |
| success | Boolean | Indicates whether the transaction was successful. | Big, 52.0 | 50.0 |

## Related Topics

- Error Response Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_response.htm)
