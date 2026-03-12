---
title: "Object Input"
domain: chatterapi
topic: object-input
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:12.283Z
estimatedTokens: 371
keywords: [Input, graph, node]
---

# Object Input

> A graph node.

# Object Input

A graph node.

Root XML tag

<object>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| attributes | Map<String, Object> | The properties of the node body. | Required | 57.0 |
| referenceId | String | The reference ID of the node. | Required | 57.0 |

#### See Also

-   [Order Summary Graph Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_order_summary_graph_input.htm "Graph containing the details of an order summary and supporting records.")

-   [Order Summary Graphs Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_order_summary_graphs_input.htm "List of graphs containing order summary data.")

-   [Pending Order Summaries](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_pending_order_summaries.htm "Create pending order summaries from order summary graphs. The High Scale Orders feature must be active, but a B2C Commerce connection isn’t required. Created pending order summaries are queued for automatic processing into order summaries, the same as pending order summaries ingested from B2C Commerce. The provided JSON example references person accounts, but business accounts are also supported.")

-   [*Salesforce Order Management*: High-Scale Orders](https://help.salesforce.com/s/articleView?id=commerce.om_hi_scale.htm&type=5&language=en_US "Salesforce Order Management: High-Scale Orders - HTML (New Window)")

## Code Examples

```
{
  "attributes": {
    "attributes": {
      "type": "Account"
    },
    "RecordTypeId": "012xx0000005zmmAAA",
    "Name": "John Smith",
    "Phone": "(111)-111-1111"
  },
  "referenceId": "refAccount"
},
```

## Related Topics

- Order Summary Graph Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_order_summary_graph_input.htm)
- Order Summary Graphs Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_order_summary_graphs_input.htm)
- Pending Order Summaries (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_pending_order_summaries.htm)
