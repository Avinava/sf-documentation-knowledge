---
title: "Get Process Rules for an sObject"
domain: rest-api
topic: get-process-rules-for-an-sobject
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:35.814Z
estimatedTokens: 107
keywords: [Get, Process, Rules, sObject, active, workflow, rules, sObject., resource, REST, API, version, 30.0, later., Syntax, Example]
---

# Get Process Rules for an sObject

> Gets all active workflow rules for an sObject. This resource is available in REST API
        version 30.0 and later.

# Get Process Rules for an sObject

Gets all active workflow rules for an sObject. This resource is available in REST API version 30.0 and later.

## Syntax

URI

/services/data/vXX.X/process/rules/sObject

Formats

JSON, XML

HTTP methods

GET

Authentication

Authorization: Bearer token

Request parameters

None required

Request body

None required

## Example

Example Request

```

```

Example Response Body

```

```

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/process/rules/Account -H "Authorization: Bearer token"
```

```
{
  "rules" : {
    "Account" : [ {
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
    } ]
  }
}
```
