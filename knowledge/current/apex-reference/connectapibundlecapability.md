---
title: "ConnectApi.BundleCapability"
domain: apex-reference
topic: connectapibundlecapability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:25.837Z
estimatedTokens: 411
keywords: [ConnectApi.BundleCapability, feed, element, capability, container, elements, called, bundle.]
---

# ConnectApi.BundleCapability

> If a feed element has this capability, it has a container of feed
   elements called a bundle.

# ConnectApi.BundleCapability

If a feed element has this capability, it has a container of feed elements called a bundle.

This class is abstract.

Subclass of [ConnectApi.FeedElementCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capability.htm "A feed element capability, which defines the characteristics of a feed element.").

Superclass of:

-   [ConnectApi.GenericBundleCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_generic_bundle_capability.htm "If a feed element has this capability, the feed element has a group of other feed elements condensed into one feed element. This group is called a bundle.")
-   [ConnectApi.TrackedChangeBundleCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_tracked_change_bundle_capability.htm "If a feed element has this capability, it has a group of other feed elements aggregated into one feed element called a bundle. This type of bundle aggregates feed tracked changes.")

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| bundleType | ConnectApi.​BundleType | Defines this feed element's bundle type. The bundle type determines what additional information appears in the bundle. | 31.0 |
| page | ConnectApi.​FeedElement​Page | A collection of feed elements. | 31.0 |
| totalElements | Integer | The total number of feed elements that this bundle aggregates. | 31.0 |

#### See Also

-   [ConnectApi.FeedElementCapabilities](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capabilities.htm "A container for all capabilities that can be included with a feed element.")

## Related Topics

- ConnectApi.FeedElementCapability (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capability.htm)
- ConnectApi.GenericBundleCapability (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_generic_bundle_capability.htm)
- ConnectApi.TrackedChangeBundleCapability (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_tracked_change_bundle_capability.htm)
- ConnectApi.​BundleType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.​FeedElement​Page (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_page.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- ConnectApi.FeedElementCapabilities (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capabilities.htm)
