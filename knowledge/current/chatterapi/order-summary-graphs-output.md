---
title: "Order Summary Graphs Output"
domain: chatterapi
topic: order-summary-graphs-output
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:20.153Z
estimatedTokens: 325
keywords: [Order, Summary, Graphs, Output, creating, pending, summaries]
---

# Order Summary Graphs Output

> Response from creating pending order summaries.

# Order Summary Graphs Output

Response from creating pending order summaries.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| error | Error Response Output | Error details, if applicable. | Big, 57.0 | 57.0 |
| orderSummaryGraphsResults | Order Summary Graph Output[] | List of processing results for the order summary graphs in the request. | Big, 57.0 | 57.0 |
| success | Boolean | Whether the order summary graphs were successfully processed. | Big, 57.0 | 57.0 |

#### See Also

-   [Pending Order Summaries](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_pending_order_summaries.htm "Create pending order summaries from order summary graphs. The High Scale Orders feature must be active, but a B2C Commerce connection isn’t required. Created pending order summaries are queued for automatic processing into order summaries, the same as pending order summaries ingested from B2C Commerce. The provided JSON example references person accounts, but business accounts are also supported.")

-   [*Salesforce Order Management*: High-Scale Orders](https://help.salesforce.com/s/articleView?id=commerce.om_hi_scale.htm&type=5&language=en_US "Salesforce Order Management: High-Scale Orders - HTML (New Window)")

## Related Topics

- Error Response Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_response.htm)
- Order Summary Graph Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_summary_graph_output.htm)
- Pending Order Summaries (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_pending_order_summaries.htm)
