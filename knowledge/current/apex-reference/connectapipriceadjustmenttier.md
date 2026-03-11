---
title: "ConnectApi.PriceAdjustmentTier"
domain: apex-reference
topic: connectapipriceadjustmenttier
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.626Z
keywords: [ConnectApi.PriceAdjustmentTier, See]
---

# ConnectApi.PriceAdjustmentTier

# ConnectApi.PriceAdjustmentTier

Price adjustment tier.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| adjustmentType | ConnectApi.​PriceAdjustment​TierType | Type of price adjustment for the tier. Values are:AmountBasedAdjustment—Price is adjusted by a specified amount.PercentageBasedAdjustment—Price is adjusted by a specified percentage. | 49.0 |
| adjustmentValue | String | Adjustment value of the tier. | 49.0 |
| id | String | ID of the price adjustment tier. | 49.0 |
| lowerBound | String | Lower limit of the tier. | 49.0 |
| tierUnitPrice | String | Unit price of the tier. | 49.0 |
| upperBound | String | Upper limit of the tier. | 49.0 |

#### See Also

-   [ConnectApi.PriceAdjustmentSchedule](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_price_adjustment_schedule.htm "Price adjustment schedule.")