---
title: "AdverseEventEntry"
domain: sfFieldRef
topic: adverseevententry
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:46.737Z
estimatedTokens: 615
keywords: [AdverseEventEntry, event, unintended, anticipated, effects, research, participants, API, version, 61.0, later]
---

# AdverseEventEntry

> Represents the event related to unintended/anticipated effects on research
         participants. This object is available in API version 61.0 and later.

# AdverseEventEntry

Represents the event related to unintended/anticipated effects on research participants. This object is available in API version 61.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see AdverseEventEntry in the Life Sciences Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Category | Category | multipicklist |  | 4099 | 0 |  |
| CauseEndDateTime | Cause End Date | datetime |  |  |  |  |
| CauseStartDateTime | Cause Start Date | datetime |  |  |  |  |
| ClinicalEncounterId | Clinical Encounter ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DetectedDateTime | Detected Date | datetime |  |  |  |  |
| EventCodeId | Event Code ID | reference |  | 18 |  |  |
| EventEndDateTime | Event End Date | datetime |  |  |  |  |
| EventStartDateTime | Event Start Date | datetime |  |  |  |  |
| HasSubjectDiscontinuedStudy | Subject Discountinued Study | boolean |  |  |  |  |
| Id | Adverse Event Entry ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsExpected | Expected | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LocationId | Location ID | reference |  | 18 |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| RecordedById | Recorded By ID | reference |  | 18 |  |  |
| RecordedDateTime | Recorded Date | datetime |  |  |  |  |
| RelatedAdverseEventEntryId | Adverse Event Entry ID | reference |  | 18 |  |  |
| ReportingContextId | Reporting Context ID | reference |  | 18 |  |  |
| Severity | Severity | picklist |  | 40 |  |  |
| SourceSystem | Source System | string |  | 64 |  |  |
| SourceSystemIdentifier | Source System Identifier | string |  | 255 |  |  |
| SourceSystemModified | Source System Modified | datetime |  |  |  |  |
| Status | Status | picklist |  | 40 |  |  |
| SubjectId | Subject ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Type | Type | picklist |  | 40 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
