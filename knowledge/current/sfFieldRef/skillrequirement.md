---
title: "SkillRequirement"
domain: sfFieldRef
topic: skillrequirement
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:14.151Z
estimatedTokens: 535
keywords: [SkillRequirement, skill, particular, task, Service, Omni-Channel, Salesforce, Scheduler, Workforce, Engagement, requirements, added, pending, routing, objects]
---

# SkillRequirement

> Represents a skill that is required to complete a particular task in
			Field Service, Omni-Channel, Salesforce Scheduler, or Workforce Engagement. Skill
			requirements can be added to pending service routing objects in Omni-Channel. They can
			be added to work types, work orders, and work order line items in Field Service and
			Lightning Scheduler. And they can be added to job profiles in Workforce Engagement.
		This object is available in API version 38.0 and later. You also can add skill requirements
		to work items in Omni-Channel skills-based routing using API version 42.0 and
		later.

# SkillRequirement

Represents a skill that is required to complete a particular task in Field Service, Omni-Channel, Salesforce Scheduler, or Workforce Engagement. Skill requirements can be added to pending service routing objects in Omni-Channel. They can be added to work types, work orders, and work order line items in Field Service and Lightning Scheduler. And they can be added to job profiles in Workforce Engagement. This object is available in API version 38.0 and later. You also can add skill requirements to work items in Omni-Channel skills-based routing using API version 42.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [SkillRequirement](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_skillrequirement.htm "HTML (New Window)") in the Automotive Cloud Developer Guide, Field Service Developer Guide, Object Reference for the Salesforce Platform, and Salesforce Scheduler Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Id | Skill Requirement ID | id |  | 18 |  |  |
| IsAdditionalSkill | Is Additional Skill | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| RelatedRecordId | Required For ID | reference |  | 18 |  |  |
| SkillId | Skill ID | reference |  | 18 |  |  |
| SkillLevel | Skill Level | double |  |  | 4 | 2 |
| SkillNumber | Skill Requirement Number | string |  | 255 |  |  |
| SkillPriority | Skill Priority | int | 9 |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
