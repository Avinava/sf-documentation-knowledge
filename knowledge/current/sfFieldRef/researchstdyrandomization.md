---
title: "ResearchStdyRandomization"
domain: sfFieldRef
topic: researchstdyrandomization
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:12.356Z
estimatedTokens: 461
keywords: [ResearchStdyRandomization, randomization, algorithm, configuration, defined, research, study, API, version, 61.0, later]
---

# ResearchStdyRandomization

> Represents the randomization algorithm configuration defined for a research
         study. This object is available in API version 61.0 and later.

# ResearchStdyRandomization

Represents the randomization algorithm configuration defined for a research study. This object is available in API version 61.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see ResearchStdyRandomization in the Life Sciences Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AlgorithmFlowDefinition | Algorithm Flow Definition | string |  | 255 |  |  |
| AlgorithmType | Algorithm Type | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | string |  | 255 |  |  |
| DoesAsgnCandidatesToGroups | Randomization Assigns Candidates To Groups | boolean |  |  |  |  |
| DoesGenerateBlockOnDemand | Generate Block On Demand | boolean |  |  |  |  |
| Id | Research Study Randomization ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MaximumBlockSizeMultiplier | Maximum Block Size Multiplier | int | 9 |  |  |  |
| MinimumBlockSizeMultiplier | Minimum Block Size Multiplier | int | 9 |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| RandomizationLevel | Randomization Level | picklist |  | 255 |  |  |
| ResearchStudyId | Research Study ID | reference |  | 18 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
