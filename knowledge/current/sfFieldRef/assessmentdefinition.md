---
title: "AssessmentDefinition"
domain: sfFieldRef
topic: assessmentdefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:48.121Z
estimatedTokens: 418
keywords: [AssessmentDefinition, definition, assessment, including, revised, date, purpose, API, version, 63.0, later]
---

# AssessmentDefinition

> Represents the definition of an assessment including details such as the last
         revised date and purpose. This object is available in API version 63.0 and later.

# AssessmentDefinition

Represents the definition of an assessment including details such as the last revised date and purpose. This object is available in API version 63.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see AssessmentDefinition in the Industries Common Resources Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ApprovalDateTime | Approval Date | datetime |  |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DisplayType | Display Type | picklist |  | 40 |  |  |
| EffectiveFromDate | Effective From | datetime |  |  |  |  |
| EffectiveToDate | Effective To | datetime |  |  |  |  |
| Id | Assessment Definition ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastRevisedDateTime | Last Revised Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OmniProcessId | Omni Process ID | reference |  | 18 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PerformerType | Performer Type | multipicklist |  | 4099 | 0 |  |
| PublisherId | Publisher ID | reference |  | 18 |  |  |
| Purpose | Purpose | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
