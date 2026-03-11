---
title: "getManagedContentSpace(contentSpaceId)"
domain: apex-reference
topic: getmanagedcontentspacecontentspaceid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.296Z
keywords: [getManagedContentSpace, contentSpaceId, Get, managed, content, space., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getManagedContentSpace(contentSpaceId)

> Get a managed content space.

### getManagedContentSpace(contentSpaceId)

Get a managed content space.

#### API Version

55.0–63.0

In version 64.0 and later, use [getManagedContentSpace(contentSpaceId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContentSpaces_static_methods.htm#apex_ConnectAPI_ManagedContentSpaces_getManagedContentSpace_2 "Get a managed content space.") in the ManagedContentSpaces class to get a managed content space.

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentSpace getManagedContentSpace(String contentSpaceId)

#### Parameters

contentSpaceId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the managed content space.

#### Return Value

Type: [ConnectApi.ManagedContentSpace](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_space.htm "Managed content space.")