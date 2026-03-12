---
title: "Rule Condition"
domain: loyalty
topic: rule-condition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:51.653Z
estimatedTokens: 256
keywords: [Rule, Condition, Output, representation, promotion]
---

# Rule Condition

> Output representation of the details of a promotion rule condition.

# Rule Condition

Output representation of the details of a promotion rule condition.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| matchType | String | Specifies whether the condition qualifies as true when all the values in the value list match the condition's requirements or when any one of the values in the value list match the condition's requirements. | Small, 61.0 | 61.0 |
| operator | String | The operator of the rule filter criteria condition. | Small, 61.0 | 61.0 |
| parameterName | String | The name of the parameter that's used to define the rule filter criteria condition. | Small, 61.0 | 61.0 |
| sequenceNumber | Integer | The sequence number of the rule filter criteria condition in the rule condition list. | Small, 61.0 | 61.0 |
| valueList | String[] | The value that the rule filter criteria checks the parameter against. | Small, 61.0 | 61.0 |
| valueType | String | Specifies the type of the value. | Small, 61.0 | 61.0 |
