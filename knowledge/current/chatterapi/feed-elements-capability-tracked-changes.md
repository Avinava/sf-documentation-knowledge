---
title: "Feed Elements Capability, Tracked Changes"
domain: chatterapi
topic: feed-elements-capability-tracked-changes
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.270Z
estimatedTokens: 219
keywords: [Feed, Elements, Capability, Tracked, Changes, Access, element]
---

# Feed Elements Capability, Tracked Changes

> Access the tracked changes capability of a feed
    element.

# Feed Elements Capability, Tracked Changes

Access the tracked changes capability of a feed element.

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

[Tracked Changes Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_tracked_changes_capability.htm#connect_responses_tracked_changes_capability "If a feed element has this capability, it contains all changes to a record for a single tracked change event.")

If the feed element doesn’t support this capability, the response is [404: Not Found](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.").

## Code Examples

```
/chatter/feed-elements/feedElementId/capabilities/tracked-changes
```

```
/connect/communities/communityId/chatter/feed-elements/feedElementId/capabilities/tracked-changes
```

## Related Topics

- Tracked Changes Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_tracked_changes_capability.htm)
- 404: Not
            Found (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
