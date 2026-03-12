---
title: "Get Eligible Promotions (POST)"
domain: revenue-cloud
topic: get-eligible-promotions-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:06.873Z
estimatedTokens: 269
keywords: [Get, Eligible, Promotions, POST, eligible, promotions, line, items, within, quote, order.]
---

# Get Eligible Promotions (POST)

> Get eligible promotions for line items within a quote or an
      order.

# Get Eligible Promotions (POST)

Get eligible promotions for line items within a quote or an order.

This API accepts line item IDs and sales transaction ID as the input and then initializes the context by filtering on the specific line items.

Resource

```

```

Resource example

```

```

Available version

66.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| lineItemIds | String[] | List of line item IDs to evaluate for promotions. The object type is auto-determined from the sales transaction ID. | Required | 66.0 |
| salesTransactionId | String | The sales transaction ID, such as an order ID or a quote ID, for the promotion evaluation. | Required | 66.0 |

Response body for POST

[Get Eligible Promotions](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_get_eligible_promotions_output.htm "Output representation of the details of the eligible promotions.")

## Code Examples

```
/revenue/transaction-management/sales-transactions/actions/get-eligible-promotions
```

```
https://yourInstance.salesforce.com/services/data/v66.0/revenue/transaction-management/sales-transactions/actions/get-eligible-promotions
```

```
{
  "salesTransactionId": "0Q0xx0000004EOECA2",
  "lineItemIds": [
    "0QLxx0000004E7eGAE",
    "0QLxx0000004GCeGAM",
    "0QLxx0000004E7gGAE"
  ]
}
```

## Related Topics

- Get Eligible
              Promotions (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_get_eligible_promotions_output.htm)
