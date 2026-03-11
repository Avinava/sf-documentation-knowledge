---
title: "calculatePermissionSetGroup(psgIds)"
domain: apex-reference
topic: calculatepermissionsetgrouppsgids
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.968Z
keywords: [calculatePermissionSetGroup, psgIds, Calculates, aggregate, permissions, specified, permission, set, groups, testing., Signature, Parameters, Return, Value]
---

# calculatePermissionSetGroup(psgIds)

> Calculates aggregate permissions in specified permission set groups
      for testing.

### calculatePermissionSetGroup(psgIds)

Calculates aggregate permissions in specified permission set groups for testing.

#### Signature

public static void calculatePermissionSetGroup(List<String\> psgIds)

#### Parameters

psgIds

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

A list of IDs for permission set groups.

#### Return Value

Type: void