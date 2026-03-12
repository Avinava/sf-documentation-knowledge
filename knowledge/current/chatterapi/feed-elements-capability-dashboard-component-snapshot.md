---
title: "Feed Elements Capability, Dashboard Component Snapshot"
domain: chatterapi
topic: feed-elements-capability-dashboard-component-snapshot
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.179Z
estimatedTokens: 246
keywords: [Feed, Elements, Capability, Dashboard, Component, Snapshot, Access, element]
---

# Feed Elements Capability, Dashboard Component Snapshot

> Access the dashboard component capability of a feed
    element.

# Feed Elements Capability, Dashboard Component Snapshot

Access the dashboard component capability of a feed element.

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

[Dashboard Component Snapshot Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_dashboard_component_snapshot_capability.htm#connect_responses_dashboard_component_snapshot_capability "If a feed element has this capability, it has a dashboard component snapshot. A snapshot is a static image of a dashboard component at a specific point in time.")

If the feed element doesn’t support this capability, the response is [404: Not Found](atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm "The response header contains an HTTP status code. If the response isn’t successful, the response body contains an error message, and if appropriate, information about the field or object where the error occurred.").

## Code Examples

```
/chatter/feed-elements/feedElementId/capabilities/dashboard-component-snapshot
```

```
/connect/communities/communityId/chatter/feed-elements/feedElementId/capabilities/dashboard-component-snapshot
```

## Related Topics

- Dashboard Component Snapshot Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_dashboard_component_snapshot_capability.htm)
- 404: Not
            Found (atlas.en-us.chatterapi.meta/chatterapi/connect_error_responses.htm)
