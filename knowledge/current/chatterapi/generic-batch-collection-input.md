---
title: "Generic Batch Collection Input"
domain: chatterapi
topic: generic-batch-collection-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:11.790Z
estimatedTokens: 422
keywords: [Generic, Batch, Collection, Input]
---

# Generic Batch Collection Input

> Generic batch collection input.

# Generic Batch Collection Input

Generic batch collection input.

Root XML Tag

<batch>

JSON

```

```

Properties

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| batchRequests | Generic Batch Input[] | Collection of Batch Request Input request bodies containing the subrequest URLs to execute. | 28.0 |
| haltOnError | Boolean | Controls whether Salesforce stops processing subrequests if a subrequest fails. The default value is false.If the value is false and a subrequest in the batch does not complete, Salesforce attempts to execute subsequent subrequests in the batch.If the value is true and a subrequest in the batch doesn’t complete due to an HTTP response in the 400 or 500 range, Salesforce halts execution. It doesn’t attempt to execute subsequent subrequests in the batch. It returns an HTTP 412 status code and a BATCH_PROCESSING_HALTED error message for each subsequent subrequest indicating that a previous request was unsuccessful. The top-level request to /connect/batch returns HTTP 200, and the hasErrors property in the response is set to true.NoteBefore subrequests are executed, Salesforce verifies that the entire request, including subrequests, is formed properly. If it isn't, Salesforce returns an HTTP 400 Bad Request and doesn't execute subrequests, regardless of the value of haltOnError. Examples of a bad request are a subrequest using the wrong method or having an error in its URL. | 28.0 |

#### See Also

-   [Like a Feed Item and Return the Total Number of Likes](atlas.en-us.chatterapi.meta/chatterapi/quickreference_like_feed_item_return_number_of_likes.htm "Like a feed item and get the total number of likes.")

## Code Examples

```
{
   "batchRequests" : [
    {
       "method" : "Get",
       "url" : "/v66.0/chatter/feeds/news/me"
    },
    {
       "method" : "Get",
       "url" : "/v66.0/chatter/feeds/user-profile/me"
    }
   ]
}
```

## Related Topics

- Generic Batch Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_generic_batch_input.htm)
- Like a Feed Item and Return the Total Number of Likes (atlas.en-us.chatterapi.meta/chatterapi/quickreference_like_feed_item_return_number_of_likes.htm)
