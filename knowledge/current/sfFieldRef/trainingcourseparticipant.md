---
title: "TrainingCourseParticipant"
domain: sfFieldRef
topic: trainingcourseparticipant
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:15.482Z
estimatedTokens: 396
keywords: [TrainingCourseParticipant, trainings, completed, person, API, version, 49.0, later]
---

# TrainingCourseParticipant

> Represents the trainings completed by a person. This object is available
    in API version 49.0 and later.

# TrainingCourseParticipant

Represents the trainings completed by a person. This object is available in API version 49.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see TrainingCourseParticipant in the Emergency Response Management Object Reference and Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ContactId | Contact ID | reference |  | 18 |  |  |
| CourseOfferingId | Course Offering ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Training Course Participant ID | id |  | 18 |  |  |
| InstitutionName | Institution Name | picklist |  | 40 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Participant ID | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| Result | Result | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| VerificationDateTime | Verification Date | datetime |  |  |  |  |
| VerificationStatus | Verification Status | picklist |  | 40 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
