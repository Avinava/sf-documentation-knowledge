---
title: "USING SCOPE"
domain: soql-sosl
topic: using-scope
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:19.812Z
estimatedTokens: 547
keywords: [SCOPE, clause, SOQL, query, records, limit, objects, user, owns, user’s, territory]
---

# USING SCOPE

> The optional USING SCOPE clause of a SOQL query
		returns records within a specified scope. For example, you can limit the records to return
		only objects that the user owns or only records in the user’s territory.

# USING SCOPE

The optional USING SCOPE clause of a SOQL query returns records within a specified scope. For example, you can limit the records to return only objects that the user owns or only records in the user’s territory.

With API version 32.0 and later, you can use USING SCOPE to limit the results of a query to a specified filterScope.

```

```

filterScope can take one of many enumeration values. To get a list of scopes supported by an object, call [describeSObject()](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_calls_describesobject.htm) for SOAP API or [sObject Describe](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api/resources_sobject_describe.htm) for REST API. In the supportedScopes section of the object’s description, the name shows the name of the scope and the label shows an explanation of that scope. This example shows the description of the Account object.

```

```

This table lists examples of enumeration values that filterScope can take.

| Scope | Description |
| --- | --- |
| delegated | Filter for records delegated to another user for action. For example, a query could filter for only delegated Task records. |
| everything | Filter for all records. |
| mine | Filter for records owned by the user running the query. |
| mine_and_my_groups | Filter for records assigned to the user running the query and the user’s queues. If a user is assigned to a queue, the user can access records in the queue. This filter applies only to the ProcessInstanceWorkItem object. |
| my_territory | Filter for records in the territory of the user running the query. This option is available if territory management is enabled for your organization. |
| my_team_territory | Filter for records in the territory of the team of the user running the query. This option is available if territory management is enabled for your organization. |
| scopingRule | Filter for records based on the applicable scoping rule. This option is available if an admin has activated at least one scoping rule on the object that you’re querying. |
| team | Filter for records assigned to a team, such as an Account team. |

## Code Examples

```
[USING SCOPE filterScope]
```

```
"supportedScopes" : [
      {
         "label" : "All accounts",
         "name" : "everything"
      },
      {
         "label" : "My accounts",
         "name" : "mine"
      },
      {
         "label" : "My team's accounts",
         "name" : "team"
      }
   ],
```
