---
title: "Pricing Versioned Revision Details Input"
domain: revenue-cloud
topic: pricing-versioned-revision-details-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:06.293Z
estimatedTokens: 353
keywords: [Pricing, Versioned, Revision, Details, Input, representation, versioned, revision, details.]
---

# Pricing Versioned Revision Details Input

> Input representation of the versioned revision details.

# Pricing Versioned Revision Details Input

Input representation of the versioned revision details.

JSON example

This example shows the input for versioned revision details for attribute-based adjustment.

```

```

This example shows the input for versioned revision details for bundle-based adjustment.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| additional​Fields​ToValue​Map | Map<String, String> | Map containing the additional fields specific to the entity. | Optional | 60.0 |
| adjustment​Type | String | Adjustment type such as, percentage, amount, or override. | Required | 60.0 |
| adjustment​Value | String | Value for the adjustment. | Required | 60.0 |
| effective​From | String | Date from when the adjustment is effective. | Required | 60.0 |
| effective​To | String | Date until when the adjustment is effective. | Optional | 60.0 |
| entity​Name | String | Name of the entity such as AttributeBasedAdjustment entity or BundleBasedAdjustment entity. | Required | 60.0 |
| id | String | ID of the record. | Required | 60.0 |
| price​Adjustment​ScheduleId | String | ID of the price adjustment schedule record. | Required | 60.0 |
| productId | String | Product ID of the record. | Required | 60.0 |
| product​Selling​ModelId | String | Product selling model ID associated to the record. | Optional | 60.0 |

## Code Examples

```
{
        "entityName":"AttributeBasedAdjustment",
        "id":"entityId",
        "priceAdjustmentId":"priceAdjustmentScheduleId",
        "productId":"ProductId",
        "productSellingModelId":"PsmId",
        "adjustmentType":"AdjustmentType",
        "adjustmentValue":"AdjustmentValue(Numeric)"",
        "effectiveFrom":"EffectiveFrom date",
        "effectiveTo":"EffectiveTo Date",
        "additionalFieldsToValueMap":{
        "attributeBasedAdjRuleId":"AttributeBasedAdjRuleId"
}
}
```

```
{
        "entityName": "BundleBasedAdjustment",
        "id": "entityId",
        "priceAdjustmentScheduleId": "priceAdjustmentScheduleId",
        "productId": "ProductId",
        "productSellingModelId": "PsmId",
        "adjustmentType": "AdjustmentType",
        "adjustmentValue": "AdjustmentValue(Numeric)",
        "effectiveFrom":"EffectiveFrom date",
        "effectiveTo":"EffectiveTo Date",
        "additionalFieldsToValueMap": {
          "rootBundleId": "RootBundleId",
          "parentProductId": "ParentProductId"
        }
 }
```
