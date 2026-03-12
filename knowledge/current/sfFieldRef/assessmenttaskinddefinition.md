---
title: "AssessmentTaskIndDefinition"
domain: sfFieldRef
topic: assessmenttaskinddefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:48.552Z
estimatedTokens: 369
keywords: [AssessmentTaskIndDefinition, Associate, assessment, indicator, definition, task, definition.This, API, version, 48.0, later]
---

# AssessmentTaskIndDefinition

> Associate an assessment indicator definition with an assessment task
      definition.This object is available in API version 48.0 and later.

# AssessmentTaskIndDefinition

Associate an assessment indicator definition with an assessment task definition.This object is available in API version 48.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see AssessmentTaskIndDefinition in the Consumer Goods Cloud Developer Guide, Emergency Response Management Object Reference, and Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AssessmentIndDefinitionId | Assessment Indicator Definition ID | reference |  | 18 |  |  |
| AssessmentTaskDefinitionId | Assessment Task Definition ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| DisplayOrder | Display Order | int | 9 |  |  |  |
| Id | Assessment Task Indicator Definition ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
