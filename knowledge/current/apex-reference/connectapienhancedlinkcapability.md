---
title: "ConnectApi.EnhancedLinkCapability"
domain: apex-reference
topic: connectapienhancedlinkcapability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:38.685Z
keywords: [ConnectApi.EnhancedLinkCapability, See]
---

# ConnectApi.EnhancedLinkCapability

# ConnectApi.EnhancedLinkCapability

If a feed element has this capability, it has a link that may contain supplemental information like an icon, a title, and a description.

Subclass of [ConnectApi.FeedElementCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capability.htm "A feed element capability, which defines the characteristics of a feed element.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| description | String | A description with a 500 character limit. | 32.0 |
| icon | ConnectApi.Icon | A icon. | 32.0 |
| linkRecordId | String | A ID associated with the link if the link URL refers to a Salesforce record. | 32.0 |
| linkUrl | String | A link URL to a detail page if available content can’t display inline. | 32.0 |
| title | String | A title to a detail page. | 32.0 |

#### See Also

-   [ConnectApi.FeedElementCapabilities](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capabilities.htm "A container for all capabilities that can be included with a feed element.")