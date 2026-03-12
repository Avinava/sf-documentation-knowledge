---
title: "Feed Elements Capability, Mute"
domain: chatterapi
topic: feed-elements-capability-mute
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.219Z
estimatedTokens: 378
keywords: [Feed, Elements, Capability, Mute, whether, element, muted, unmute]
---

# Feed Elements Capability, Mute

> Get information about whether a feed element is muted, or mute or
      unmute a feed element.

# Feed Elements Capability, Mute

Get information about whether a feed element is muted, or mute or unmute a feed element.

Resource

```

```

```

```

Available version

35.0

Requires Chatter

Yes

HTTP methods

GET, HEAD, PATCH

Request body for PATCH

Root XML tag

<muteCapability>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| isMutedByMe | Boolean | Indicates whether the feed element is muted for the context user. Default value is false. | Required | 35.0 |

Request parameters for PATCH

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| isMutedByMe | Boolean | Indicates whether the feed element is muted for the context user. Default value is false. | Required | 35.0 |

Response body for GET and PATCH

[Mute Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_mute_capability.htm "If a feed element has this capability, users can mute it. Muted feed elements are visible in the muted feed, and invisible in all other feeds that respect mute.")

If the feed element doesn’t support this capability, the response is [404: Not Found](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.").

## Code Examples

```
/chatter/feed-elements/feedElementId/capabilities/mute
```

```
/connect/communities/communityId/chatter/feed-elements/feedElementId/capabilities/mute
```

```
{
   "isMutedByMe": true
}
```

## Related Topics

- Mute Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_mute_capability.htm)
- 404: Not
            Found (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
