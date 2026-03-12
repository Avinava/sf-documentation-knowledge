---
title: "Feed Elements Capability, Batch Update Read By"
domain: chatterapi
topic: feed-elements-capability-batch-update-read-by
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.241Z
estimatedTokens: 389
keywords: [Feed, Elements, Capability, Batch, Mark, multiple, context, user, time]
---

# Feed Elements Capability, Batch Update Read By

> Mark multiple feed elements as read by the context user at the same time.

# Feed Elements Capability, Batch Update Read By

Mark multiple feed elements as read by the context user at the same time.

Resource

```

```

```

```

Available version

40.0

Requires Chatter

Yes

HTTP methods

PATCH

Request body for PATCH

Root XML tag

<readByCapability>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| isReadByMe | Boolean | Specifies to mark the feed element as read (true) for the context user. | Required | 40.0 |
| lastReadDateByMe | String | Specifies the last date, in ISO 8601 format, when the feed element is marked as read for the context user. If you don’t specify a date or you specify a future date, the current system date is used. | Optional | 40.0 |

Request parameters for PATCH

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| isReadByMe | Boolean | Specifies to mark the feed element as read (true) for the context user. | Required | 40.0 |

Response body for PATCH

[Batch Results](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_batch_results.htm "Batch results.")

If the feed element doesn’t support this capability, the response is [404: Not Found](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.").

## Code Examples

```
/chatter/feed-elements/batch/feedElementIds/capabilities/read-by
```

```
/connect/communities/communityId/chatter/feed-elements/batch/feedElementIds/capabilities/read-by
```

```
{
   "isReadByMe": "true"
}
```

## Related Topics

- Batch Results (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_batch_results.htm)
- 404: Not
            Found (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
