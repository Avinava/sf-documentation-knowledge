---
title: "setAgentState()"
domain: service-cloud
topic: setagentstate
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:56.448Z
estimatedTokens: 195
keywords: [setAgentState, agent's, Chat, status, Online, Away, Offline, API, version, 29.0, later, Arguments, Sample, Code–Visualforce]
---

# setAgentState()

> Sets an agent's Chat status, such as Online, Away, or Offline. Available in API version 29.0 or
            later.

# setAgentState()

Sets an agent's Chat status, such as Online, Away, or Offline. Available in API version 29.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| state | String | Chat status you want to set the agent to—for example, Online, Away, or Offline. |
| callback | function | JavaScript method called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| success | Boolean | true if setting the agent’s Chat status was successful; false if setting the agent’s Chat status wasn’t successful. |

## Code Examples

```
sforce.console.chat.setAgentState(state:String, (optional)callback:Function)
```

```
<apex:page>
    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <a href="#" onClick="testSetAgentState('Online');return false;">Set Agent Status to Online</a> 
    <script type="text/javascript">
        function testSetAgentState(state) {
            sforce.console.chat.setAgentState(state, function(result) {
                if (result.success) {
                    alert('Agent State Set to Online');
                } else {
                    alert('setAgentState has failed');
                }
            });
        }
    </script>
</apex:page>
```
