---
title: "ForecastingSourceDefinition"
domain: sfFieldRef
topic: forecastingsourcedefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:58.581Z
estimatedTokens: 438
keywords: [ForecastingSourceDefinition, measure, date, hierarchy, forecast, uses, project, sales, API, version, 52.0, later]
---

# ForecastingSourceDefinition

> Represents the object, measure, date type, and hierarchy that a forecast uses
      to project sales. This object is available in API version 52.0 and later.

# ForecastingSourceDefinition

Represents the object, measure, date type, and hierarchy that a forecast uses to project sales. This object is available in API version 52.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ForecastingSourceDefinition](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_forecastingsourcedefinition.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CategoryField | Custom Field Definition ID | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DateField | Custom Field Definition ID | picklist |  | 255 |  |  |
| DeveloperName | Name | string |  | 80 |  |  |
| FamilyField | Custom Field Definition ID | picklist |  | 255 |  |  |
| Id | Forecasting Source Definition ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Label | string |  | 80 |  |  |
| MeasureField | Custom Field Definition ID | picklist |  | 255 |  |  |
| SourceObject | Custom Object Definition ID | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Territory2Field | Custom Field Definition ID | picklist |  | 255 |  |  |
| UserField | Custom Field Definition ID | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
