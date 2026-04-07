---
title: "Tracked Changes Capability"
domain: chatterapi
topic: tracked-changes-capability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:23.520Z
estimatedTokens: 142
keywords: [Tracked, Changes, Capability, record, change, event]
---

> If a feed element has this capability, it contains all changes to a record for a single
    tracked change event.

# Tracked Changes Capability

If a feed element has this capability, it contains all changes to a record for a single tracked change event.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| changes | Feed Tracked Change[] | Collection of feed tracked changes. | Small, 32.0 | 32.0 |

#### See Also

-   [Feed Element Capabilities](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_capabilities.htm "A container for all capabilities that can be included with a feed element.")

## Related Topics

- Feed Tracked Change (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_tracked_change.htm)
- Feed Element Capabilities (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_capabilities.htm)
