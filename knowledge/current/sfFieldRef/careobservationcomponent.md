---
title: "CareObservationComponent"
domain: sfFieldRef
topic: careobservationcomponent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:51.506Z
estimatedTokens: 572
keywords: [CareObservationComponent, component, care, observation, API, version, 51.0, later]
---

# CareObservationComponent

> Represents information about a component of a care observation. This
    object is available in API version 51.0 and later.

# CareObservationComponent

Represents information about a component of a care observation. This object is available in API version 51.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see CareObservationComponent in the Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BaselineUnitId | Unit of Measure ID | reference |  | 18 |  |  |
| BaselineValueText | Baseline Value Text | string |  | 255 |  |  |
| CareObservationId | Care Observation ID | reference |  | 18 |  |  |
| ComponentTypeCodeId | Code Set Bundle ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Care Observation Component ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsObserved | Observed | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LowerBaselineValue | Lower Baseline Value | double |  |  | 18 | 0 |
| MissingDataReason | Missing Data Reason | string |  | 255 |  |  |
| Name | Name | string |  | 255 |  |  |
| NumericValue | Numeric Value | double |  |  | 18 | 6 |
| ObservationEndDateTime | Observation End Time | datetime |  |  |  |  |
| ObservationStartDateTime | Observation Start Time | datetime |  |  |  |  |
| ObservedValueCodeId | Code Set Bundle ID | reference |  | 18 |  |  |
| ObservedValueDenominator | Observed Value Denominator | double |  |  | 6 | 2 |
| ObservedValueNumerator | Observed Value Numerator | double |  |  | 6 | 2 |
| ObservedValueText | Observed Value Text | string |  | 255 |  |  |
| ObservedValueUnitId | Unit of Measure ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UpperBaselineValue | Upper Baseline Value | double |  |  | 18 | 0 |
| ValueInterpretation | Value Interpretation | picklist |  | 40 |  |  |
| ValueType | Value Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
