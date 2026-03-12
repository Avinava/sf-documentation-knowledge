---
title: "Feed Elements Capability, Approval"
domain: chatterapi
topic: feed-elements-capability-approval
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.119Z
estimatedTokens: 204
keywords: [Feed, Elements, Capability, Approval, Access, element]
---

# Feed Elements Capability, Approval

> Access the approval capability of a feed element.

# Feed Elements Capability, Approval

Access the approval capability of a feed element.

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

[Approval Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_approval_capability.htm#connect_responses_approval_capability "If a feed element has this capability, it includes information about an approval.")

If the feed element doesn’t support this capability, the response is [404: Not Found](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.").

## Code Examples

```
/chatter/feed-elements/feedElementId/capabilities/approval
```

```
/connect/communities/communityId/chatter/feed-elements/feedElementId/capabilities/approval
```

## Related Topics

- Approval Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_approval_capability.htm)
- 404: Not
            Found (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
