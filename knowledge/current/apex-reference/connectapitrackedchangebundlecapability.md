---
title: "ConnectApi.TrackedChangeBundleCapability"
domain: apex-reference
topic: connectapitrackedchangebundlecapability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:40.138Z
keywords: [ConnectApi.TrackedChangeBundleCapability]
---

# ConnectApi.TrackedChangeBundleCapability

# ConnectApi.TrackedChangeBundleCapability

If a feed element has this capability, it has a group of other feed elements aggregated into one feed element called a bundle. This type of bundle aggregates feed tracked changes.

Subclass of [ConnectApi.BundleCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_bundle_capability.htm "If a feed element has this capability, it has a container of feed elements called a bundle.").

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| changes | List<ConnectApi.​TrackedChangeItem> | Collection of feed tracked changes. | 31.0 |