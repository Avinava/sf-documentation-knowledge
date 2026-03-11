---
title: "fireEvent()"
domain: service-cloud
topic: fireevent
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:49.916Z
keywords: [fireEvent, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# fireEvent()

# fireEvent()

Fires a custom event. This method is only available in API version 25.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| eventType | string | The type of custom event to fire. |
| message | string | The message which is sent with the fired event. |
| callback | function | JavaScript method called when the custom event is fired. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous, so it returns its response in an object in a callback method. The response object contains the following field:

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | true if firing the event is successful, false if firing the event wasn’t successful. |