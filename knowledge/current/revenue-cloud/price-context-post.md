---
title: "Price Context (POST)"
domain: revenue-cloud
topic: price-context-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:08.830Z
estimatedTokens: 312
keywords: [Price, Context, POST, Perform, pricing, instance]
---

# Price Context (POST)

> Perform a pricing request by using the instance ID of a
      context.

# Price Context (POST)

Perform a pricing request by using the instance ID of a context.

If price waterfall is disabled from Salesforce Pricing Setup in your org, this API doesn't return the waterfall details. You can use the [Price Waterfall API](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_pricing_waterfall_fetch.htm "HTML (New Window)") to retrieve the waterfall details if price waterfall persistence is enabled in Salesforce Pricing Setup.

Resource

```

```

Resource example

```

```

Available version

60.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| configuration​Overrides | Configuration Override Input | Parameters to override pricing configuration. | Optional | 60.0 |
| procedure​Name | String | Name of the pricing procedure. | Optional | 60.0 |

Response body for POST

[Pricing Response](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_pricing_response.htm "Output representation of the pricing request.")

## Code Examples

```
/connect/core-pricing/price-contexts/contextid
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/core-pricing/price-contexts/0U3RM00000000SR0AY
```

```
{
    "configurationOverrides": {
       "skipWaterfall": true,
       "useSessionScopedContext": true,
       "persistContext": true,
       "taggedData": false
    }
    "procedureName": "ES1"
}
```

## Related Topics

- Configuration Override Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_configuration_override_input.htm)
- Pricing Response (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_pricing_response.htm)
