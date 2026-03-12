---
title: "IndicatorAssignment"
domain: sfFieldRef
topic: indicatorassignment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:00.868Z
estimatedTokens: 456
keywords: [IndicatorAssignment, assignment, indicator, definition, that's, measure, performance, outcome, activity, API, version, 59.0, later]
---

# IndicatorAssignment

> Represents the assignment of an indicator definition that's used to
         measure the performance of an outcome or a related activity. This object is available
      in API version 59.0 and later.

# IndicatorAssignment

Represents the assignment of an indicator definition that's used to measure the performance of an outcome or a related activity. This object is available in API version 59.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see IndicatorAssignment in the Energy and Utilities Cloud Developer Guide, Life Sciences Cloud Developer Guide, and Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Indicator Assignment ID | id |  | 18 |  |  |
| IndicatorAssignmentType | Indicator Assignment Type | picklist |  | 40 |  |  |
| IndicatorDefinitionId | Indicator Definition ID | reference |  | 18 |  |  |
| IndividualApplicationId | Individual Application ID | reference |  | 18 |  |  |
| IntendedDirection | Intended Direction | picklist |  | 255 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OutcomeId | Outcome ID | reference |  | 18 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ProgramId | Program ID | reference |  | 18 |  |  |
| ProgramProductId | Program Product ID | reference |  | 18 |  |  |
| Status | Status | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
