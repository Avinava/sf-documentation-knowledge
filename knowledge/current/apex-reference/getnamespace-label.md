---
title: "get(namespace, label)"
domain: apex-reference
topic: getnamespace-label
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.480Z
keywords: [get, namespace, label, Retrieve, custom, specified, default, language, setting., Signature, Parameters, Return, Value]
---

# get(namespace, label)

> Retrieve a custom label for the specified namespace and a default language
    setting.

### get(namespace, label)

Retrieve a custom label for the specified namespace and a default language setting.

#### Signature

public static String get(String namespace, String label)

#### Parameters

namespace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

If the namespace name is null, it defaults to the package namespace. If the namespace name is an empty string, it implies the org namespace.

label

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The label name cannot be null or an empty string.

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")