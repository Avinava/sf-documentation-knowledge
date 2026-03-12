---
title: "Batch Collection Input"
domain: chatterapi
topic: batch-collection-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.056Z
estimatedTokens: 107
keywords: [Batch, Collection, Input, inputs]
---

# Batch Collection Input

> Describes a collection of inputs for a batch
    request.

# Batch Collection Input

Describes a collection of inputs for a batch request.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| inputs | Batch Input[] | Collection of inputs (request bodies) to be processed together. Every Batch Input request body’s richInput property must contain the same type of request body. | Required | 32.0 |

## Code Examples

```
{
   "inputs": [
   {
      "richInput": {
         "subjectId": "me",
         "body": {
            "messageSegments": [
            {
               "type": "Text",
               "text": "Post Number 1"
            }]
         },
         "feedElementType": "FeedItem"
      }
   }, {
      "richInput": {
         "subjectId": "me",
         "body": {
            "messageSegments": [
            {
               "type": "Text",
               "text": "Post Number 2"
            }]
         },
         "feedElementType": "FeedItem"
      }
   }]
}
```

## Related Topics

- Batch Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_batch_input.htm)
