---
title: "SObjectAccessDecision Class"
domain: apex-reference
topic: sobjectaccessdecision-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.521Z
keywords: [SObjectAccessDecision, Class, Returns, map, sObject, types, their, corresponding, inaccessible, fields., key, string, representation, type., value, set, strings, which, denote, fields]
---

# SObjectAccessDecision Class

> Returns a map of sObject types to their corresponding inaccessible
            fields. The map key is a string representation of the sObject type. The map value is a
            set of strings, which denote the fields names that are inaccessible.

### getRemovedFields()

Returns a map of sObject types to their corresponding inaccessible fields. The map key is a string representation of the sObject type. The map value is a set of strings, which denote the fields names that are inaccessible.

#### Signature

public Map<String,Set<String\>> getRemovedFields()

#### Return Value

Type: [Map<String,Set<String>>](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")

#### Example

In this example, the user doesn’t have permission to update the AnnualRevenue field of an Account.

```

```