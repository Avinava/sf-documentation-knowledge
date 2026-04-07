---
title: "Commerce Webstore Order Summaries, Adjustment Aggregates"
domain: chatterapi
topic: commerce-webstore-order-summaries-adjustment-aggregates
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:03:25.610Z
estimatedTokens: 184
keywords: [Commerce, Webstore, Order, Summaries, Adjustment, Aggregates, Submit, job, calculate, summary, IDs]
---

# Commerce Webstore Order Summaries, Adjustment Aggregates

> Submit a job to calculate adjustment aggregates for a list of order
      summary IDs.

# Commerce Webstore Order Summaries, Adjustment Aggregates

Submit a job to calculate adjustment aggregates for a list of order summary IDs.

Resource

```

```

Available version

55.0

HTTP methods

POST

Request body for POST

Root XML tag

<orderSummaryAdjustmentAggregatesAsyncInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| orderSummaryIds | String[] | List of order summary IDs. | Required | 55.0 |

Response body for POST

[Order Summary Adjustment Aggregates Async Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_summary_adjustment_aggregates_async_output.htm "Async adjustment aggregates output.")

## Code Examples

```
/commerce/webstores/webstoreId/order-summaries/async-actions/adjustment-aggregates
```

```
{
"orderSummaryIds": ["1Osxx0000004CDsCAM", "1Osxx0000004CH6CAM"]
}
```

## Related Topics

- Order Summary Adjustment Aggregates Async Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_order_summary_adjustment_aggregates_async_output.htm)
