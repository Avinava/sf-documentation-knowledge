---
title: "ActionCadenceRule"
domain: sfFieldRef
topic: actioncadencerule
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:46.144Z
estimatedTokens: 404
keywords: [ActionCadenceRule, logic, branch, step, uses, determine, action, cadence, tracker, follows, including]
---

# ActionCadenceRule

> Represents the logic that a branch step uses to determine which branch
			an action cadence tracker follows in an action cadence. Use ActionCadenceRule to learn
			about a branch step, including its logic and what the next step is.

# ActionCadenceRule

Represents the logic that a branch step uses to determine which branch an action cadence tracker follows in an action cadence. Use ActionCadenceRule to learn about a branch step, including its logic and what the next step is.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ActionCadenceRule](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_ActionCadenceRule.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActionCadenceStepId | Cadence Step ID | reference |  | 18 |  |  |
| ConditionLogic | Condition Logic | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| GlobalEventType | Global Event Type | string |  | 25 |  |  |
| GraphState | Graph State | picklist |  | 255 |  |  |
| Id | Cadence Rule ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| OutcomeNextStepName | Outcome Next Step Name | string |  | 255 |  |  |
| ParentRuleName | Parent Rule Name | string |  | 255 |  |  |
| RuleName | Cadence Rule Name | string |  | 255 |  |  |
| RuleType | Rule Type | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
