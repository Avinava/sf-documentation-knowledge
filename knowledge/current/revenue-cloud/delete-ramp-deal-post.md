---
title: "Delete Ramp Deal (POST)"
domain: revenue-cloud
topic: delete-ramp-deal-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:08.608Z
estimatedTokens: 440
keywords: [Ramp, Deal, POST, convert, ramped, product, include, quote, line, item, order]
---

# Delete Ramp Deal (POST)

> Delete a ramp deal to convert a ramped product to include a single
      quote line item or order item.

# Delete Ramp Deal (POST)

Delete a ramp deal to convert a ramped product to include a single quote line item or order item.

This API request deletes the segments related to the product. The API response includes the updated context with the context ID. You must call the Place Sales Transaction (POST) API by specifying this context ID to apply the ramp deal updates. See [Place Sales Transaction (POST) API](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_place_sales_transaction.htm "HTML (New Window)").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=revenue_lifecycle_management_dev_guide)

#### Note

This API is applicable when you're working with line ramps. To work with ramp deals for groups, you must use the Place Sales Transaction API and specify the groupRampActions property.

Resource

```

```

Resource example

```

```

Available version

62.0

HTTP methods

POST

Path parameter for POST

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| resourceId | String | ID of the context. | Required | 62.0 |

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| rampDeal​Ids | String[] | Ramp identifier on the quote line item or order item. | Required | 62.0 |

Response body for POST

[Ramp Deal Service](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_ramp_deal_service_output.htm "Output representation of the details of a created, updated, or deleted ramp deal.")

## Code Examples

```
/connect/revenue-management/sales-transaction-contexts/resourceId/actions/ramp-deal-delete
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/revenue-management/sales-transaction-contexts/0QLxx0000004CfIGAU/actions/ramp-deal-delete
```

```
{
  "rampDealIds": [
    "0Q0xx0000004CDxCAM",
    "0QLxx0000004CSOGA2"
  ]
}
```

## Related Topics

- Ramp Deal
              Service (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_ramp_deal_service_output.htm)
