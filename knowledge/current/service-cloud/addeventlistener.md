---
title: "addEventListener()"
domain: service-cloud
topic: addeventlistener
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:49.724Z
keywords: [addEventListener, Syntax, Arguments, Sample, Code, API, Version, 25.0, Later–Visualforce, Response, 30.0]
---

# addEventListener()

# addEventListener()

Adds a listener for a custom event type or a standard event type when the event is fired. This method adds a listener for custom event types in API version 25.0 or later; it adds a listener for standard event types in API version 30.0 or later.

For the list of standard events, see [Methods for Console Events](atlas.en-us.api_console.meta/api_console/sforce_api_console_methods_events.htm).

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| eventType | string | Custom event type for which eventListener listens. |
| eventListener | function | JavaScript method called when an eventType is fired. |
| additionalParams | object | Optional parameters accepted by this method. The supported properties on this object are tabId: The ID of the tab to listen for the specified event.This argument is only available in API version 30.0 or later. |

## Sample Code API Version 25.0 or Later–Visualforce

```

```

## Response

This method is asynchronous, so it returns its response in an object in a callback method. The response object contains the following field:

| Name | Type | Description |
| --- | --- | --- |
| message | string | The message which is sent with the fired event.If the response is from a custom keyboard shortcut, the message includes the following information on which the browser is focused, in this order:Object ID of the primary tabID of the primary tabObject ID of the subtabID of the subtab |

## Sample Code API Version 30.0 or Later–Visualforce

```

```

## Response

This method is asynchronous, so it returns its response in an object in a callback method. The response object contains the following field:

| Name | Type | Description |
| --- | --- | --- |
| message | string | The message which is sent with the fired event.If the response is from a console event, the message includes payload details as described in Methods for Console Events.If the response is from a custom keyboard shortcut, the message includes the following information on which the browser is focused, in this order:Object ID of the primary tabID of the primary tabObject ID of the subtabID of the subtab |