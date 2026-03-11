---
title: "addToBrowserTitleQueue() for Lightning Experience for Lightning Experience"
domain: service-cloud
topic: addtobrowsertitlequeue-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:47:50.137Z
keywords: [addToBrowserTitleQueue, Lightning, Experience, Note, Arguments, Aura, Components, Sample, Code, Response]
---

# addToBrowserTitleQueue() for Lightning Experience for Lightning Experience

# addToBrowserTitleQueue() for Lightning Experience for Lightning Experience

Adds a string to a list of titles that rotate in the browser title bar every three seconds.This method works only in Lightning console apps. This method isn’t supported for Lightning Web Components (LWC).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_console)

#### Note

Accurate browser tab titles help improve accessibility. Screen readers announce page titles when a page is first loaded, and don’t announce dynamic updates to the title. Use the root node of the document, like document.title, to announce the updated browser tab title instead.

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| title | string | The browser tab title to add. |

## Aura Components Sample Code

This component has a button that, when pressed, adds a string to a list of titles that rotate in the browser title bar every three seconds.

Component code:

```

```

Controller code:

```

```

## Response

This method returns a promise that, upon success, resolves to true.