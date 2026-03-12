---
title: "Trigger a Process Rule for an sObject"
domain: rest-api
topic: trigger-a-process-rule-for-an-sobject
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:35.801Z
estimatedTokens: 106
keywords: [Trigger, Process, Rule, sObject, Triggers, active, workflow, rule, regardless, evaluation, criteria.]
---

# Trigger a Process Rule for an sObject

> Triggers an active workflow rule regardless of the evaluation criteria.

# Trigger a Process Rule for an sObject

Triggers an active workflow rule regardless of the evaluation criteria.

URI

/services/data/vXX.X/process/rules/sObjectName/workflowRuleId

Available since release

30.0

Formats

JSON, XML

HTTP methods

POST

Authentication

Authorization: Bearer token

Request parameters

None required

Request body

None required

Example usage

```

```

Example JSON response body

```

```

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/process/rules/Account/01XXX000000XxxXXX -H "Authorization: Bearer token"
```

```
{
  "errors" : null,
  "success" : true
}
```
