---
title: "Batch Resource"
domain: chatterapi
topic: batch-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.653Z
estimatedTokens: 1404
keywords: [Batch, Resource, subrequests, send, server, improve, application’s, performance, bodies, HTTP, statuses, subrequest, counts, against, rate]
---

# Batch Resource

> Create a request body with a batch of up to 25 subrequests and
            send them to the server in a single request to improve your application’s
            performance. The response bodies and HTTP statuses for each subrequest in the batch are
            returned within a single response body. Each subrequest counts against rate
        limits.

# Batch Resource

Create a request body with a batch of up to 25 subrequests and send them to the server in a single request to improve your application’s performance. The response bodies and HTTP statuses for each subrequest in the batch are returned within a single response body. Each subrequest counts against rate limits.

Use this resource to minimize the number of round-trips between the client and the server. For example, in a mobile app, when a user taps the button to like a feed item, the response body includes information about the like, but it doesn’t include the total number of likes on the feed item. To like the feed item, POST a request to /chatter/feed-elements/feedElementId/capabilities/chatter-likes/items. To get the like total, GET the feed item information from /chatter/feed-elements/feedElementId/capabilities/chatter-likes/items.

Add both requests to a [Generic Batch Collection Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_generic_batch_collection_input.htm#connect_requests_generic_batch_collection_input "Generic batch collection input.") request body and send them both in a single POST request to /connect/batch:

```

```

The requests in a batch are called *subrequests*. All subrequests are executed in the context of the same user. Subrequests are independent and information can’t be passed between them. Subrequests execute serially in their order in the request body. When a subrequest executes successfully, it commits its data. Commits are reflected in the output of later subrequests (as in the previous example which liked a feed item then got the total number of likes). If a subrequest fails, commits made by previous subrequests are not rolled back.

Resource

```

```

Available since version

28.0

HTTP methods

POST

Request body

[Generic Batch Collection Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_generic_batch_collection_input.htm#connect_requests_generic_batch_collection_input "Generic batch collection input.")

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

Request parameters

None.

Response

[Batch Results](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_batch_results.htm "Batch results.")

Example

This example is a POST request made to https://instance\_name/services/data/v66.0/connect/batch that includes the following request body containing two subrequests:

```

```

The Batch Results response body includes a Batch Result Item response body for each subrequest:

```

```

Example: haltOnError is true

This example is the same as the previous example but it includes an error in the first subrequest and haltOnError is set to true. Note that the first subrequest contains a typo.

```

```

The Batch Results response body includes a Batch Result Item response body for each subrequest. The top-level request to /connect/batch returns an HTTP 200, but the first subrequest returns an HTTP 404 because the resource can’t be found. Because haltOnError is true, the next subrequest returns an HTTP 412. Also note that hasErrors is true.

```

```

## Post multiple comments with binary files

This example is a generic batch request to [/connect/batch](# "Create a request body with a batch of up to 25 subrequests and send them to the server in a single request to improve your application’s performance. The response bodies and HTTP statuses for each subrequest in the batch are returned within a single response body. Each subrequest counts against rate limits.") that contains two subrequests. Each subrequest comments on a feed item and uploads a binary file to the comment.

Include the request body of each subrequest in the richInput properties.

Also include information about the binary parts in the binaryPartName and binaryPartNameAlias properties.

Here is the cURL example.

```

```

Here is the multipart/form-data request body.

```

```

#### See Also

-   [Like a Feed Item and Return the Total Number of Likes](atlas.en-us.chatterapi.meta/chatterapi/quickreference_like_feed_item_return_number_of_likes.htm "Like a feed item and get the total number of likes.")

-   [Feed Elements, Batch Post](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_batch_post.htm "Post a batch of up to 500 feed elements.")

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

```
{
   "batchRequests" : [
    {
       "method" : "Get",
       "url" : "/v66.0/chatter/feeds/user-profile/me"
    },
    {
       "method" : "Get",
       "url" : "/v66.0/chatter/feeds/news/me"
    }
   ]
}
```

```
{
   "hasErrors": false,
   "results": [
      {
         "result": {
            "feedElementPostUrl": "/services/data/v66.0/chatter/feed-elements",
            "feedElementsUrl": "/services/data/v66.0/chatter/feeds
/user-profile/005D0000001LL8OIAW/feed-elements",
            "isModifiedUrl": null
         },
         "statusCode": 200
      },
      {
         "result": {
            "feedElementPostUrl": "/services/data/v66.0/chatter/feed-elements",
            "feedElementsUrl": "/services/data/v66.0/chatter/feeds
/news/005D0000001LL8OIAW/feed-elements",
            "isModifiedUrl": null
         },
         "statusCode": 200
      }
   ]
}
```

```
{
   "batchRequests" : [
    {
       "method" : "Get",
       "url" : "/v66.0/chatter/feeds/user-profile/men"
    },
    {
       "method" : "Get",
       "url" : "/v66.0/chatter/feeds/news/me"
    }
   ],
   "haltOnError" : "true"
}
```

## Related Topics

- Generic Batch Collection Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_generic_batch_collection_input.htm)
- Generic Batch Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_generic_batch_input.htm)
- Batch
                        Results (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_batch_results.htm)
- Like a Feed Item and Return the Total Number of Likes (atlas.en-us.chatterapi.meta/chatterapi/quickreference_like_feed_item_return_number_of_likes.htm)
- Feed Elements, Batch Post (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_feed_element_batch_post.htm)
