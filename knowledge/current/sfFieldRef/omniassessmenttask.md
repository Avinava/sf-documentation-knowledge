---
title: "OmniAssessmentTask"
domain: sfFieldRef
topic: omniassessmenttask
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:05.135Z
estimatedTokens: 399
keywords: [OmniAssessmentTask, assessment, task, associated, OmniScript]
---

# OmniAssessmentTask

> Represents the information about an assessment task that is associated with
         an OmniScript.

# OmniAssessmentTask

Represents the information about an assessment task that is associated with an OmniScript.

For more information, see OmniAssessmentTask in the Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DefinitionReferenceId | Omni Assessment Task ID | reference |  | 18 |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| EndDateTime | End Date Time | datetime |  |  |  |  |
| Id | Omni Assessment Task ID | id |  | 18 |  |  |
| IsDefinition | Is Definition | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsMandatoryTask | Is Mandatory Task | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OmniProcessId | Omni Process ID | reference |  | 18 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| Sequence | Sequence | int | 9 |  |  |  |
| StartDateTime | Start Date Time | datetime |  |  |  |  |
| Status | Status | picklist |  | 40 |  |  |
| StatusCode | Status Code | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TaskRelationId | Task Relation ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
