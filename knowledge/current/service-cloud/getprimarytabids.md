---
title: "getPrimaryTabIds()"
domain: service-cloud
topic: getprimarytabids
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:55.599Z
estimatedTokens: 195
keywords: [getPrimaryTabIds, IDs, open, primary, tabs, API, version, 26.0, later, Arguments, Sample, Code–Visualforce]
---

# getPrimaryTabIds()

> Returns all of the IDs of open primary tabs. This method is only available in
                API version 26.0 or later.

# getPrimaryTabIds()

Returns all of the IDs of open primary tabs. This method is only available in API version 26.0 or later.

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
| ids | string | An array of open primary tab IDs , in order of appearance. |
| success | boolean | true if returning the IDs of open primary tabs was successful; false if returning the IDs of open primary tabs wasn't successful. |

## Code Examples

```
sforce.console.getPrimaryTabIds((optional) callback:Function)
```

```
<apex:page>
    <A HREF="#" onClick="testGetPrimaryTabIds();return false">
        Click here to get the primary tab IDs</A> 

    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">
        function testGetPrimaryTabIds() {
              sforce.console.getPrimaryTabIds(showTabId);
        }
        
        var showTabId = function showTabId(result) {
            //Display the primary tab IDs
            alert('Primary Tab IDs: ' + result.ids);
            };
  </script>
</apex:page>
```
