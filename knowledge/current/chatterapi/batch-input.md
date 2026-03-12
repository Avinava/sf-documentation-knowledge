---
title: "Batch Input"
domain: chatterapi
topic: batch-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:11.060Z
estimatedTokens: 303
keywords: [Batch, Input, nest, collection]
---

# Batch Input

> A single batch input to nest in a batch collection
    input.

# Batch Input

A single batch input to nest in a batch collection input.

JSON example

Example without a binary part:

```

```

Example with a binary part:

```

```

In this example, the name parameter in the Content-Disposition header of the binary body part must have the value bin1.

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| binaryPartNames | String[] | List of the name parameters in the Content-Disposition header of the binary body parts to include with this input. If this value exists, the corresponding binary part must be included in the request.NoteWhen used with the /chatter/feed-elements/batch resource, this property can contain only one value, not a list of values. | Optional | 32.0 |
| richInput |  | An input body (request body) for the request. The richInput property must contain the request body that the resource expects.The /chatter/feed-elements/batch resource expects a Feed Item Input request body. | Required | 32.0 |

#### See Also

-   [Batch Collection Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_batch_collection_input.htm "Describes a collection of inputs for a batch request.")

## Code Examples

```
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
}
```

```
{
      "binaryPartNames": [
        "bin1"
      ],
      "richInput": {
        "subjectId": "me",
        "body": {
          "messageSegments": [
            {
              "type": "Text",
              "text": "Please accept this receipt"
            }
          ]
        },
        "capabilities": {
          "content": {
            "description": "Receipt for expenses",
            "title": "receipt.pdf"
          }
        },
        "feedElementType": "FeedItem"
      }
    }
```

## Related Topics

- /chatter/feed-elements/batch (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_batch_post.htm)
- Feed Item Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_item_input.htm)
- Batch Collection Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_batch_collection_input.htm)
