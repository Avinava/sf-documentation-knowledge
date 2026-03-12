---
title: "onEnclosingTabRefresh()"
domain: service-cloud
topic: onenclosingtabrefresh
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:56.317Z
estimatedTokens: 180
keywords: [onEnclosingTabRefresh, Registers, function, call, enclosing, tab, refreshes, API, version, 24.0, later, Arguments, Sample, Code–Visualforce, Event]
---

# onEnclosingTabRefresh()

> Registers a function to call
            when the enclosing tab refreshes. This method is only available in API version 24.0 or
            later.

# onEnclosingTabRefresh()

Registers a function to call when the enclosing tab refreshes. This method is only available in API version 24.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| eventHandler | function | JavaScript method called when the enclosing tab refreshes. |

## Sample Code–Visualforce

```

```

## Event Handler Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following fields:

| Name | Type | Description |
| --- | --- | --- |
| id | string | The ID of the refreshed tab. |
| objectId | string | The object ID of the refreshed tab or null if no object exists. |

## Code Examples

```
sforce.console.onEnclosingTabRefresh(eventHandler:Function)
```

```
<apex:page>

    <apex:includeScript value="/support/console/66.0/integration.js"/>

    <script type="text/javascript">
        var eventHandler = function eventHandler(result) {
            alert('Enclosing tab has refreshed:' + result.id 
          + 'and the object Id is:' + result.objectId);
        };
            sforce.console.onEnclosingTabRefresh(eventHandler);
    </script>
</apex:page>
```
