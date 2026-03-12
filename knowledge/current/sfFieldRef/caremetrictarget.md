---
title: "CareMetricTarget"
domain: sfFieldRef
topic: caremetrictarget
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:51.462Z
estimatedTokens: 534
keywords: [CareMetricTarget, expected, care, metrics, org, level, patient, API, version, 49.0, later]
---

# CareMetricTarget

> Represents the expected care metrics at an org level and patient level.
    This object is available in API version 49.0 and later.

# CareMetricTarget

Represents the expected care metrics at an org level and patient level. This object is available in API version 49.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see CareMetricTarget in the Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CodeId | Code Set ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DetailRatioDenominator | Ratio Denominator | double |  |  | 18 | 6 |
| DetailRatioNumerator | Ratio Numerator | double |  |  | 18 | 6 |
| DetailRatioUnitId | Unit of Measure ID | reference |  | 18 |  |  |
| DetailString | Value Description | string |  | 255 |  |  |
| DueDuration | Due Duration | double |  |  | 18 | 6 |
| DueDurationUnitId | Unit of Measure ID | reference |  | 18 |  |  |
| EndDate | End Date | date |  |  |  |  |
| Id | Care Metric Target ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsOutcomePositive | Outcome positive | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LowerLimit | Lower Limit | double |  |  | 18 | 6 |
| MeasureCodeId | Measure Code ID | reference |  | 18 |  |  |
| Name | Name | string |  | 255 |  |  |
| NumericValue | Numeric Value | double |  |  | 18 | 6 |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PatientId | Account ID | reference |  | 18 |  |  |
| StartDate | Start Date | date |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TargetedOutcome | Targeted Outcome | picklist |  | 255 |  |  |
| Type | Type | picklist |  | 255 |  |  |
| UnitOfMeasureId | Unit of Measure ID | reference |  | 18 |  |  |
| UpperLimit | Upper Limit | double |  |  | 18 | 6 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
