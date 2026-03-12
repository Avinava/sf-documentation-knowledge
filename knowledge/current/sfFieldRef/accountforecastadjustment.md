---
title: "AccountForecastAdjustment"
domain: sfFieldRef
topic: accountforecastadjustment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:45.954Z
estimatedTokens: 351
keywords: [AccountForecastAdjustment, manual, adjustments, made, forecast, particular, account]
---

# AccountForecastAdjustment

> Represents the manual adjustments made to forecast values for a particular
      account.

# AccountForecastAdjustment

Represents the manual adjustments made to forecast values for a particular account.

For more information, see AccountForecastAdjustment in the Manufacturing Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountProdPeriodForecastId | Account Product Period Forecast ID | reference |  | 18 |  |  |
| AdjustedById | User ID | reference |  | 18 |  |  |
| AdjustedByName | Adjusted By Name | string |  | 80 |  |  |
| AdjustmentComments | Adjustment Comments | textarea |  | 2000 |  |  |
| AdjustmentType | Adjustment Type | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| FromValue | From Value | double |  |  | 18 | 0 |
| Id | AccountForecastAdjustment ID | id |  | 18 |  |  |
| IsActive | Active | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| ToValue | To Value | double |  |  | 18 | 0 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
