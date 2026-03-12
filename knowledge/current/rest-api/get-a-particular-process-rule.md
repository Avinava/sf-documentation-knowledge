---
title: "Get a Particular Process Rule"
domain: rest-api
topic: get-a-particular-process-rule
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:35.020Z
estimatedTokens: 135
keywords: [Get, Particular, Process, Rule, Rules, resource, specify, thesObjectName, workflowRuleId, rule, want, get, metadata, for.]
---

# Get a Particular Process Rule

> Use the Process Rules resource and specify thesObjectName and
        workflowRuleId of the rule you want to get the metadata
    for.

# Get a Particular Process Rule

Use the [Process Rules](atlas.en-us.api_rest.meta/api_rest/resources_process_rules.htm "Accesses a list of all active workflow rules. Use the GET method to retrieve records or fields. Use the HEAD method to retrieve information in HTTP headers. Use the POST method to trigger all active workflow rules.") resource and specify thesObjectName and workflowRuleId of the rule you want to get the metadata for.

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

## Related Topics

- Process Rules (atlas.en-us.api_rest.meta/api_rest/resources_process_rules.htm)
