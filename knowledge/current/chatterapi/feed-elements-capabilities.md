---
title: "Feed Elements Capabilities"
domain: chatterapi
topic: feed-elements-capabilities
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.115Z
estimatedTokens: 213
keywords: [Feed, Elements, Capabilities, Access, element's]
---

# Feed Elements Capabilities

> Access a feed element's set of capabilities.

# Feed Elements Capabilities

Access a feed element's set of capabilities.

Resource

```

```

```

```

Available version

31.0

Requires Chatter

Yes

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| elementsPerBundle | Integer | Maximum number of feed elements to include in a bundle. The value must be an integer between 0 and 10. The default value is 3. | Optional | 31.0 |
| recentCommentCount | Integer | Maximum number of comments to return with each feed element. The default value is 3. | Optional | 31.0 |

Response body for GET

[Feed Element Capabilities](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_capabilities.htm "A container for all capabilities that can be included with a feed element.")

## Code Examples

```
/chatter/feed-elements/feedElementId/capabilities
```

```
/connect/communities/communityId/chatter/feed-elements/feedElementId/capabilities
```

## Related Topics

- Feed Element Capabilities (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_capabilities.htm)
