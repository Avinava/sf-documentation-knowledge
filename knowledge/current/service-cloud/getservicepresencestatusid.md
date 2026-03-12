---
title: "getServicePresenceStatusId"
domain: service-cloud
topic: getservicepresencestatusid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:57.507Z
estimatedTokens: 232
keywords: [getServicePresenceStatusId, Retrieves, agent’s, current, presence, status., API, versions, 32.0, later., Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# getServicePresenceStatusId

> Retrieves an agent’s current presence status. Available in API versions 32.0 and
        later.

# getServicePresenceStatusId

Retrieves an agent’s current presence status. Available in API versions 32.0 and later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| callback | function | JavaScript method to call when the agent’s presence status is retrieved. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| success | Boolean | true if retrieving the presence status ID was successful; false if the retrieving the presence status ID wasn’t successful. |
| statusName | String | The name of the agent’s current presence status. |
| statusApiName | String | The API name of the agent’s current presence status. |
| statusId | String | The ID of the agent’s current presence status. |

## Code Examples

```
sforce.console.presence.getServicePresenceStatusId(callback:function)
```

```
<apex:page>
    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <a href="#" onClick="testGetStatusId();return false;">Get Omni-Channel Status ID</a>
    
    <script type="text/javascript">
        function testGetStatusId() {
            sforce.console.presence.getServicePresenceStatusId(function(result) {
                if (result.success) {
                    alert('Get Status Id successful');
                    alert('Status Id is: ' + result.statusId);
                } else {
                    alert('Get Status Id failed');
                }
            });
        }
    </script>
</apex:page>
```
