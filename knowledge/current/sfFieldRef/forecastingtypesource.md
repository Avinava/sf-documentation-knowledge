---
title: "ForecastingTypeSource"
domain: sfFieldRef
topic: forecastingtypesource
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:58.614Z
estimatedTokens: 392
keywords: [ForecastingTypeSource, Maps, forecasting, source, definition, forecast, API, version, 52.0, later]
---

# ForecastingTypeSource

> Maps a forecasting source definition to a forecast type. This object is
    available in API version 52.0 and later.

# ForecastingTypeSource

Maps a forecasting source definition to a forecast type. This object is available in API version 52.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ForecastingTypeSource](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_forecastingtypesource.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeveloperName | Name | string |  | 80 |  |  |
| ForecastingSourceDefinitionId | Forecasting Source Definition ID | reference |  | 18 |  |  |
| ForecastingTypeId | Forecasting Type ID | reference |  | 18 |  |  |
| Id | Forecasting Type Source ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Label | string |  | 80 |  |  |
| ParentSourceDefinitionId | Forecasting Source Definition ID | reference |  | 18 |  |  |
| RelationField | Custom Field Definition ID | picklist |  | 255 |  |  |
| SourceGroup | Source Group | int | 9 |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
