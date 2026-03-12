---
title: "ConnectApi.​TrackedChangeItem"
domain: apex-reference
topic: connectapitrackedchangeitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:25.810Z
estimatedTokens: 244
keywords: [ConnectApi.​TrackedChangeItem, Tracked, change, item.]
---

# ConnectApi.​TrackedChangeItem

> Tracked change item.

# ConnectApi.​TrackedChangeItem

Tracked change item.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| fieldName | String | The name of the field that was updated. | 28.0 |
| newValue | String | The new value of the field or null if the field length is long. | 28.0 |
| oldValue | String | The old value of the field or null if the field length is long. | 28.0 |

#### See Also

-   [ConnectApi.TrackedChangesCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_tracked_changes_capability.htm "If a feed element has this capability, it contains all changes to a record for a single tracked change event.")

-   [ConnectApi.TrackedChangeBundleCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_tracked_change_bundle_capability.htm "If a feed element has this capability, it has a group of other feed elements aggregated into one feed element called a bundle. This type of bundle aggregates feed tracked changes.")

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.TrackedChangesCapability (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_tracked_changes_capability.htm)
- ConnectApi.TrackedChangeBundleCapability (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_tracked_change_bundle_capability.htm)
