---
title: "UserData Class"
domain: apex-reference
topic: userdata-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.402Z
keywords: [UserData, Class, map, data, third, party, case, handler, access, non-standard, values., example, Janrain, provider, fields, returns, its, accessCredentials, dictionary, placed]
---

# UserData Class

> A map of data from the third
party, in case the handler has to access non-standard values. For
example, when using Janrain as a provider, the fields Janrain returns
in its accessCredentials dictionary
are placed into the attributeMap. These fields vary by provider.

### attributeMap

A map of data from the third party, in case the handler has to access non-standard values. For example, when using Janrain as a provider, the fields Janrain returns in its accessCredentials dictionary are placed into the attributeMap. These fields vary by provider.

#### Signature

public Map<String, String\> attributeMap {get; set;}

#### Property Value

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."), [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>