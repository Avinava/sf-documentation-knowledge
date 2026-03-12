---
title: "Chatter Feed Stream"
domain: chatterapi
topic: chatter-feed-stream
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.717Z
estimatedTokens: 675
keywords: [Chatter, Feed, Stream]
---

# Chatter Feed Stream

> Get information about, update, or delete a Chatter feed
    stream.

# Chatter Feed Stream

Get information about, update, or delete a Chatter feed stream.

Resource

```

```

```

```

Available version

39.0

Requires Chatter

Yes

HTTP methods

GET, PATCH, DELETE

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| globalScope | Boolean | Specifies whether to get streams from all the context user’s Experience Cloud sites, regardless of the communityId value.TipIf you know the site ID of the stream, we recommend using /connect/communities/communityId​/chatter/streams/streamId and not using globalScope. | Optional | 41.0 |

Response body for GET

[Chatter Stream](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_stream.htm "A Chatter feed stream.")

Request body for PATCH

Root XML tag

<stream>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| description | String | Description of the stream, up to 1,000 characters. | Optional | 39.0 |
| name | String | Name of the stream, up to 120 characters. | Required when creating a stream (POST)Optional when updating a stream (PATCH) | 39.0 |
| subscriptions​ToAdd | Stream Subscription Input[] | List of up to 25 entities whose feeds are included in the stream.Adding an entity that is already added results in no operation. Including the same entity in subscriptionsToAdd and subscriptionsToRemove results in no operation. | Optional | 39.0 |
| subscriptions​ToRemove | Stream Subscription Input[] | List of entities whose feeds are removed from the stream.Removing an entity that is already removed results in no operation. Including the same entity in subscriptionsToAdd and subscriptionsToRemove results in no operation. | Optional when updating a stream (PATCH)Not supported when creating a stream (POST) | 39.0 |

Request parameters for PATCH

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| description | String | Description of the stream, up to 1,000 characters. | Optional | 39.0 |
| name | String | Name of the stream, up to 120 characters. | Optional | 39.0 |

Response body for PATCH

[Chatter Stream](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_stream.htm "A Chatter feed stream.")

Response body for DELETE

[204: Successful Delete](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.")

## Code Examples

```
/connect/communities/communityId/chatter/streams/streamId
```

```
{
   "description" : "Feeds from my management hierarchy.",
   "name" : "Managers Stream",
   "subscriptionsToAdd" : {
      "subscriptions" : [
         {"entityId" : "00590000000Dk5F"},
         {"entityId" : "00590000000Fk4M"},
         {"entityId" : "00590000000Sy7N"},
         {"entityId" : "00590000000Dk4H"},
         {"entityId" : "00590000000Uk7L"}
         ]
      }
}
```

## Related Topics

- Chatter Stream (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_stream.htm)
- Stream Subscription Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_stream_subscription_input.htm)
- 204: Successful Delete (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
