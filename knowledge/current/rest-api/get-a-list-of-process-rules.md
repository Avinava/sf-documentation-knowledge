---
title: "Get a List of Process Rules"
domain: rest-api
topic: get-a-list-of-process-rules
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:34.909Z
estimatedTokens: 121
keywords: [Process, Rules, resource]
---

# Get a List of Process Rules

> Use the Process Rules resource to get information about process rules.

# Get a List of Process Rules

Use the [Process Rules](atlas.en-us.api_rest.meta/api_rest/resources_process_rules.htm "Accesses a list of all active workflow rules. Use the GET method to retrieve records or fields. Use the HEAD method to retrieve information in HTTP headers. Use the POST method to trigger all active workflow rules.") resource to get information about process rules.

Example usage

```

```

Example request body

none required

Example JSON response body

```

```

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/process/rules/ -H "Authorization: Bearer token"
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

## Related Topics

- Process Rules (atlas.en-us.api_rest.meta/api_rest/resources_process_rules.htm)
