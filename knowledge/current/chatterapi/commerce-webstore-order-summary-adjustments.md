---
title: "Commerce Webstore Order Summary, Adjustments"
domain: chatterapi
topic: commerce-webstore-order-summary-adjustments
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.422Z
estimatedTokens: 168
keywords: [Commerce, Webstore, Order, Summary, Adjustments]
---

# Commerce Webstore Order Summary, Adjustments

> Get adjustments for an order summary.

# Commerce Webstore Order Summary, Adjustments

Get adjustments for an order summary.

Resource

```

```

Available version

53.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| effective​AccountId | String | ID of the account for which the request is made. If unspecified, defaults to the account ID for the context user. | Optional | 53.0 |

Response body for GET

[Order Summary Adjustment Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_summary_adjustment_collection.htm "Collection of adjustments for an order summary.")

## Code Examples

```
/commerce/webstores/webstoreId/order-summaries/orderSummaryId/adjustments
```

## Related Topics

- Order Summary Adjustment Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_summary_adjustment_collection.htm)
