---
title: "AgentWorkSkill"
domain: sfFieldRef
topic: agentworkskill
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:46.877Z
estimatedTokens: 384
keywords: [AgentWorkSkill, skill, route, work, assignment, agent, reporting, result, routing, decision, API, version, 42.0, later]
---

# AgentWorkSkill

> Represents a skill used to route a work assignment to an agent.
			AgentWorkSkill is used for reporting and represents the result of a routing
			decision.
		This object is available in API version 42.0 and
		later.

# AgentWorkSkill

Represents a skill used to route a work assignment to an agent. AgentWorkSkill is used for reporting and represents the result of a routing decision. This object is available in API version 42.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [AgentWorkSkill](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_agentworkskill.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AgentWorkId | Agent Work ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Agent Work Skill ID | id |  | 18 |  |  |
| IsAdditionalSkill | Is Additional Skill | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| SkillId | Skill ID | reference |  | 18 |  |  |
| SkillLevel | SkillLevel | double |  |  | 4 | 2 |
| SkillPriority | Skill Priority | int | 9 |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| WasDropped | Was Dropped | boolean |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
