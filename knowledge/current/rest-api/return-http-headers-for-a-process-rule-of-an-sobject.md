---
title: "Return HTTP Headers for a Process Rule of an sObject"
domain: rest-api
topic: return-http-headers-for-a-process-rule-of-an-sobject
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:35.799Z
estimatedTokens: 154
keywords: [HTTP, Headers, Process, Rule, sObject, only, headers, returned, sending, GET, request, process, rules, resource, specific, rule, sObject., gives, chance, header]
---

# Return HTTP Headers for a Process Rule of an sObject

> Returns only the headers that are returned by sending a GET request to the process
        rules resource for a specific process rule of an sObject. This gives you a chance to see
        returned header values of the GET request before retrieving the content.

# Return HTTP Headers for a Process Rule of an sObject

Returns only the headers that are returned by sending a GET request to the process rules resource for a specific process rule of an sObject. This gives you a chance to see returned header values of the GET request before retrieving the content.

URI

/services/data/vXX.X/process/rules/sObjectName/workflowRuleId

Available since release

30.0

Formats

JSON, XML

HTTP methods

HEAD

Authentication

Authorization: Bearer token

Request parameters

None required

Example usage

```

```

Example request body

None required

Example response body

```

```

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/process/rules/Account/01XXX000000/ -H "Authorization: Bearer token"
```

```
HTTP/1.1 200 OK 
Date: Mon, 21 Nov 2022 22:56:26 GMT
```
