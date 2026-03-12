---
title: "ConnectApi.AbstractRecordView"
domain: apex-reference
topic: connectapiabstractrecordview
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:25.832Z
estimatedTokens: 232
keywords: [ConnectApi.AbstractRecordView, view, any, record, org, including, custom, record., used, specialized, such, User, ChatterGroup, isn’t, type.]
---

# ConnectApi.AbstractRecordView

> A view of any record in the org, including a custom object record. This object is used
    if a specialized object, such as User or ChatterGroup, isn’t available for the record
    type.

# ConnectApi.AbstractRecordView

A view of any record in the org, including a custom object record. This object is used if a specialized object, such as User or ChatterGroup, isn’t available for the record type.

This class is abstract.

Subclass of [ConnectApi.ActorWithId](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_actorWithIdOutput.htm "Actor with ID.").

Superclass of:

-   [ConnectApi.RecordSummary](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_rec_sum.htm "Record summary.")
-   [ConnectApi.RecordView](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recordView.htm "A view of any record in the org, including a custom object record. This object is used if a specialized object, such as User or ChatterGroup, isn’t available for the record type.")

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| name | String | The localized name of the record. | 29.0 |

## Related Topics

- ConnectApi.ActorWithId (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_actorWithIdOutput.htm)
- ConnectApi.RecordSummary (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_rec_sum.htm)
- ConnectApi.RecordView (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_recordView.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
