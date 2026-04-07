---
title: "Like a Feed Item and Return the Total Number of Likes"
domain: chatterapi
topic: like-a-feed-item-and-return-the-total-number-of-likes
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:37:24.258Z
estimatedTokens: 295
keywords: [Item, Total, Number, Likes]
---

> Like a feed item and get the total number of likes.

# Like a Feed Item and Return the Total Number of Likes

Like a feed item and get the total number of likes.

Resource

[/connect/batch/](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_batch.htm "Create a request body with a batch of up to 25 subrequests and send them to the server in a single request to improve your application’s performance. The response bodies and HTTP statuses for each subrequest in the batch are returned within a single response body. Each subrequest counts against rate limits.")

HTTP method

POST

Request body

[Generic Batch Collection Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_generic_batch_collection_input.htm#connect_requests_generic_batch_collection_input "Generic batch collection input.")

This Generic Batch Collection Input request body includes a batchRequests property that is a collection of [Batch Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_batch_input.htm "A single batch input to nest in a batch collection input.") request bodies.

Request body example

```

```

Returns

[Batch Results](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_batch_results.htm "Batch results.")

## Code Examples

```
{
   "batchRequests" : [
    {
       "method" : "Post",
       "url" : "/v66.0/chatter/feed-elements/feedElementId/capabilities/chatter-likes/items"
    },
    {
       "method" : "Get",
       "url" : "/v66.0/chatter/feed-elements/feedElementId/capabilities/chatter-likes/items"
    }
   ],
   "haltOnError" : "false"
}
```

## Related Topics

- /connect/batch/ (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_batch.htm)
- Generic Batch Collection Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_generic_batch_collection_input.htm)
- Batch Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_batch_input.htm)
- Batch Results (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_batch_results.htm)
