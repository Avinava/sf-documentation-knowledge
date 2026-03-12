---
title: "getFocusedPrimaryTabObjectId()"
domain: service-cloud
topic: getfocusedprimarytabobjectid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:55.577Z
estimatedTokens: 233
keywords: [getFocusedPrimaryTabObjectId, primary, tab, browser, focused, API, version, 25.0, later, Arguments, Sample, Code–Visualforce]
---

# getFocusedPrimaryTabObjectId()

> Returns the object ID of the primary tab on
            which the browser is focused. This method is only available in API version 25.0 or
                later.

# getFocusedPrimaryTabObjectId()

Returns the object ID of the primary tab on which the browser is focused. This method is only available in API version 25.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| callback | function | JavaScript method that’s called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous, so it returns its response in an object in a callback method. The response object contains the following field:

| Name | Type | Description |
| --- | --- | --- |
| id | string | The object ID of the primary tab on which the browser is focused. If there is no primary tab open, the ID is null. |
| success | boolean | true if returning the primary tab object ID on which the browser is focused was successful; false if returning the primary tab object ID on which the browser is focused wasn't successful. |

## Code Examples

```
sforce.console.getFocusedPrimaryTabObjectId((optional) callback:Function)
```

```
<apex:page>

     <A HREF="#" onClick="testGetFocusedPrimaryTabObjectId();return false">
         Click here to get the focused primary tab object ID</A> 

    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">
        function testGetFocusedPrimaryTabObjectId() {
            sforce.console.getFocusedPrimaryTabObjectId(showObjectId);
        }
        var showObjectId = function showObjectId(result) {
            //Display the object ID
            alert('Object ID: ' + result.id);
        };
        
  </script>

</apex:page>
```
