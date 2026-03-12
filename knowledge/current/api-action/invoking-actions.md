---
title: "Invoking Actions"
domain: api-action
topic: invoking-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:57.917Z
estimatedTokens: 331
keywords: [Invoking, Actions, invoked, JSON, top-level, key, inputs]
---

# Invoking Actions

> Most actions are invoked using the same JSON body format. The top-level JSON key name must
        be inputs.

# Invoking Actions

Most actions are invoked using the same JSON body format. The top-level JSON key name must be inputs.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_action)

#### Note

Invoke Salesforce Order Management actions with the corresponding Connect REST API resources or Apex ConnectApi methods, not the standard endpoints.

The following example request shows two Chatter posts made with a single Post to Chatter action.

```

```

Here is the response.

```

```

Standard actions return their name in actionName. The value of actionName varies for custom actions.

| Action | actionName value |
| --- | --- |
| Flow | The flow name |
| Apex | The class’s invocable method name |
| Quick action | <object name>.<quick action name>For a global quick action, there’s no <object name>. prefix. |
| Email alert | <object name>.<email alert name> |
| Exit Individuals from a Flow | The flow name |
| Send notification | The API name of the notification type |
| Generate Prompt Response | The API name of the prompt template |

#### See Also

-   [*REST API Developer Guide* : Invocable Actions](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_actions_invocable.htm " REST API Developer Guide : Invocable Actions  - HTML (New Window)")

## Code Examples

```
POST /services/data/vXX.X/actions/standard/chatterPost

{ "inputs" :
  [
  {
    "subjectNameOrId" : "jsmith@salesforce.com",
    "type" : "user",
    "text" : "first chatter post!"
  },
  {
    "subjectNameOrId" : "hsmith@salesforce.com",
    "type" : "user",
    "text" : "second chatter post!"
  }
  ]
}
```

```
[ {
  "actionName" : "chatterPost",
  "errors" : null,
  "isSuccess" : true,
  "outputValues" : {
    "feedItemId" : "0D5D0000000kynqKBA"
  }
}, {
  "actionName" : "chatterPost",
  "errors" : null,
  "isSuccess" : true,
  "outputValues" : {
    "feedItemId" : "0D5D0000000kynrKBz"
  }
} ]
```
