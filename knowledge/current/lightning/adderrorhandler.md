---
title: "addErrorHandler()"
domain: lightning
topic: adderrorhandler
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.530Z
estimatedTokens: 156
keywords: [addErrorHandler, Mounts, error, handling, function, messaging, framework, encounters, Sample, Arguments]
---

# addErrorHandler()

> Mounts an error handling function, to be called when the messaging framework encounters
  an error.

# addErrorHandler()

Mounts an error handling function, to be called when the messaging framework encounters an error.

## Sample

Used within a JavaScript app uploaded as a static resource and referenced by lightning:container, this example mounts a message error handling function. In a React app, functions must be mounted to be part of the document-object model and rendered in the output.

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| handler: (errorMsg: string) => void) | function | The function that handles error messages encountered in the messaging framework. |

## Response

None.

## Code Examples

```
componentDidMount() {
  LCC.addErrorHandler(this.onMessageError);
}
```
