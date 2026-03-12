---
title: "Assessment"
domain: sfFieldRef
topic: assessment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:48.114Z
estimatedTokens: 541
keywords: [Assessment, Stores, data, API, version, 63.0, later]
---

# Assessment

> Stores the header data for an assessment. This object is available in
      API version 63.0 and later.

# Assessment

Stores the header data for an assessment. This object is available in API version 63.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see Assessment in the Education Cloud Developer Guide and Industries Common Resources Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| ApplicantId | Applicant ID | reference |  | 18 |  |  |
| AssessmentRating | Assessment Rating | picklist |  | 40 |  |  |
| AssessmentStatus | Assessment Status | picklist |  | 40 |  |  |
| AssessorId | Assessor ID | reference |  | 18 |  |  |
| CaseId | Case ID | reference |  | 18 |  |  |
| CompletedDateTime | Completed Date | datetime |  |  |  |  |
| ContactId | Contact ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EffectiveDateTime | Effective Date | datetime |  |  |  |  |
| ExpirationDateTime | Expiration Date | datetime |  |  |  |  |
| ExternalAssessmentDefId | External Assessment Definition ID | reference |  | 18 |  |  |
| Id | Assessment ID | id |  | 18 |  |  |
| Identifier | Identifier | string |  | 255 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsSavedForLater | Saved For Later | boolean |  |  |  |  |
| IsSuggestedAssessment | Suggested Assessment | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OmniProcessId | Omni Process ID | reference |  | 18 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ParentId | Assessment ID | reference |  | 18 |  |  |
| ResponseContextId | Response Context ID | reference |  | 18 |  |  |
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
