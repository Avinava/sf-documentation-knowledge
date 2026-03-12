---
title: "Feed Elements Capability, Direct Message Original Members"
domain: chatterapi
topic: feed-elements-capability-direct-message-original-members
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.190Z
estimatedTokens: 193
keywords: [Feed, Elements, Capability, Direct, Message, Original, Members]
---

# Feed Elements Capability, Direct Message Original Members

> Get the original members for a direct message.

# Feed Elements Capability, Direct Message Original Members

Get the original members for a direct message.

Resource

```

```

```

```

Available version

40.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| page | String | Specifies the page token to use to view a page of information. Page tokens are returned as part of the response class, such as currentPageToken or nextPageToken. If you pass in null, the first page is returned. | Optional | 40.0 |

Response body for GET

[Direct Message Member Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_direct_message_member_collection.htm "A collection of direct message members.")

## Code Examples

```
/chatter/feed-elements/feedElementId/capabilities/direct-message/original-members
```

```
/connect/communities/communityId/chatter/feed-elements/feedElementId/capabilities/direct-message/original-members
```

## Related Topics

- Direct Message Member Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_direct_message_member_collection.htm)
