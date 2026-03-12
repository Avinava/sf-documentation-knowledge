---
title: "Feed Elements Capability, Social Post"
domain: chatterapi
topic: feed-elements-capability-social-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.255Z
estimatedTokens: 200
keywords: [Feed, Elements, Capability, Social, Post, Access, element]
---

# Feed Elements Capability, Social Post

> Access the social post capability of a feed
    element.

# Feed Elements Capability, Social Post

Access the social post capability of a feed element.

Resource

```

```

```

```

Available version

37.0

Requires Chatter

Yes

HTTP methods

GET, HEAD

Response body for GET

[Social Post Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_social_post_capability.htm "If a feed element has this capability, it can interact with a social post on a social network.")

If the feed element doesn’t support this capability, the response is [404: Not Found](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.").

## Code Examples

```
/chatter/feed-elements/feedElementId/capabilities/social-post
```

```
/connect/communities/communityId/chatter/feed-elements/feedElementId/capabilities/social-post
```

## Related Topics

- Social Post Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_social_post_capability.htm)
- 404: Not
            Found (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
