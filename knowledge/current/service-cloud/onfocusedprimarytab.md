---
title: "onFocusedPrimaryTab()"
domain: service-cloud
topic: onfocusedprimarytab
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:56.322Z
estimatedTokens: 210
keywords: [onFocusedPrimaryTab, Registers, function, call, focus, browser, changes, different, primary, tab, API, version, 25.0, later, Arguments]
---

# onFocusedPrimaryTab()

> Registers a function to call when the focus of the
            browser changes to a different primary tab. This method is only available in API version 25.0 or
                later.

# onFocusedPrimaryTab()

Registers a function to call when the focus of the browser changes to a different primary tab. This method is only available in API version 25.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| eventHandler | function | JavaScript method called when the focus of the browser changes to a different primary tab. |

## Sample Code–Visualforce

```

```

## Event Handler Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following fields:

| Name | Type | Description |
| --- | --- | --- |
| id | string | The ID of the primary tab on which the browser is focused. |
| objectId | string | The object ID of the primary tab on which the browser is focused or null if no object exists. |

## Code Examples

```
sforce.console.onFocusedPrimaryTab(eventHandler:Function)
```

```
<apex:page>

    <apex:includeScript value="/support/console/66.0/integration.js"/>

    <script type="text/javascript">
        var eventHandler = function (result) {
            alert('Focus changed to a different primary tab. The primary tab ID is:' 
        + result.id + 'and the object Id is:' + result.objectId);
        };
        sforce.console.onFocusedPrimaryTab(eventHandler);
    </script>
</apex:page>
```
