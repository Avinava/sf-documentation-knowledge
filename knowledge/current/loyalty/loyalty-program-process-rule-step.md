---
title: "Loyalty Program Process Rule Step"
domain: loyalty
topic: loyalty-program-process-rule-step
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:51.494Z
estimatedTokens: 208
keywords: [Loyalty, Program, Process, Rule, Step, Output, representation]
---

# Loyalty Program Process Rule Step

> Output representation of the loyalty program process rule
    step.

# Loyalty Program Process Rule Step

Output representation of the loyalty program process rule step.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errorMessage | String | The message stating the reason for error, if any. | Small, 55.0 | 55.0 |
| sequenceNumber | Integer | The sequence number of a rule step. | Small, 55.0 | 55.0 |
| status | String | The status of the loyalty program process rule step execution.Possible values are:CriteriaNotMetFailedSuccess | Small, 55.0 | 55.0 |
| stepName | String | The name of the step in the loyalty program process rule. | Small, 55.0 | 55.0 |
| stepType | String | Specifies the type of step in the loyalty program process rule.Possible values are:ActionConditionConditionGroupDefaultPath | Small, 55.0 | 55.0 |
