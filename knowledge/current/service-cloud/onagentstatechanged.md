---
title: "onAgentStateChanged()"
domain: service-cloud
topic: onagentstatechanged
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:58.179Z
estimatedTokens: 232
keywords: [onAgentStateChanged, Registers, function, call, agents, change, their, Chat, status, such, Online, Away., API, version, 29.0, later., Syntax, Arguments, Sample, Code–Visualforce]
---

# onAgentStateChanged()

> Registers a function to call when agents change their Chat status, such as from
        Online to Away. Available in API version 29.0 or
            later.

# onAgentStateChanged()

Registers a function to call when agents change their Chat status, such as from Online to Away. Available in API version 29.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| eventHandler | function | JavaScript method called when the agent's Chat status has changed. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| state | String | String that represents the agent’s current Chat status—for example, Online, Away, or Offline. When an agent switches from Offline to Away, you may see two returned values (Online then Away) instead of one (Away). |
| success | Boolean | true if firing event was successful; false if firing event wasn’t successful. |

## Code Examples

```
sforce.console.chat.onAgentStateChanged(eventHandler:Function)
```

```
<apex:page>
    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">
        var eventHandler = function (result) {
            alert("Agent's State has Changed to: " + result.state);
        };
        sforce.console.chat.onAgentStateChanged(eventHandler);
    </script>
</apex:page>
```
