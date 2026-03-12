---
title: "acceptAgentWork"
domain: service-cloud
topic: acceptagentwork
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:55.224Z
estimatedTokens: 187
keywords: [acceptAgentWork, Accepts, work, item, that’s, assigned, agent, API, versions, 32.0, later, Arguments, Sample, Code–Visualforce]
---

# acceptAgentWork

> Accepts a work item that’s assigned to an agent. Available in API versions 32.0 and
        later.

# acceptAgentWork

Accepts a work item that’s assigned to an agent. Available in API versions 32.0 and later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| workId | String | The ID of the work item the agent accepts. |
| callback | function | JavaScript method to call when an agent accepts the work item associated with the workId. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| success | Boolean | true if accepting the work item was successful; false if accepting the work item wasn’t successful. |

## Code Examples

```
sforce.console.presence.acceptAgentWork(workId:String, (optional) callback:function)
```

```
<apex:page>
     <apex:includeScript value="/support/console/66.0/integration.js"/>
     <a href="#" onClick="testAcceptWork();return false;">Accept Assigned Work Item</a>

     <script type="text/javascript">
         function testAcceptWork() {
             //First get the ID of the assigned work item to accept it
             sforce.console.presence.getAgentWorks(function(result) {
                 if (result.success) {
                     var works = JSON.parse(result.works);
                     var work = works[0];
                     if (!work.isEngaged) {
                         //Now that we have the assigned work item ID, we can accept it 
                         sforce.console.presence.acceptAgentWork(work.workId, function(result) {
                             if (result.success) {
                                 alert('Accepted work successfully');
                             } else {
                                 alert('Accept work failed');
                             }
                         });
                     } else {
                         alert('The work item has already been accepted');
                     }
                 }
             });
         }
     </script>
</apex:page>
```
