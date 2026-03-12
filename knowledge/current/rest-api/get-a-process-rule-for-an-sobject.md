---
title: "Get a Process Rule for an sObject"
domain: rest-api
topic: get-a-process-rule-for-an-sobject
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:35.641Z
estimatedTokens: 121
keywords: [Process, Rule, sObject, specific, workflow]
---

# Get a Process Rule for an sObject

> Gets the fields of a specific workflow rule for a specific sObject.

# Get a Process Rule for an sObject

Gets the fields of a specific workflow rule for a specific sObject.

Cross-object workflow rules can’t be invoked using REST API.

URI

/services/data/vXX.X/process/rules/sObjectName/workflowRuleId

Available since release

30.0

Formats

JSON, XML

HTTP methods

GET

Authentication

Authorization: Bearer token

Request parameters

None required

Example usage

```

```

Example request body

None required

Example JSON response body

```

```

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/process/rules/Account/01QD0000000APli -H "Authorization: Bearer token"
```

```
{
  "actions" : [ {
    "id" : "01VD0000000D2w7",
    "name" : "ApprovalProcessTask",
    "type" : "Task"
    } ],
    "description" : null,
    "id" : "01QD0000000APli",
    "name" : "My Rule",
    "namespacePrefix" : null,
    "object" : "Account"
}
```
