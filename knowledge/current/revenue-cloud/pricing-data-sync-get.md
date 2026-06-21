---
title: "Pricing Data Sync (GET)"
domain: revenue-cloud
topic: pricing-data-sync-get
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-06-21T00:39:51.358Z
estimatedTokens: 283
keywords: [Pricing, Sync, ensure, lookup, tables, contain, latest]
---

> Sync pricing data to ensure that the lookup tables contain the
      latest pricing data.

# Pricing Data Sync (GET)

Sync pricing data to ensure that the lookup tables contain the latest pricing data.

To partially synchronize pricing data, use the Decision Table Refresh Action in a Flow. See [Decision Table Refresh Action](https://developer.salesforce.com/docs/atlas.en-us.262.0.industries_reference.meta/industries_reference/dt_actions_refresh_decision_table.htm "HTML (New Window)").

Resource

```

```

Resource example

```

```

This example shows a sample resource to filter by pricing recipe.

```

```

Available version

60.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| pricing​RecipeId | String | ID of the pricing recipe whose decision tables you want to sync. If not specified, the default pricing recipe is used. | Optional | 67.0 |

Response body for GET

[Pricing Generic Response](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_pricing_generic_response.htm "Output representation of a pricing data sync request.")

## Code Examples

```
/connect/core-pricing/sync/pricingSyncOrigin
```

```
https://yourInstance.salesforce.com/services/data/v67.0/connect/core-pricing/sync/syncData
```

```
https://yourInstance.salesforce.com/services/data/v67.0/connect/core-pricing/sync/syncData?pricingRecipeId=12Gxx0000005IzhEAE
```

## Related Topics

- Pricing Generic
            Response (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_pricing_generic_response.htm)
