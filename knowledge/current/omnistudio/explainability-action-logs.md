---
title: "Explainability Action Logs"
domain: omnistudio
topic: explainability-action-logs
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:50.158Z
estimatedTokens: 129
keywords: [Explainability, Action, Logs, Output, representation, list, action, logs.]
---

# Explainability Action Logs

> Output representation of the list of Explainability action
    logs.

# Explainability Action Logs

Output representation of the list of Explainability action logs.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| actionLogs | Explainability Action Log Detail[] | Represents the list of explainability action logs. | Small, 54.0 | 54.0 |
| queryMore | String | A string that can be passed to the next call to fetch the next batch of explainability action log records. | Small, 54.0 | 54.0 |

## Code Examples

```
{
   "actionLogs" : [ {
      "actionContextCode" : "001x0000005DmI3AAK",
      "actionLog" : “{This is a sample action log data.}”,
      "applicationLogDate" : "Mon Dec 06 10:29:35 GMT 2021",
      "applicationSubtype" : "AST1",
      "applicationType" : "0",
      "name" : "EAD1",
      "processType" : "BPT1"
   }, {
      "actionContextCode" : "001x0000005DmI3AAK",
      "actionLog" : “{This is a sample action log data.}”,
      "applicationLogDate" : "Mon Dec 06 15:21:09 GMT 2021",
      "applicationSubtype" : "AST1",
      "applicationType" : "0",
      "name" : "EAD1",
      "processType" : "BPT1"
   } ],
   "queryMore" : ""
}
```

## Related Topics

- Explainability Action Log Detail (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_explainability_action_log_detail.htm)
