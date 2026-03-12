---
title: "getCustomAction"
domain: case-feed-dev
topic: getcustomaction
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:09.403Z
estimatedTokens: 131
keywords: [getCustomAction, custom, components, access, quick, action, pass, data, messages, Arguments, Sample, Code]
---

# getCustomAction

> Allows custom components to access a custom quick action and pass data or messages to
  it.

# getCustomAction

Allows custom components to access a custom quick action and pass data or messages to it.

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| actionName | string | The name of the quick action that you want to access. |

The actionName parameter starts with the Salesforce object, followed by the quick action name. For example:

```

```

## Sample Code

```

```

## Response

Returns a Promise. Success resolves to a response object. The Promise is rejected on error response.

```

```

## Code Examples

```
actionName: "Case.MyCustomAction"
```

```
actionApi.getCustomAction(args).then(function(customAction) {
  if (customAction) {
    customAction.subscribe(function(data) {
      // Handle quick action message
    });
    customAction.publish({
      message : "Hello Custom Action",
      Param1 : "This is a parameter"
    });
  }
}).catch(function(error) {
  // We can't find that custom action.
});
```

```
success: boolean,
customAction: {
  subscribe: function,
  publish: function,
  unsubscribe: function
},
unavailableAction: boolean,
errors: []
```
