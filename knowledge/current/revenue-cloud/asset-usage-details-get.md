---
title: "Asset Usage Details (GET)"
domain: revenue-cloud
topic: asset-usage-details-get
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:08.421Z
estimatedTokens: 517
keywords: [Asset, Usage, usage-based, product, associated, covers, grants, resources, configured, rates, including, negotiated, case, rate, override]
---

# Asset Usage Details (GET)

> Get details of a usage-based product associated with an asset. This
      covers details of grants, resources, and configured rates for the product, including
      negotiated rates in case of a rate override.

# Asset Usage Details (GET)

Get details of a usage-based product associated with an asset. This covers details of grants, resources, and configured rates for the product, including negotiated rates in case of a rate override.

Here are the details that this API returns.

-   Grants and resources for the product, if rates aren’t configured.
-   Grants, resources, and any configured rates for the product. The rates are returned by the [Rate Plan (GET) API](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_get_rate_plan.htm "HTML (New Window)").
-   Resources that include grants, if applicable, and any negotiated rates for the product in case of a rate override request.

This API doesn't return binding target rates. Use the [Binding Object Usage Details API](https://developer.salesforce.com/docs/atlas.en-us.260.0.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_resources_retrieve_binding_object_details.htm "HTML (New Window)") to retrieve binding target rates.

Resource

```

```

Resource example

```

```

Available version

63.0

HTTP methods

GET

Path parameter for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| assetId | String | ID of the asset. | Required | 63.0 |

Query parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| effectiveDate | String | Date that's used to search for the applicable rate card entries. | Required | 63.0 |
| optionalFields | String[] | Custom fields that you can use to query these objects.AssetRateCardEntryAssetRateAdjustment | Optional | 63.0 |

Response body for GET

[Usage Details](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_usage_detail_output.htm "Output representation of the usage details of a quote, an order, or an asset.")

## Code Examples

```
/asset-management/assets/assetId/usage-details
```

```
https://yourInstance.salesforce.com/services/data/v66.0/asset-management/assets/02iRM0000000tCdYAI/usage-details
```

## Related Topics

- Usage
            Details (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_usage_detail_output.htm)
