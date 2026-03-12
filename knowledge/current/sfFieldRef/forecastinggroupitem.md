---
title: "ForecastingGroupItem"
domain: sfFieldRef
topic: forecastinggroupitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:58.534Z
estimatedTokens: 409
keywords: [ForecastingGroupItem, picklist, forecasting, group, forecast, identifies, industry, opportunity, part, that’s, chosen, API, version, 60.0, later]
---

# ForecastingGroupItem

> Represents the value within the picklist that is specified as the
         forecasting group for a forecast type. For example, if you have a forecasting group that
         identifies the industry an opportunity is part of, this object represents the value in the
         the industry picklist that’s chosen to be part of the group. This object is available
      in API version 60.0 and later.

# ForecastingGroupItem

Represents the value within the picklist that is specified as the forecasting group for a forecast type. For example, if you have a forecasting group that identifies the industry an opportunity is part of, this object represents the value in the the industry picklist that’s chosen to be part of the group. This object is available in API version 60.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ForecastingGroupItem](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_forecastinggroupitem.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DisplayPosition | Display Position | int | 9 |  |  |  |
| ForecastingGroupId | Forecasting Group ID | reference |  | 18 |  |  |
| Id | Forecasting Group Item ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| SourceValueApiName | Source Value API Name | string |  | 765 |  |  |
| SourceValueLabel | Source Value Label | string |  | 765 |  |  |
| SourceValueTranslatedLabel | Source Value Translated Label | string |  | 765 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
