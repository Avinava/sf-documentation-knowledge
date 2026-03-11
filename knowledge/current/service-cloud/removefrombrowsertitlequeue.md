---
title: "removeFromBrowserTitleQueue()"
domain: service-cloud
topic: removefrombrowsertitlequeue
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.634Z
keywords: [removeFromBrowserTitleQueue, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# removeFromBrowserTitleQueue()

# removeFromBrowserTitleQueue()

Removes a browser tab title from the list of titles, which rotates every three seconds. This method is only available in API version 28.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| title | string | Browser tab title to remove. |
| callback | function | JavaScript method that’s called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following fields:

| Name | Type | Description |
| --- | --- | --- |
| success | boolean | If true, the title was successfully removed from the browser title queue. If false, the title wasn’t removed from the browser title queue. |
| callback | function | JavaScript method that’s called upon completion of the method. |