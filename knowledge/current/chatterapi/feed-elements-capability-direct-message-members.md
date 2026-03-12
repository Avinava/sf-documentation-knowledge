---
title: "Feed Elements Capability, Direct Message Members"
domain: chatterapi
topic: feed-elements-capability-direct-message-members
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.187Z
estimatedTokens: 282
keywords: [Feed, Elements, Capability, Direct, Message, Members]
---

# Feed Elements Capability, Direct Message Members

> Get all the members for a direct message.

# Feed Elements Capability, Direct Message Members

Get all the members for a direct message.

Resource

```

```

```

```

Available version

39.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| page | String | Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as currentPageToken or nextPageToken. If you pass in null, the first page is returned. | Optional | 40.0 |

Response body for GET

[Direct Message Member Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_direct_message_member_collection.htm "A collection of direct message members.")

If the feed element doesn’t support this capability, the response is [404: Not Found](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.").

## Code Examples

```
/chatter/feed-elements/feedElementId/capabilities/direct-message/members
```

```
/connect/communities/communityId/chatter/feed-elements/feedElementId/capabilities/direct-message/members
```

## Related Topics

- Direct Message Member Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_direct_message_member_collection.htm)
- 404: Not
            Found (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
