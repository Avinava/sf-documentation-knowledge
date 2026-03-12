---
title: "Rating Waterfall (GET)"
domain: revenue-cloud
topic: rating-waterfall-get
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:07.142Z
estimatedTokens: 252
keywords: [Rating, Waterfall, GET, Get, persisted, rating, waterfall, stores, process, logs., provides, insights, internal, process.]
---

# Rating Waterfall (GET)

> Get the persisted rating waterfall that stores the process logs.
      Rating waterfall provides insights into the internal rating process.

# Rating Waterfall (GET)

Get the persisted rating waterfall that stores the process logs. Rating waterfall provides insights into the internal rating process.

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

Query parameters

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| tagsTo​Filter | String | Comma-separated tags to filter. | Optional | 62.0 |
| usage​Type | String | Usage type of the waterfall log record. Valid values are:RatingPricing—Specifies that the record type is Pricing. If this value is specified, the API creates a log of pricing waterfall. See Pricing Waterfall.The default value is Pricing. | Optional | 62.0 |

Response body for GET

[Line Item Waterfall Response](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_rating_line_item_waterfall_response.htm "Output representation of the line item waterfall response.")

## Code Examples

```
/connect/core-pricing/waterfall/lineItemId/executionId
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/core-pricing/waterfall/Gold/2yHdNNEFOZr9jAe4gHS7?tagsToFilter=UnitPrice&usageType=Rating
```

## Related Topics

- Line Item Waterfall
            Response (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_rating_line_item_waterfall_response.htm)
