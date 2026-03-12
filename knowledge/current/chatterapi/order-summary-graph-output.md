---
title: "Order Summary Graph Output"
domain: chatterapi
topic: order-summary-graph-output
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:20.150Z
estimatedTokens: 452
keywords: [Order, Summary, Graph, Output, creating, pending]
---

# Order Summary Graph Output

> Response from creating a pending order summary based on an order
      summary graph.

# Order Summary Graph Output

Response from creating a pending order summary based on an order summary graph.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| error | Error Response Output | Error details, if applicable. | Big, 57.0 | 57.0 |
| httpHeaders | Name Value Pair Output[] | List of name-value pairs representing the graph’s HTTP headers. If the pending order summary is successfully created, the name is Location and the value is the URI of the pending order summary record. For example: /services/data/v57.0/sobjects/PendingOrderSummary/29sxx0000000000AAA | Big, 57.0 | 57.0 |
| orderSummaryGraphId | String | ID of the order summary graph used to create the pending order summary. | Big, 57.0 | 57.0 |
| success | Boolean | Whether the graph was successfully processed. | Big, 57.0 | 57.0 |

#### See Also

-   [Order Summary Graphs Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_summary_graphs_output.htm "Response from creating pending order summaries.")

-   [Pending Order Summaries](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_pending_order_summaries.htm "Create pending order summaries from order summary graphs. The High Scale Orders feature must be active, but a B2C Commerce connection isn’t required. Created pending order summaries are queued for automatic processing into order summaries, the same as pending order summaries ingested from B2C Commerce. The provided JSON example references person accounts, but business accounts are also supported.")

-   [*Salesforce Order Management*: High-Scale Orders](https://help.salesforce.com/s/articleView?id=commerce.om_hi_scale.htm&type=5&language=en_US "Salesforce Order Management: High-Scale Orders - HTML (New Window)")

## Related Topics

- Error Response Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_response.htm)
- Name Value Pair Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_name_value_pair_output.htm)
- Order Summary Graphs Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_summary_graphs_output.htm)
- Pending Order Summaries (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_pending_order_summaries.htm)
