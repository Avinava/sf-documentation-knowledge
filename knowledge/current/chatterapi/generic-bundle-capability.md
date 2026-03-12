---
title: "Generic Bundle Capability"
domain: chatterapi
topic: generic-bundle-capability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.063Z
estimatedTokens: 235
keywords: [Generic, Bundle, Capability, feed, element, may, group, elements, condensed]
---

# Generic Bundle Capability

> If a feed element has this capability,
the feed element may be a group of other feed elements condensed into
one.

# Generic Bundle Capability

If a feed element has this capability, the feed element may be a group of other feed elements condensed into one.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

Bundled posts contain feed-tracked changes and are in record feeds only.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| bundleType | String | Type of bundle. The value is GenericBundle. | Small, 31.0 | 31.0 |
| page | Feed Element Page | A collection of feed elements. | Small, 31.0 | 31.0 |
| totalElements | Integer | The total number of feed elements that this bundle aggregates. | Small, 31.0 | 31.0 |

#### See Also

-   [Feed Element Capabilities](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_capabilities.htm "A container for all capabilities that can be included with a feed element.")

## Related Topics

- Feed Element Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_page.htm)
- Feed Element Capabilities (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_capabilities.htm)
