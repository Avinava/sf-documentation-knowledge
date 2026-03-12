---
title: "getMaxCapacity()"
domain: service-cloud
topic: getmaxcapacity
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:57.425Z
estimatedTokens: 197
keywords: [getMaxCapacity, maximum, chat, capacity, current, agent, specified, agent's, assigned, configuration., API, version, 29.0, later., Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# getMaxCapacity()

> Returns the maximum chat capacity for the current agent, as specified in the agent's
        assigned agent configuration. Available in API version 29.0 or
            later.

# getMaxCapacity()

Returns the maximum chat capacity for the current agent, as specified in the agent's assigned agent configuration. Available in API version 29.0 or later.

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
| count | integer | Agent's current, maximum chat capacity. |
| success | boolean | true if getting the agent’s capacity was successful; false if getting the agent’s capacity wasn’t successful. |

## Code Examples

```
sforce.console.chat.getMaxCapacity(callback:Function)
```

```
<apex:page>
    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <a href="#" onClick="testGetMaxCapacity();return false;">Get Max Capacity</a> 

    <script type="text/javascript">
        function testGetMaxCapacity() {
            sforce.console.chat.getMaxCapacity(function(result) {
                if (result.success) {
                    alert('max capacity '+result.count);
                } else {
                    alert('getMaxCapacity failed, agent my not be online');
                }
            });
        }
    </script>
</apex:page>
```
