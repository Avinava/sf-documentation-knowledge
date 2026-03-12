---
title: "Feed Elements Capability, Record Snapshot"
domain: chatterapi
topic: feed-elements-capability-record-snapshot
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.251Z
estimatedTokens: 223
keywords: [Feed, Elements, Capability, Record, Snapshot, Access, element]
---

# Feed Elements Capability, Record Snapshot

> Access the record snapshot capability of a feed
    element.

# Feed Elements Capability, Record Snapshot

Access the record snapshot capability of a feed element.

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

[Record Snapshot Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_record_snapshot_capability.htm#connect_responses_record_snapshot_capability "If a feed element has this capability, it contains all the snapshotted fields of a record for a single create record event.")

If the feed element doesn’t support this capability, the response is [404: Not Found](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.").

## Code Examples

```
/chatter/feed-elements/feedElementId/capabilities/record-snapshot
```

```
/connect/communities/communityId/chatter/feed-elements/feedElementId/capabilities/record-snapshot
```

## Related Topics

- Record Snapshot Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_record_snapshot_capability.htm)
- 404: Not
            Found (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
