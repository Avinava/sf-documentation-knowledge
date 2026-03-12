---
title: "ResearchStudyCandidate"
domain: sfFieldRef
topic: researchstudycandidate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:12.417Z
estimatedTokens: 468
keywords: [ResearchStudyCandidate, research, participant, includes, associated, account, status, subject, API, version, 61.0, later]
---

# ResearchStudyCandidate

> Represents the details of the research participant which includes the
         associated account and the status of the subject. This object is available in API
      version 61.0 and later.

# ResearchStudyCandidate

Represents the details of the research participant which includes the associated account and the status of the subject. This object is available in API version 61.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see ResearchStudyCandidate in the Life Sciences Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CandidateId | Candidate ID | reference |  | 18 |  |  |
| CareProgramSiteId | Care Program Site ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Research Study Candidate ID | id |  | 18 |  |  |
| IsASmoker__c | IsASmoker | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MatchedExclusionCritCount | Matched Exclusion Criteria Count | int | 9 |  |  |  |
| MatchedInclusionCritCount | Matched Inclusion Criteria Count | int | 9 |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ResearchStudyId | Research Study ID | reference |  | 18 |  |  |
| SourceSystem | Source System | string |  | 255 |  |  |
| SourceSystemIdentifier | Source System Identifier | string |  | 255 |  |  |
| SourceSystemModified | Source System Modified | datetime |  |  |  |  |
| SourceType | Source Type | picklist |  | 40 |  |  |
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
