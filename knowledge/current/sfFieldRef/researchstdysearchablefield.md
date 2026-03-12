---
title: "ResearchStdySearchableField"
domain: sfFieldRef
topic: researchstdysearchablefield
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:12.383Z
estimatedTokens: 636
keywords: [ResearchStdySearchableField, common, dataset, includes, multiple, objects, serves, basis, searches, research, studies, API, version, 61.0, later]
---

# ResearchStdySearchableField

> Represents a common dataset that includes multiple fields and values from
         multiple objects and serves as the basis for searches related to research studies.
      This object is available in API version 61.0 and later.

# ResearchStdySearchableField

Represents a common dataset that includes multiple fields and values from multiple objects and serves as the basis for searches related to research studies. This object is available in API version 61.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see ResearchStdySearchableField in the Life Sciences Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrentEnrolleCount | Current Enrollee Count | int | 9 |  |  |  |
| Description | Description | textarea |  | 4000 |  |  |
| DoesAcceptHealthyCandidates | Does Accept Healthy Candidates | boolean |  |  |  |  |
| EligibleGender | Eligible Gender | string |  | 255 |  |  |
| EndDateTime | End Date Time | datetime |  |  |  |  |
| Focus | Focus | textarea |  | 4000 |  |  |
| Id | Research Study Searchable Fields ID | id |  | 18 |  |  |
| Intent | Intent | string |  | 255 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Keywords | Keywords | textarea |  | 4000 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MaximumEligibleAge | Maximum Eligible Age | int | 9 |  |  |  |
| MinimumEligibleAge | Minimum Eligible Age | int | 9 |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OmniProcess | Omni Process | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| Phase | Phase | string |  | 255 |  |  |
| PrimaryConditionArea | Primary Condition Area | textarea |  | 4000 |  |  |
| ResearchStudyId | Research Study ID | reference |  | 18 |  |  |
| ResearchStudyNumber | Research Study Number | string |  | 255 |  |  |
| ResearchStudyType | Research Study Type | string |  | 255 |  |  |
| SiteCount | Number Of Sites | int | 9 |  |  |  |
| Sponsor | Sponsor | string |  | 255 |  |  |
| StartDateTime | Start Date Time | datetime |  |  |  |  |
| Status | Status | string |  | 255 |  |  |
| Summary | Summary | textarea |  | 4000 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TargetEnrolleeCount | Target Enrollee Count | int | 9 |  |  |  |
| Title | Title | textarea |  | 4000 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
