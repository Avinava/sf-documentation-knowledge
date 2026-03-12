---
title: "FrcstCustmzOwnerAdjustment"
domain: sfFieldRef
topic: frcstcustmzowneradjustment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:58.658Z
estimatedTokens: 472
keywords: [FrcstCustmzOwnerAdjustment, individual, forecast, user’s, adjustment, their, own, consumption, API, version, 63.0, later, different, ForecastingOwnerAdjustment, users’]
---

# FrcstCustmzOwnerAdjustment

> Represents an individual forecast user’s adjustment of their own consumption
         forecast.  Available in API version 63.0 and later. This object is different from the
      ForecastingOwnerAdjustment object, which represents users’ adjustments of their pipeline
      forecasts.

# FrcstCustmzOwnerAdjustment

Represents an individual forecast user’s adjustment of their own consumption forecast. Available in API version 63.0 and later. This object is different from the ForecastingOwnerAdjustment object, which represents users’ adjustments of their pipeline forecasts.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [FrcstCustmzOwnerAdjustment](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_frcstcustmzowneradjustment.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AdjustedAmount | Adjusted Amount | currency |  |  | 18 | 0 |
| AdjustedQuantity | Adjusted Quantity | double |  |  | 12 | 2 |
| AdjustmentNote | Adjustment Note | textarea |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CustomDimension | Custom Dimension | string |  | 40 |  |  |
| ForecastingCustomCategoryId | Forecasting Custom Category ID | reference |  | 18 |  |  |
| ForecastingTypeId | Forecasting Type ID | reference |  | 18 |  |  |
| Id | Forecasting Customized Owner Adjustment ID | id |  | 18 |  |  |
| IsAmount | Is Amount | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsQuantity | Is Quantity | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PeriodId | Period ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Territory2Id | Territory ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
