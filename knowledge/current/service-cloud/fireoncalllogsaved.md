---
title: "fireOnCallLogSaved()"
domain: service-cloud
topic: fireoncalllogsaved
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:49.927Z
keywords: [fireOnCallLogSaved, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# fireOnCallLogSaved()

# fireOnCallLogSaved()

Calls the eventHandler function registered with [onCallLogSaved()](atlas.en-us.api_console.meta/api_console/sforce_api_console_oncalllogsaved.htm "Registers a function that is fired when an interaction log saves a call log. Use to get information or send information between an interaction log and a custom console component. This method is only available in API version 31.0 or later."). Use to get information or send information between an interaction log and a custom console component.. This method is only available in API version 31.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| id | string | The object ID of the saved call log. |
| callback | function | JavaScript method called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous, so it returns its response in an object in a callback method. The response object contains the following field:

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | true if firing the event is successful, false otherwise. |