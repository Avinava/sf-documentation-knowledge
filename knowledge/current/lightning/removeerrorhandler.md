---
title: "removeErrorHandler()"
domain: lightning
topic: removeerrorhandler
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:48.542Z
estimatedTokens: 171
keywords: [removeErrorHandler, Unmounts, error, handling, function, Sample, Arguments]
---

# removeErrorHandler()

> Unmounts the error handling function.

# removeErrorHandler()

Unmounts the error handling function.

When using React, it’s necessary to unmount functions to remove them from the DOM and perform necessary cleanup.

## Sample

Used within a JavaScript app uploaded as a static resource and referenced by lightning:container, this example unmounts a message error handling function. In a React app, functions must be mounted to be part of the document-object model and rendered in the output.

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
componentWillUnmount() {
  LCC.removeErrorHandler(this.onMessageError);
}
```
