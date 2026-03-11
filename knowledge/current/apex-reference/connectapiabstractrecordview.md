---
title: "ConnectApi.AbstractRecordView"
domain: apex-reference
topic: connectapiabstractrecordview
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.759Z
keywords: [ConnectApi.AbstractRecordView]
---

# ConnectApi.AbstractRecordView

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