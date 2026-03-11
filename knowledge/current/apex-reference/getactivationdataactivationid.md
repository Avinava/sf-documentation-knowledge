---
title: "getActivationData(activationId)"
domain: apex-reference
topic: getactivationdataactivationid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:30.008Z
keywords: [getActivationData, activationId, Get, list, activation, records, Audience, Data, Model, Objects, DMOs, API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getActivationData(activationId)

> Get a list of all activation records from Audience Data Model Objects (DMOs).

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