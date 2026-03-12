---
title: "CareObservation"
domain: sfFieldRef
topic: careobservation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:51.497Z
estimatedTokens: 986
keywords: [CareObservation, observed, care, metrics, originating, external, systems, contain, biometric, data, API, version, 49.0, later]
---

# CareObservation

> Represents the observed values for care
      metrics originating from external systems that contain biometric data. This object is
    available in API version 49.0 and later.

# CareObservation

Represents the observed values for care metrics originating from external systems that contain biometric data. This object is available in API version 49.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see CareObservation in the Salesforce Health Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AdditionalCode1Id | Code Set ID | reference |  | 18 |  |  |
| AdditionalCode2Id | Code Set ID | reference |  | 18 |  |  |
| BasedOnId | Based On ID | reference |  | 18 |  |  |
| BaselineUnitId | Unit of Measure ID | reference |  | 18 |  |  |
| BaselineValueText | Baseline Value Text | string |  | 255 |  |  |
| BodySiteId | Code Set Bundle ID | reference |  | 18 |  |  |
| CaseId | Case ID | reference |  | 18 |  |  |
| Category | Category | picklist |  | 40 |  |  |
| CodeId | Code Set ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DerivationSourceId | Derivation Source ID | reference |  | 18 |  |  |
| DeviceId | Asset ID | reference |  | 18 |  |  |
| EffectiveDateTime | Effective Date and Time | datetime |  |  |  |  |
| EncounterId | Clinical Encounter ID | reference |  | 18 |  |  |
| EndDateTime | End Date Time | datetime |  |  |  |  |
| HasMetExpectedValue | Met expected value | boolean |  |  |  |  |
| Id | Care Observation ID | id |  | 18 |  |  |
| IdentifierId | Identifier ID | reference |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsMonitoredRemotely | Monitored remotely | boolean |  |  |  |  |
| IsObserved | Observed | boolean |  |  |  |  |
| IsOutcomePositive | Outcome positive | boolean |  |  |  |  |
| IssuedDateTime | Issued Date Time | datetime |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LowerBaselineValue | Lower Baseline Value | double |  |  | 18 | 2 |
| MethodId | Code Set Bundle ID | reference |  | 18 |  |  |
| Name | Name | string |  | 255 |  |  |
| NumericValue | Numeric Value | double |  |  | 18 | 6 |
| ObservationEndTime | Observation End Time | datetime |  |  |  |  |
| ObservationStartTime | Observation Start Time | datetime |  |  |  |  |
| ObservationStatus | Observation Status | picklist |  | 40 |  |  |
| ObservedSubjectId | Account ID | reference |  | 18 |  |  |
| ObservedValueCodeId | Code Set Bundle ID | reference |  | 18 |  |  |
| ObservedValueDenominator | Observed Value Denominator | double |  |  | 6 | 2 |
| ObservedValueNumerator | Observed Value Numerator | double |  |  | 6 | 2 |
| ObservedValueText | Observed Value Text | string |  | 255 |  |  |
| ObservedValueType | Observed Value Type | picklist |  | 255 |  |  |
| ObservedValueUnitId | Unit of Measure ID | reference |  | 18 |  |  |
| ObserverId | Observer ID | reference |  | 18 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PartOfId | Part Of ID | reference |  | 18 |  |  |
| PatientSpecimenId | Code Set Bundle ID | reference |  | 18 |  |  |
| ProcessingResult | Processing Result | picklist |  | 255 |  |  |
| RelatedObservationId | Care Observation ID | reference |  | 18 |  |  |
| SourceSystem | Source System | string |  | 64 |  |  |
| SourceSystemIdentifier | Source System ID | string |  | 255 |  |  |
| SourceSystemModified | Source System Modified | datetime |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UnitOfMeasureId | Unit of Measure ID | reference |  | 18 |  |  |
| UpperBaselineValue | Upper Baseline Value | double |  |  | 18 | 2 |
| ValueInterpretation | Value Interpretation | picklist |  | 40 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
