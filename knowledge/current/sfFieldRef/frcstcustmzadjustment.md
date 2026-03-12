---
title: "FrcstCustmzAdjustment"
domain: sfFieldRef
topic: frcstcustmzadjustment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:58.645Z
estimatedTokens: 455
keywords: [FrcstCustmzAdjustment, individual, forecast, manager’s, adjustment, subordinate’s, consumption, API, version, 63.0, later, different, ForecastingAdjustment, managers’, adjustments]
---

# FrcstCustmzAdjustment

> Represents an individual forecast manager’s adjustment of a subordinate’s
         consumption forecast.  Available in API version 63.0 and later. This object is
      different from the ForecastingAdjustment object, which represents managers’ adjustments of
      subordinates’ pipeline forecasts.

# FrcstCustmzAdjustment

Represents an individual forecast manager’s adjustment of a subordinate’s consumption forecast. Available in API version 63.0 and later. This object is different from the ForecastingAdjustment object, which represents managers’ adjustments of subordinates’ pipeline forecasts.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [FrcstCustmzAdjustment](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_frcstcustmzadjustment.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AdjustedAmount | Adjusted Amount | currency |  |  | 18 | 0 |
| AdjustedQuantity | Adjusted Quantity | double |  |  | 12 | 2 |
| AdjustmentNote | Adjustment Note | textarea |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| ForecastingCustomCategoryId | Forecasting Custom Category ID | reference |  | 18 |  |  |
| ForecastingTypeId | Forecasting Type ID | reference |  | 18 |  |  |
| Id | Forecasting Customized Adjustment ID | id |  | 18 |  |  |
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
