---
title: "getMergeFields(objectApiNames)"
domain: apex-reference
topic: getmergefieldsobjectapinames
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.081Z
keywords: [getMergeFields, objectApiNames, Extract, merge, fields, specific, object., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getMergeFields(objectApiNames)

> Extract the merge fields for a specific object.

### getMergeFields(objectApiNames)

Extract the merge fields for a specific object.

#### API Version

39.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.EmailMergeFieldInfo getMergeFields(List<String\> objectApiNames)

#### Parameters

objectApiNames

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

The API names for the objects being referenced.

#### Return Value

Type: [ConnectApi.EmailMergeFieldInfo](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_email_merge_field.htm#apex_connectapi_output_email_merge_field "The map for objects and their merge fields.")