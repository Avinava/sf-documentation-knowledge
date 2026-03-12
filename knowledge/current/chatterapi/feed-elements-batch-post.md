---
title: "Feed Elements, Batch Post"
domain: chatterapi
topic: feed-elements-batch-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.111Z
estimatedTokens: 727
keywords: [Feed, Elements, Batch, Post, binary, files, version, 35.0, earlier]
---

# Feed Elements, Batch Post

> Post a batch of up to 500 feed elements.

# Feed Elements, Batch Post

Post a batch of up to 500 feed elements.

Resource

```

```

```

```

Available version

32.0

Requires Chatter

Yes

HTTP methods

POST, HEAD

Request body for POST

[Batch Collection Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_batch_collection_input.htm#connect_requests_batch_collection_input "Describes a collection of inputs for a batch request.")

The rich input for this batch collection is a [Feed Item Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_item_input.htm#connect_requests_feed_item_input "Feed item input.")

Response body for POST

[Batch Results](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_batch_results.htm "Batch results.")

The Batch Results response body contains [Feed Item](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item.htm "A feed is made up of feed elements. A feed item is a type of feed element.") response bodies corresponding to each of the request bodies. The Feed Item response bodies are returned in the same order as the request bodies.

The request returns an HTTP 200 status code unless an error occurs that affects the entire request (such as a parsing failure). If an individual request body causes an error, the Batch Results Item statusCode property contains the appropriate HTTP status code.

Post a batch of feed elements

This example uses the /chatter/feed-elements/batch resource to post a batch of feed elements. This example uses cURL.

```

```

Here’s the same example showing just the request body:

```

```

## Post a batch of feed elements with binary files (version 35.0 and earlier)

This example uses the [/chatter/feed-elements/batch](# "Post a batch of up to 500 feed elements.") resource to post a batch of feed elements, upload two binary files, and attach them to the feed elements in the batch. Include the information about the binary parts in the request body. This example uses cURL.

```

```

Here is the same example formatted to show the request body parts.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

The binary part names in the binaryPartNames properties must match the binary part names in the name properties of the binary request parts.

#### See Also

-   [Inputs and Binary File Upload Examples](atlas.en-us.chatterapi.meta/chatterapi/intro_input.htm "Make HTTP POST, PATCH, and PUT requests using inputs and learn more about uploading binary files.")

-   [Batch Resource](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_batch.htm "Create a request body with a batch of up to 25 subrequests and send them to the server in a single request to improve your application’s performance. The response bodies and HTTP statuses for each subrequest in the batch are returned within a single response body. Each subrequest counts against rate limits.")

## Code Examples

```
/connect/communities/communityId/chatter/feed-elements/batch
```

```
curl -H "X-PrettyPrint: 1" -F 'json={"inputs":[{"richInput":{"subjectId":"me","body":{"messageSegments":[{"type":"Text","text":"Post Number 1"}]},"feedElementType":"FeedItem"}},{"richInput":{"subjectId":"me","body":{"messageSegments":[{"type":"Text","text":"Post Number 2"}]},"feedElementType":"FeedItem"}}]};type=application/json' -X POST https://instance_name/services/data/v66.0/chatter/feed-elements/batch -H 'Authorization: OAuth 00DD00000007HoR!...' --insecure
```

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
            }
          ]
        },
        "feedElementType": "FeedItem"
      }
    },
    {
      "richInput": {
        "subjectId": "me",
        "body": {
          "messageSegments": [
            {
              "type": "Text",
              "text": "Post Number 2"
            }
          ]
        },
        "feedElementType": "FeedItem"
      }
    }
  ]
}
```

```
curl -H "X-PrettyPrint: 1" -F 'json={"inputs":[{"binaryPartNames":["bin1"], "richInput":{"subjectId":"me","body":{
"messageSegments":[{"type":"Text","text":"Please accept this receipt"}]},"capabilities": {"content" : {"description": "Receipt for expenses", "title":"receipt.pdf"}},"feedElementType":"FeedItem"}},
{"binaryPartNames":["bin2"],"richInput":{"subjectId":"me","body":{"messageSegments":[{"type":"Text","text":"Post Number 2"}]},
"capabilities": {"content" : {"description": "Receipt for expenses", "title":"receipt2.pdf"}},"feedElementType":"FeedItem"}}]};type=application/json' 
-F "bin1=@/Users/jsmith/Desktop/receipt.pdf;type=application/octet-stream" -F "bin2=@/Users/jsmith/Desktop/receipt2.pdf;type=application/octet-stream" 
-X POST https://instance_name/services/data/v35.0/chatter/feed-elements/batch 
-H 'Authorization: OAuth 00DD00000007HoR44QATPNzhzYEJBfU' --insecure
```

```
POST /services/data/v35.0/chatter/feed-elements/batch HTTP/1.1
Authorization: OAuth 00DRR0000000N0g!...
User-Agent: Jakarta Commons-HttpClient/3.0.1
Host: instance_name
Content-Length: 845
Content-Type: multipart/form-data; boundary=a7V4kRcFA8E79pivMuV2tukQ85cmNKeoEgJgq
Accept: application/json

--a7V4kRcFA8E79pivMuV2tukQ85cmNKeoEgJgq
Content-Disposition: form-data; name="json"
Content-Type: application/json; charset=UTF-8

{
  "inputs": [
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
    },
    {
      "binaryPartNames": [
        "bin2"
      ],
      "richInput": {
        "subjectId": "me",
        "body": {
          "messageSegments": [
            {
              "type": "Text",
              "text": "Post Number 2"
            }
          ]
        },
        "capabilities": {
          "content": {
            "description": "Receipt for expenses",
            "title": "receipt2.pdf"
          }
        },
        "feedElementType": "FeedItem"
      }
    }
  ]
}

--a7V4kRcFA8E79pivMuV2tukQ85cmNKeoEgJgq
Content-Disposition: form-data; name="bin1"; filename="receipt.pdf"
Content-Type: application/octet-stream; charset=ISO-8859-1

...contents of receipt.pdf...


--a7V4kRcFA8E79pivMuV2tukQ85cmNKeoEgJgq
Content-Disposition: form-data; name="bin2"; filename="receipt2.pdf"
Content-Type: application/octet-stream; charset=ISO-8859-1

...contents of receipt2.pdf...

--a7V4kRcFA8E79pivMuV2tukQ85cmNKeoEgJgq--
```

## Related Topics

- Batch Collection Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_batch_collection_input.htm)
- Feed Item Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_item_input.htm)
- Batch Results (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_batch_results.htm)
- Feed Item (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item.htm)
- Inputs and Binary File Upload Examples (atlas.en-us.chatterapi.meta/chatterapi/intro_input.htm)
- Batch Resource (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_batch.htm)
