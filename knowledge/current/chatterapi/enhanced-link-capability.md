---
title: "Enhanced Link Capability"
domain: chatterapi
topic: enhanced-link-capability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.443Z
estimatedTokens: 236
keywords: [Enhanced, Link, Capability, feed, element, may, contain, supplemental, icon, title]
---

# Enhanced Link Capability

> If a feed element has this capability, it has a link that may contain supplemental
    information like an icon, a title, and a description.

# Enhanced Link Capability

If a feed element has this capability, it has a link that may contain supplemental information like an icon, a title, and a description.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| description | String | A description with a 500 character limit. | Small, 32.0 | 32.0 |
| icon | Icon | A icon. | Small, 32.0 | 32.0 |
| linkRecordId | String | A ID associated with the link if the link URL refers to a Salesforce record. | Small, 32.0 | 32.0 |
| linkUrl | String | A link URL to a detail page if available content can’t display inline. | Small, 32.0 | 32.0 |
| title | String | A title to a detail page. | Small, 32.0 | 32.0 |

#### See Also

-   [Feed Element Capabilities](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_capabilities.htm "A container for all capabilities that can be included with a feed element.")

## Related Topics

- Icon (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_icon.htm)
- Feed Element Capabilities (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_capabilities.htm)
