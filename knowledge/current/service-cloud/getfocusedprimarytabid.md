---
title: "getFocusedPrimaryTabId()"
domain: service-cloud
topic: getfocusedprimarytabid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:55.573Z
estimatedTokens: 223
keywords: [getFocusedPrimaryTabId, primary, tab, browser, focused, API, version, 25.0, later, Arguments, Sample, Code–Visualforce]
---

# getFocusedPrimaryTabId()

> Returns the ID of the primary tab on which the
            browser is focused. This method is only available in API version 25.0 or
                later.

# getFocusedPrimaryTabId()

Returns the ID of the primary tab on which the browser is focused. This method is only available in API version 25.0 or later.

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

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following fields:

| Name | Type | Description |
| --- | --- | --- |
| id | string | The ID of the primary tab on which the browser is focused. If no primary tab is open, the ID is null. |
| success | boolean | true if returning the primary tab ID on which the browser is focused was successful; false if returning the primary tab ID on which the browser is focused wasn't successful. |

## Code Examples

```
sforce.console.getFocusedPrimaryTabId((optional) callback:Function)
```

```
<apex:page>

     <A HREF="#" onClick="testGetFocusedPrimaryTabId();return false">
         Click here to get the focused primary tab ID</A> 

    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">
        function testGetFocusedPrimaryTabId() {
            sforce.console.getFocusedPrimaryTabId(showTabId);
        }
        var showTabId = function showTabId(result) {
            //Display the tab ID
            alert('Tab ID: ' + result.id);
        };
        
  </script>

</apex:page>
```
