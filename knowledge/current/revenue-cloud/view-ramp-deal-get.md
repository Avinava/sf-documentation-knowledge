---
title: "View Ramp Deal (GET)"
domain: revenue-cloud
topic: view-ramp-deal-get
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:09.025Z
estimatedTokens: 367
keywords: [View, Ramp, Deal, quote, line, item, order]
---

# View Ramp Deal (GET)

> View a ramp deal related to a quote line item or an order
    item.

# View Ramp Deal (GET)

View a ramp deal related to a quote line item or an order item.

This API request retrieves the segments if the ramp deal already exists.

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

GET

Path parameter for GET

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| resourceId | String | ID of the quote line item, order item, or context. | Required | 62.0 |

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| transaction​Id | String | ID of the quote or order required to hydrate the context and retrieve the quote lines. | Required | 62.0 |
| transaction​LineId | String | ID of the quote or order line required to retrieve the segmented details. | Required | 62.0 |

Response body for GET

[Ramp Deal Service](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_ramp_deal_service_output.htm "Output representation of the details of a created, updated, or deleted ramp deal.")

## Code Examples

```
/connect/revenue-management/sales-transaction-contexts/resourceId/actions/ramp-deal-view
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/revenue-management/sales-transaction-contexts/0QLxx0000004CSOGA2/actions/ramp-deal-view?transactionId=0Q0xx0000004CDxCAM&transactionLineId=0QLxx0000004CSOGA2
```

## Related Topics

- Ramp Deal
              Service (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_ramp_deal_service_output.htm)
