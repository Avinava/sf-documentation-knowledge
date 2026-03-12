---
title: "Alternative Input"
domain: chatterapi
topic: alternative-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:10.959Z
estimatedTokens: 123
keywords: [Alternative, Input, representation, extension, feed, element]
---

# Alternative Input

> Alternative representation for an extension on a feed
    element.

# Alternative Input

Alternative representation for an extension on a feed element.

Root XML tag

<alternativeInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| text​Representation | String | Text representation of the extension. | Required | 40.0 |
| thumbnailUrl | String | Thumbnail URL to the extension. | Optional | 40.0 |
| title | String | Title of the extension. | Optional | 40.0 |

## Code Examples

```
{
   "textRepresentation": "Quip document with ID 132452345",
   "thumbnailUrl": "http://salesforce.quip.com?id=132452345",
   "title": "Quip"
}
```
