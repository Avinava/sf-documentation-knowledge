---
title: "ResearchStudy"
domain: sfFieldRef
topic: researchstudy
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:12.410Z
estimatedTokens: 676
keywords: [ResearchStudy, research, study, include, design, execution, oversight, API, version, 61.0, later]
---

# ResearchStudy

> Represents the details of a research study that include its design,
         execution, and oversight. This object is available in API version 61.0 and
      later.

# ResearchStudy

Represents the details of a research study that include its design, execution, and oversight. This object is available in API version 61.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see ResearchStudy in the Life Sciences Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BiospecRetention | Biospec Retention | picklist |  | 40 |  |  |
| BlindingTypeCodeId | Blinding Type ID | reference |  | 18 |  |  |
| CareProgramId | Care Program ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 5000 |  |  |
| DiscontinuationReason | Discontinuation Reason | picklist |  | 40 |  |  |
| EligibleGender | Eligible Gender | picklist |  | 40 |  |  |
| EligibleMaximumAge | Eligible Maximum Age | int | 9 |  |  |  |
| EligibleMinimumAge | Eligible Minimum Age | int | 9 |  |  |  |
| EndDate | End Date | datetime |  |  |  |  |
| Id | Research Study ID | id |  | 18 |  |  |
| InclusionExclusionCriteria | Inclusion And Exclusion Criteria | textarea |  | 32000 |  |  |
| IntentType | Intent Type | picklist |  | 40 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| Phase | Phase | picklist |  | 40 |  |  |
| PrimaryContactInformationId | Contact Point Phone ID | reference |  | 18 |  |  |
| ProtocolDocumentId | Protocol Document ID | reference |  | 18 |  |  |
| PublicationStatus | Publication Status | picklist |  | 40 |  |  |
| ResearchStudyNumber | Research Study Number | string |  | 40 |  |  |
| ShouldAcptHealthyCandidates | Accept Healthy Candidates | boolean |  |  |  |  |
| SourceSystem | Source System | string |  | 255 |  |  |
| SourceSystemIdentifier | Source System Identifier | string |  | 255 |  |  |
| SourceSystemModified | Source System Modified | datetime |  |  |  |  |
| StartDate | Start Date | datetime |  |  |  |  |
| Summary | Summary | textarea |  | 5000 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Title | Title | textarea |  | 5000 |  |  |
| Type | Type | picklist |  | 40 |  |  |
| UniformResourceIdentifier | Uniform Resource Identifier | url |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
