---
title: "selectMacro()"
domain: service-cloud
topic: selectmacro
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.656Z
keywords: [selectMacro, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# selectMacro()

# selectMacro()

Selects and displays a specific macro in the macro widget. This method is only available in API version 36.0 or later. This method isn’t supported in Lightning Console.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| callback | function | JavaScript method that is called when the method is completed |
| macroID | string | ID of the macro that’s selected |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous, so it returns its response in an object in a callback method. The response object contains the following field:

| Name | Type | Description |
| --- | --- | --- |
| cause | string | Explanation of function failure, if applicable |
| success | boolean | true if selecting the macro was successful; false otherwise |