---
title: "setCustomConsoleComponentPopoutable()"
domain: service-cloud
topic: setcustomconsolecomponentpopoutable
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.691Z
keywords: [setCustomConsoleComponentPopoutable, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# setCustomConsoleComponentPopoutable()

# setCustomConsoleComponentPopoutable()

Sets a custom console component to be popped out or popped into a browser. To use this method, multi-monitor components must be turned on. This method is only available in API version 30.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| popoutable | boolean | If true, the component can be popped out or popped into a browser. If false, the component cannot be popped out or popped into a browser. |
| callback | function | JavaScript method that’s called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous, so it returns its response in an object in a callback method. The response object contains the following field:

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | true if enabling pop out or pop in functionality for the component was successful; false otherwise. |