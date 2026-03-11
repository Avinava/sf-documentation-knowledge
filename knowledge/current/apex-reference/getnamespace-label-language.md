---
title: "get(namespace, label, language)"
domain: apex-reference
topic: getnamespace-label-language
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.480Z
keywords: [get, namespace, label, language, Retrieve, custom, specified, language., Signature, Parameters, Return, Value]
---

# get(namespace, label, language)

> Retrieve a custom label for the specified namespace and language.

### get(namespace, label, language)

Retrieve a custom label for the specified namespace and language.

#### Signature

public static String get(String namespace, String label, String language)

#### Parameters

namespace

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

If the namespace name is null, it defaults to the package namespace. If the namespace name is an empty string, it implies the org namespace.

label

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The label name cannot be null or an empty string.

language

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

This parameter must be a valid language ISO code. See the Platform-Only Languages section in [Supported Languages](https://help.salesforce.com/s/articleView?id=xcloud.faq_getstart_what_languages_does.htm&type=5&language=en_US "HTML (New Window)") in Salesforce Help.

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")