---
title: "ConnectApi.TrackedChangeBundleCapability"
domain: apex-reference
topic: connectapitrackedchangebundlecapability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:29.229Z
estimatedTokens: 158
keywords: [feed, element, capability, group, elements, aggregated, bundle, aggregates, tracked, changes]
---

# ConnectApi.TrackedChangeBundleCapability

> If a feed element has this capability, it has a group of other feed
   elements aggregated into one feed element called a bundle. This type of bundle
   aggregates feed tracked changes.

# ConnectApi.TrackedChangeBundleCapability

If a feed element has this capability, it has a group of other feed elements aggregated into one feed element called a bundle. This type of bundle aggregates feed tracked changes.

Subclass of [ConnectApi.BundleCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_bundle_capability.htm "If a feed element has this capability, it has a container of feed elements called a bundle.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| changes | List<ConnectApi.​TrackedChangeItem> | Collection of feed tracked changes. | 31.0 |

## Related Topics

- ConnectApi.BundleCapability (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_bundle_capability.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​TrackedChangeItem (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_TrackedChangeItem.htm)
