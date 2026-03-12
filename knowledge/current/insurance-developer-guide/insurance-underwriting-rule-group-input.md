---
title: "Insurance Underwriting Rule Group Input"
domain: insurance-developer-guide
topic: insurance-underwriting-rule-group-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:39.901Z
estimatedTokens: 314
keywords: [Insurance, Underwriting, Rule, Group, Input, representation]
---

# Insurance Underwriting Rule Group Input

> Input representation details of the insurance underwriting rule group.

# Insurance Underwriting Rule Group Input

Input representation details of the insurance underwriting rule group.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| criteriaExpression | String | Criteria Expression for the underwriting rule group. For example, (1 AND 2) OR 3. | Required | 63.0 |
| fromStage | String | Name of the stage the record is moving from. | Optional | 63.0 |
| objectType | String | Object type for which the underwriting rule group is defined. | Required | 63.0 |
| recordType | String | Record type associated with the object type for which the underwriting rule group is defined. | Optional | 63.0 |
| rootProductId | String | ID of the root product. | Required | 63.0 |
| rulesetStatus | String | Status of the dynamic ruleset. Possible values are:ActiveInactiveDraft | Required | 63.0 |
| stageTransitionId | String | ID of the stage transition. | Required | 63.0 |
| stageTransitionName | String | Name of the source stage transition. | Optional | 63.0 |
| toStage | String | Name of the stage the record is moving to. | Optional | 63.0 |
| underwritingRuleGroupId | String | ID of the underwriting rule group. | Optional | 63.0 |

## Code Examples

```
"underwritingRuleGroup": {
       "underwritingRuleGroupId": "1KQ000000MKJIK", // Optional,
       // if underwritingRuleGroupId exist, then use it as parent instead of create a new record.
       "stageTransitionId": "0jjDR00000000VGAAA", // State Transition id.
       "stageTransitionName": "Draft to Approved",
       "objectType": "Quote",
       "recordType": "--Master--",
       "fromStage": "Draft",
       "toStage": "Approved",
       "rootProductId": "01tDR000000EMslYAG" // Auto Gold.
       "criteriaExpression": "1" // Exmple "(1 AND 2) OR 3" if more than 1 rules.
       }
```
