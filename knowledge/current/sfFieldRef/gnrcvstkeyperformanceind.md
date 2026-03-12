---
title: "GnrcVstKeyPerformanceInd"
domain: sfFieldRef
topic: gnrcvstkeyperformanceind
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:59.647Z
estimatedTokens: 590
keywords: [GnrcVstKeyPerformanceInd, key, performance, indicators, recorded, performing, task, visit, compare, expected, actual, metric, indicator, records]
---

# GnrcVstKeyPerformanceInd

> Represents the key performance indicators that can be recorded while
         performing a task during a visit. You can compare the expected and actual metric values
         with the key performance indicator records.

# GnrcVstKeyPerformanceInd

Represents the key performance indicators that can be recorded while performing a task during a visit. You can compare the expected and actual metric values with the key performance indicator records.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see GnrcVstKeyPerformanceInd in the Automotive Cloud Developer Guide, Manufacturing Cloud Developer Guide, and Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActualBooleanValue | Actual Boolean Value | picklist |  | 255 |  |  |
| ActualDateTimeValue | Actual Date Time Value | datetime |  |  |  |  |
| ActualDecimalValue | Actual Decimal Value | double |  |  | 18 | 0 |
| ActualIntegerValue | Actual Integer Value | int | 9 |  |  |  |
| ActualStringValue | Actual String Value | textarea |  | 1000 |  |  |
| AssessmentIndDefinitionId | Assessment Indicator Definition ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DefinitionReferenceId | Definition Reference ID | reference |  | 18 |  |  |
| ExpectedBooleanValue | Expected Boolean Value | picklist |  | 255 |  |  |
| ExpectedDateTimeValue | Expected Date Time Value | datetime |  |  |  |  |
| ExpectedDecimalValue | Expected Decimal Value | double |  |  | 18 | 0 |
| ExpectedIntegerValue | Expected Integer Value | int | 9 |  |  |  |
| ExpectedStringValue | Expected String Value | textarea |  | 1000 |  |  |
| Id | Generic Visit Key Performance Indicator ID | id |  | 18 |  |  |
| IsDefinition | Is Definition | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| SequenceNumber | Sequence | int | 9 |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UnitOfMeasure | Unit Of Measure | picklist |  | 40 |  |  |
| VisitTaskContextId | Generic Visit Task Context ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
