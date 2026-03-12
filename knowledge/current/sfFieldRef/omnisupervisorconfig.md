---
title: "OmniSupervisorConfig"
domain: sfFieldRef
topic: omnisupervisorconfig
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:05.360Z
estimatedTokens: 302
keywords: [OmniSupervisorConfig, Omni-Channel, supervisor, configuration, assigned, group, supervisors, API, version, 41.0, later]
---

# OmniSupervisorConfig

> Represents the Omni-Channel supervisor configuration for an assigned group of supervisors. This object is available in API version 41.0 and later.

# OmniSupervisorConfig

Represents the Omni-Channel supervisor configuration for an assigned group of supervisors. This object is available in API version 41.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see OmniSupervisorConfig in the Omnistudio Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeveloperName | Developer Name | string |  | 80 |  |  |
| Id | Omni Supervisor Configuration ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsTimelineHidden | Is Timeline Hidden | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Omni Supervisor Configuration Name | string |  | 80 |  |  |
| SkillVisibility | Skill Visibility Type | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
