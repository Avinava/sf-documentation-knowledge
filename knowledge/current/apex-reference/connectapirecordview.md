---
title: "ConnectApi.RecordView"
domain: apex-reference
topic: connectapirecordview
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.884Z
keywords: [ConnectApi.RecordView, See]
---

# ConnectApi.RecordView

# ConnectApi.RecordView

A view of any record in the org, including a custom object record. This object is used if a specialized object, such as User or ChatterGroup, isn’t available for the record type.

Subclass of [ConnectApi.AbstractRecordView](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstractRecordView.htm "A view of any record in the org, including a custom object record. This object is used if a specialized object, such as User or ChatterGroup, isn’t available for the record type.").

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| sections | List<ConnectApi.​RecordView​Section> | List of record view sections. | 29.0 |

#### See Also

-   [ConnectApi.RecordSnapshotCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_record_snapshot_capability.htm "If a feed element has this capability, it contains all the snapshotted fields of a record for a single create record event.")