---
title: "getAgentWorks"
domain: service-cloud
topic: getagentworks
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:57.432Z
estimatedTokens: 350
keywords: [getAgentWorks, list, work, items, currently, assigned, agent, open, agent’s, workspace., API, versions, 32.0, later., Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# getAgentWorks

> Returns a list of work items that are currently assigned to an agent and open in the
        agent’s workspace. Available in API versions 32.0 and later.

# getAgentWorks

Returns a list of work items that are currently assigned to an agent and open in the agent’s workspace. Available in API versions 32.0 and later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| callback | function | JavaScript method to call when the list of an agent’s work items is retrieved. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| success | Boolean | true if retrieving the agent’s work items was successful; false if retrieving the agent’s work items wasn’t successful. |
| works | JSON string of work objects | A JSON string of work objects that represents the work items assigned to the agent that are open in the agent’s workspace. |

## work

The work object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| workItemId | String | The ID of the object that’s routed through Omni-Channel. This object becomes a work assignment with a workId when it’s assigned to an agent. |
| workId | String | The ID of a work assignment that’s routed to an agent. |
| isEngaged | Boolean | Indicates whether an agent is working on a work item that’s been assigned to them (true) or not (false). |

## Code Examples

```
sforce.console.presence.getAgentWorks(callback:function)
```

```
<apex:page>
    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <a href="#" onClick="testGetWorks();return false;">Get Agent’s Current Work Items</a>
    
    <script type="text/javascript">
        function testGetWorks() {
            //These values are for example purposes only.
            sforce.console.presence.getAgentWorks(function(result) {
                if (result.success) {
                    alert('Get work items successful');
                    var works = JSON.parse(result.works);
                    alert('First Agent Work ID is: ' +  works[0].workId);
                    alert('Assigned Entity Id of the first Agent Work is: ' + works[0].workItemId);
                    alert('Is first Agent Work Engaged: ' + works[0].isEngaged);
                } else {
                    alert('Get work items failed');
                }
            });
        }
    </script>
</apex:page>
```
