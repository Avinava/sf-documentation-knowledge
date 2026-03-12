---
title: "getAgentState()"
domain: service-cloud
topic: getagentstate
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:55.490Z
estimatedTokens: 199
keywords: [getAgentState, agent's, current, Chat, status, Online, Away, Offline, API, version, 29.0, later, Arguments, Sample, Code–Visualforce]
---

# getAgentState()

> Returns the agent's current Chat status, such as Online, Away, or Offline. Available in API version 29.0 or
            later.

# getAgentState()

Returns the agent's current Chat status, such as Online, Away, or Offline. Available in API version 29.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| callback | function | JavaScript method called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| state | String | String representing the current agent state—for example, Online, Away, or Offline. |
| success | Boolean | true if getting the agent’s Chat status was successful; false if getting the agent’s Chat status wasn’t successful. |

## Code Examples

```
sforce.console.chat.getAgentState(callback:Function)
```

```
<apex:page>
    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <a href="#" onClick="testGetAgentState();return false;">Get Agent State</a> 

    <script type="text/javascript">
        function testGetAgentState() {
            sforce.console.chat.getAgentState(function(result) {
                if (result.success) {
                    alert('Agent State:' + result.state);
                } else {
                    alert('getAgentState has failed');
                }
            });
        }
    </script>
</apex:page>
```
