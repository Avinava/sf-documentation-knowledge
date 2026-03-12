---
title: "Pricing Waterfall (GET)"
domain: revenue-cloud
topic: pricing-waterfall-get
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:08.848Z
estimatedTokens: 534
keywords: [Pricing, Waterfall, persisted, price, stores, process, logs, insights, every, step, Advanced]
---

# Pricing Waterfall (GET)

> Get the persisted price waterfall that stores the process logs.
      Price waterfall provides insights into every step of the pricing process.

# Pricing Waterfall (GET)

Get the persisted price waterfall that stores the process logs. Price waterfall provides insights into every step of the pricing process.

If price waterfall persistence is disabled from Salesforce Pricing Setup in your org, this API doesn't return the waterfall details. You can view the waterfall details in the [Pricing API](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_headless.htm "HTML (New Window)") or [Price Context API](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_price_context.htm "HTML (New Window)") response if price waterfall is enabled in Salesforce Pricing Setup.

## Advanced Price Logs

You can set up advanced price logs to capture exception details for complex pricing elements. The API response captures input and output values to trace any exceptions. Refer to the diagnostic data available in the price waterfall details to identify and fix performance issues. See [Advanced Price Logs](https://help.salesforce.com/s/articleView?id=ind.pricing_advanced_price_log_settings.htm&language=en_US "HTML (New Window)").

Resource

```

```

Resource example

```

```

Available version

60.0

HTTP methods

GET

Query parameters

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| tagsTo​Filter | String | Comma-separated tags to filter. | Optional | 61.0 |
| usage​Type | String | Usage type of the waterfall log record. Valid values are:PricingDiscoveryRating—Specifies that the record type is Rating. If this value is specified, the API creates a log of rating waterfall. See Rating Waterfall.The default value is Pricing. | Optional | 62.0 |

Response body for GET

[Line Item Waterfall Response](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_line_item_waterfall_response.htm "Output representation of the line item waterfall response.")

## Code Examples

```
/connect/core-pricing/waterfall/lineItemId/executionId
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/core-pricing/waterfall/Gold/2yHdNNEFOZr9jAe4gHS7?tagsToFilter=UnitPrice
```

## Related Topics

- Line Item Waterfall
            Response (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_line_item_waterfall_response.htm)
