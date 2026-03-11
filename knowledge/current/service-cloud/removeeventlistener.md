---
title: "removeEventListener()"
domain: service-cloud
topic: removeeventlistener
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.631Z
keywords: [removeEventListener, Syntax, Arguments, Sample, Code, API, Version, 25.0, Later–Visualforce, Response, 30.0]
---

# removeEventListener()

# removeEventListener()

Removes a listener for a custom event type or a standard event type. This method removes a listener for custom event types in API version 25.0 or later; it removes a listener for standard event types in API version 30.0 or later.

For the list of standard events, see [Methods for Console Events](atlas.en-us.api_console.meta/api_console/sforce_api_console_methods_events.htm).

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| eventType | string | Event type for which eventListener is removed. |
| eventListener | function | Event listener to remove. |
| additionalParams | object | Optional parameters accepted by this method. The supported properties on this object are tabId: The ID of the tab to remove the listener for the specified event.This argument is only available in API version 30.0 or later. |

## Sample Code API Version 25.0 or Later–Visualforce

```

```

## Response

None

## Sample Code API Version 30.0 or Later–Visualforce

```

```

## Response

None