---
title: "onCallLogSaved()"
domain: service-cloud
topic: oncalllogsaved
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:56.310Z
estimatedTokens: 229
keywords: [onCallLogSaved, Registers, function, fired, interaction, log, saves, call, send, custom, console, component, API, version, 31.0]
---

# onCallLogSaved()

> Registers a function that is fired when an interaction
            log saves a call log. Use to get information or send information between an interaction
                log and a custom console component.
            This method is only available in API version 31.0 or
        later.

# onCallLogSaved()

Registers a function that is fired when an interaction log saves a call log. Use to get information or send information between an interaction log and a custom console component. This method is only available in API version 31.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| eventHandler | function | For a standard interaction log, eventHandler is a function that is executed when a call log is saved. For a custom interaction log, eventHandler is a function that is executed when the fireOnCallLogSaved API is called in your Visualforce page. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous, so it returns its response in an object in a callback method. The response object contains the following field:

| Name | Type | Description |
| --- | --- | --- |
| id | string | Call log object ID that was saved. |

## Code Examples

```
sforce.console.cti.onCallLogSaved( eventHandler:Function )
```

```
<apex:page>
    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">

        var callback = function (result) {
            alert('Call Log was saved! Object Id saved is : ' + result.id);
        };

        sforce.console.cti.onCallLogSaved(callback);

  </script>
    <p>Registered onCallLogSaved listener...</p>
</apex:page>
```
