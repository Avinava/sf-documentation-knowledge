---
title: "declineAgentWork"
domain: service-cloud
topic: declineagentwork
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:55.302Z
estimatedTokens: 213
keywords: [declineAgentWork, Declines, work, item, that’s, assigned, agent, API, versions, 32.0, later, Arguments, Sample, Code–Visualforce]
---

# declineAgentWork

> Declines a work item that’s assigned to an agent. Available in API versions 32.0 and
        later.

# declineAgentWork

Declines a work item that’s assigned to an agent. Available in API versions 32.0 and later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| workId | String | The ID of the work item that the agent declines. |
| declineReason | String | The provided reason for why the agent declined the work request. |
| callback | function | JavaScript method to call when an agent declines the work item associated with the workId. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| success | Boolean | true if declining the work item was successful; false if declining the work item wasn’t successful. |

## Code Examples

```
sforce.console.presence.declineAgentWork(workId:String, (optional) declineReason:String, (optional) callback:function)
```

```
<apex:page >
    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <a href="#" onClick="testDeclineWork();return false;">Decline Assigned Work Item</a>

    <script type="text/javascript">
        function testDeclineWork() {
            //First, get the ID of the assigned work item to accept it
            sforce.console.presence.getAgentWorks(function(result) {
                if (result.success) {
                    var works = JSON.parse(result.works);
                    var work = works[0];
                    sforce.console.presence.declineAgentWork(work.workId, function(result) { 
                            if (result.success) {
                                alert('Declined work successfully');
                            } else {
                                alert('Decline work failed');
                            }
                        });
                     }
                });
            }
    </script>
</apex:page>
```
