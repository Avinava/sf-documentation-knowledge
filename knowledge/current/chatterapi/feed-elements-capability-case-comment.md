---
title: "Feed Elements Capability, Case Comment"
domain: chatterapi
topic: feed-elements-capability-case-comment
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.145Z
estimatedTokens: 208
keywords: [Feed, Elements, Capability, Case, Comment, Access, element]
---

# Feed Elements Capability, Case Comment

> Access the case comment capability of a feed
    element.

# Feed Elements Capability, Case Comment

Access the case comment capability of a feed element.

Resource

```

```

```

```

Available version

32.0

Requires Chatter

Yes

HTTP methods

GET, HEAD

Response bodies for GET

[Case Comment Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_case_comment_capability.htm#connect_responses_case_comment_capability "If a feed element has this capability, it has a case comment on the case feed.")

If the feed element doesn’t support this capability, the response is [404: Not Found](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.").

## Code Examples

```
/chatter/feed-elements/feedElementId/capabilities/case-comment
```

```
/connect/communities/communityId/chatter/feed-elements/feedElementId/capabilities/case-comment
```

## Related Topics

- Case Comment Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_case_comment_capability.htm)
- 404: Not
            Found (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
