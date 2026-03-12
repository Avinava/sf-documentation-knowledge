---
title: "Lead Action"
domain: api-action
topic: lead-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.138Z
estimatedTokens: 419
keywords: [Lead, Action, Manage, leads, invocable, REST, HTTP, Apply, Assignment, Rules, Error]
---

# Lead Action

> Manage your leads by using the invocable action.

# Lead Action

Manage your leads by using the invocable action.

Leads must be enabled in your org. The user must have read and edit permissions for leads.

## Supported REST HTTP Methods

URIs

[Apply Lead Assignment Rules](#applyLeadAssignmentRules):

/services/data/vXX.X/actions/standard/invocableApplyLeadAssignmentRules

Formats

JSON, XML

HTTP Methods

GET, HEAD, POST

Authentication

Authorization: Bearer token

Other Information

[Error Response Types](#error_response_types)

## Apply Lead Assignment Rules

Run lead assignment rules on a collection of leads.

The Apply Lead Assignment Rules action can process up to 20 lead records at a time.

Available in API version 54.0.

URI: /services/data/vXX.X/actions/standard/invocableApplyLeadAssignmentRules

| Input | Details |
| --- | --- |
| LeadIds | TypeString CollectionDescriptionRequired. A collection of lead IDs to run lead assignment rules for. |

Sample Input

This code runs lead assignment rules for two leads:

```

```

Sample Output

This code sample illustrates a response when the action succeeds.

```

```

## Error Response Types

Sales Engagement actions can respond with success or errors.

If any type of error occurs with an action, the isSuccess field is false.

This example illustrates an error caused when the user has insufficient access to leads when calling the Apply Lead Assignment Rules action.

```

```

This example illustrates an error caused when the lead IDs passed to the Apply Lead Assignment Rules action are invalid.

```

```

This example illustrates an error caused when one of the leads passed to the Apply Lead Assignment Rules action has been deleted.

```

```

## Code Examples

```
{"inputs": [ {
      "leadId" : "00QR00000006LE8OAM"
    },
    {
        "leadId" : "00QR00000006LEDOA2"
    }]
}
```

```
[ {
         "actionName" : "invocableApplyLeadAssignmentRules",
         "isSuccess" : true
         } ]
```

```
[ {
  "actionName" : "invocableApplyLeadAssignmentRules",
  "errors" : [ {
    "statusCode" : "INSUFFICIENT_ACCESS_OR_READONLY",
    "message" : "Looks like you don't have access to this record. Your Salesforce admin can help with that.",
    "fields" : [ ]
  } ],
  "isSuccess" : false,
  "outputValues" : null
} ]
```

```
[ {
  "actionName" : "invocableApplyLeadAssignmentRules",
  "errors" : [ {
    "statusCode" : "UNKNOWN_EXCEPTION",
    "message" : "Something's not right with one or more the specified LeadIds. Check the IDs and try again.",
    "fields" : [ ]
  } ],
  "isSuccess" : false,
  "outputValues" : null
} ]
```

```
[ {
  "actionName" : "invocableApplyLeadAssignmentRules",
  "errors" : [ {
    "statusCode" : "ENTITY_IS_DELETED",
    "message" : "One or more of the specified LeadIds were deleted. Check the IDs and try again.",
    "fields" : [ ]
  } ],
  "isSuccess" : false,
  "outputValues" : null
} ]
```
