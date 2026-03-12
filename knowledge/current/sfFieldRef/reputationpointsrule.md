---
title: "ReputationPointsRule"
domain: sfFieldRef
topic: reputationpointsrule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:12.308Z
estimatedTokens: 328
keywords: [ReputationPointsRule, reputation, point, rules, Experience, Cloud, site, rule, action, members, earn, points, associated, actions, particular]
---

# ReputationPointsRule

> Represents the reputation point rules for an Experience Cloud site. Each rule
					specifies an action that members can earn points from and the points associated
					with those actions in a particular site.
			This object is available in API version 32.0 and later.

# ReputationPointsRule

Represents the reputation point rules for an Experience Cloud site. Each rule specifies an action that members can earn points from and the points associated with those actions in a particular site. This object is available in API version 32.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ReputationPointsRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_reputationpointsrule.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Reputation Points Rule ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| ParentId | Parent ID | reference |  | 18 |  |  |
| Points | Points | int | 6 |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Type | Event Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
