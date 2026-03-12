---
title: "closeAgentWork"
domain: service-cloud
topic: closeagentwork
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:57.143Z
estimatedTokens: 200
keywords: [closeAgentWork, Changes, status, work, item, “Closed”, removes, list, items, Omni-Channel, widget., API, versions, 32.0, later., Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# closeAgentWork

> Changes the status of a work item to “Closed” and removes it from the list of work
        items in the Omni-Channel widget. Available in API versions 32.0 and later.

# closeAgentWork

Changes the status of a work item to “Closed” and removes it from the list of work items in the Omni-Channel widget. Available in API versions 32.0 and later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| workId | String | The ID of the work item that’s closed. |
| callback | function | JavaScript method to call when the work item associated with the workId is closed. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| success | Boolean | true if closing the work item was successful; false if closing the work item wasn’t successful. |

## Code Examples

```
sforce.console.presence.closeAgentWork(workId:String, (optional) callback:function)
```

```
<apex:page>
     <apex:includeScript value="/support/console/66.0/integration.js"/>
     <a href="#" onClick="testCloseWork();return false;">Close Engaged Work Item</a>
     <script type="text/javascript">
         function testCloseWork() {
             //First get the ID of the engaged work item to close it
             sforce.console.presence.getAgentWorks(function(result) {
                 if (result.success) {
                     var works = JSON.parse(result.works);
                     var work = works[0];
                     if (work.isEngaged) {
                         //Now that we have the engaged work item ID, we can close it 
                         sforce.console.presence.closeAgentWork(work.workId,function(result) {
                             if (result.success) {
                                  alert('Closed work successfully');
                             } else {
                                 alert('Close work failed');
                             }
                         });
                     } else {
                         alert('The work item should be accepted first');
                     }
                 }
             });
         }
     </script>
</apex:page>
```
