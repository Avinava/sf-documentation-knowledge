---
title: "Feed Tracked Change"
domain: chatterapi
topic: feed-tracked-change
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.825Z
estimatedTokens: 262
keywords: [Feed, Tracked, Change]
---

# Feed Tracked Change

> Feed tracked change.

# Feed Tracked Change

Feed tracked change.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| fieldName | String | The name of the field that was updated. | Small, 29.0 | 29.0 |
| newValue | String | The new value of the field or null if the field length is long or empty. | Small, 29.0 | 29.0 |
| oldValue | String | The old value of the field or null if the field length is long or empty. | Small, 29.0 | 29.0 |

#### See Also

-   [Tracked Change Bundle Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_tracked_change_clumps_capability.htm "If a feed element has this capability, it has a group of other feed elements aggregated into one feed element called a bundle. This type of bundle aggregates feed tracked changes.")

-   [Tracked Changes Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_tracked_changes_capability.htm "If a feed element has this capability, it contains all changes to a record for a single tracked change event.")

## Related Topics

- Tracked Change Bundle Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_tracked_change_clumps_capability.htm)
- Tracked Changes Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_tracked_changes_capability.htm)
