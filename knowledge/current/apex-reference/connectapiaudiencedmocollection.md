---
title: "ConnectApi.AudienceDMOCollection"
domain: apex-reference
topic: connectapiaudiencedmocollection
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:26.122Z
estimatedTokens: 162
keywords: [ConnectApi.AudienceDMOCollection, Represents, collection, Audience, Data, Model, DMO, records.]
---

# ConnectApi.AudienceDMOCollection

> Represents a collection of Audience Data Model Object (DMO) records.

# ConnectApi.AudienceDMOCollection

Represents a collection of Audience Data Model Object (DMO) records.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| batchSize | Integer | Batch size | 60.0 |
| data | List<ConnectApi.ActivationData> | List of Audience DMO records. | 60.0 |
| offset | Integer | Start offset of the next batch. | 60.0 |

#### See Also

-   [getActivationData(activationId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpAudienceDMO_static_methods.htm#apex_ConnectAPI_CdpAudienceDMO_getActivationData_1 "Get a list of all activation records from Audience Data Model Objects (DMOs).")

## Related Topics

- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.ActivationData (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_activation_data.htm)
- getActivationData(activationId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpAudienceDMO_static_methods.htm)
