---
title: "Commerce Webstore Order Summary"
domain: chatterapi
topic: commerce-webstore-order-summary
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.431Z
estimatedTokens: 392
keywords: [Commerce, Webstore, Order, Summary]
---

# Commerce Webstore Order Summary

> Get an order summary.

# Commerce Webstore Order Summary

Get an order summary. This API is available only to registered users.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

We recommend using the enhanced [Commerce Webstore Order Summary Lookup](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_order_summary_lookup.htm "Look up details about an order summary, including its line items and relevant order amount fields. This API is available to both registered and guest users.") API, which is accessible to both registered and guest users.

Resource

```

```

Available version

55.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| effectiveAccount​Id | String | ID of the account for which the request is made. If unspecified, defaults to the account ID for the context user. | Optional | 55.0 |
| fields | String[] | List of up to 35 additional order summary fields to display in the UI in each item row.These order summary fields are returned regardless of fields specified.createdDateorderSummaryIdorderNumberorderedDateownerIdstatustotalAmount | Optional | 55.0 |
| include​Adjustment​Details | Boolean | Specifies whether to return adjustment details (true) or not (false). If unspecified, the default value is false. | Optional | 55.0 |

Response body for GET

[Order Summary](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_summary.htm "Order summary information.")

## Code Examples

```
/commerce/webstores/webstoreId/order-summaries/orderSummaryId
```

## Related Topics

- Commerce Webstore Order Summary Lookup (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_commerce_webstore_order_summary_lookup.htm)
- Order Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_summary.htm)
