---
title: "CdpAudienceDMO Class"
domain: apex-reference
topic: cdpaudiencedmo-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:16.359Z
estimatedTokens: 374
namespace: ConnectApi
keywords: [CdpAudienceDMO, activation, records, Data, Audience, Model, Objects, DMOs, getActivationData, activationId, API, Version, Requires, Chatter]
---

# CdpAudienceDMO Class

> Get activation records from Data 360 Audience Data Model Objects (DMOs).

**Namespace:** `ConnectApi`

# CdpAudienceDMO Class

Get activation records from Data 360 Audience Data Model Objects (DMOs).

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## CdpAudienceDMO Methods

These methods are for CdpAudienceDMO. All methods are static.

-   **[getActivationData(activationId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpAudienceDMO_static_methods.htm#apex_ConnectAPI_CdpAudienceDMO_getActivationData_1)**
    Get a list of all activation records from Audience Data Model Objects (DMOs).

### getActivationData(activationId)

Get a list of all activation records from Audience Data Model Objects (DMOs).

#### API Version

60.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.AudienceDMOCollection getActivationData(String activationId)

#### Parameters

activationId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The unique identifier (ID) or developer name of a specific activation target.

#### Return Value

Type: [ConnectApi.AudienceDMOCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_audience_d_m_o_collection.htm "Represents a collection of Audience Data Model Object (DMO) records.")

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- getActivationData(activationId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_CdpAudienceDMO_static_methods.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.AudienceDMOCollection (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_audience_d_m_o_collection.htm)
