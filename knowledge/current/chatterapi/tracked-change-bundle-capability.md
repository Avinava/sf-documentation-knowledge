---
title: "Tracked Change Bundle Capability"
domain: chatterapi
topic: tracked-change-bundle-capability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:21.401Z
estimatedTokens: 277
keywords: [Tracked, Change, Bundle, Capability, feed, element, group, elements, aggregated, aggregates, changes]
---

# Tracked Change Bundle Capability

> If a feed element has this capability, it has a group of other feed elements aggregated
        into one feed element called a bundle. This type of bundle aggregates feed
        tracked changes.

# Tracked Change Bundle Capability

If a feed element has this capability, it has a group of other feed elements aggregated into one feed element called a bundle. This type of bundle aggregates feed tracked changes.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

Bundled posts contain feed-tracked changes and are in record feeds only.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| changes | Feed Tracked Change[] | Collection of feed tracked changes. | Small, 31.0 | 31.0 |
| bundleType | String | Type of bundle. The value is TrackedChanges. | Small, 31.0 | 31.0 |
| page | Feed Element Page | A collection of feed elements. | Small, 31.0 | 31.0 |
| totalElements | Integer | The total number of feed elements that this bundle aggregates. | Small, 31.0 | 31.0 |

#### See Also

-   [Feed Element Capabilities](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_capabilities.htm "A container for all capabilities that can be included with a feed element.")

## Related Topics

- Feed Tracked
                                Change (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_tracked_change.htm)
- Feed Element Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_page.htm)
- Feed Element Capabilities (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_capabilities.htm)
