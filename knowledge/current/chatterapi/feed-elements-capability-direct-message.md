---
title: "Feed Elements Capability, Direct Message"
domain: chatterapi
topic: feed-elements-capability-direct-message
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.183Z
estimatedTokens: 394
keywords: [Feed, Elements, Capability, Direct, Message, Access, element, members]
---

# Feed Elements Capability, Direct Message

> Access the direct message capability of a feed element. Update the
      members of a direct message.

# Feed Elements Capability, Direct Message

Access the direct message capability of a feed element. Update the members of a direct message.

Resource

```

```

```

```

Available version

39.0

HTTP methods

GET, PATCH

Request body for PATCH

Root XML tag

<directMessageCapability>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| membersToAdd | String[] | List of user IDs for members to include in the direct message. | Required when creating a direct message (POST)Optional when updating a direct message (PATCH) | 39.0 |
| membersToRemove | String[] | List of user IDs for members to remove from the direct message. | Optional when updating a direct message (PATCH)Not supported when creating a direct message (POST) | 40.0 |
| subject | String | Subject of the direct message. | Optional when creating a direct message (POST)Not supported when updating a direct message (PATCH) | 39.0 |

Response body for GET and PATCH

[Direct Message Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_direct_message_capability.htm "If a feed element has this capability, it’s a direct message.")

If the feed element doesn’t support this capability, the response is [404: Not Found](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.").

## Code Examples

```
/chatter/feed-elements/feedElementId/capabilities/direct-message
```

```
/connect/communities/communityId/chatter/feed-elements/feedElementId/capabilities/direct-message
```

```
{
   "membersToAdd": ["005R0000000I2X4","005R0000000I23Y","005R0000000IUV5"]
}
```

## Related Topics

- Direct Message Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_direct_message_capability.htm)
- 404: Not
            Found (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
