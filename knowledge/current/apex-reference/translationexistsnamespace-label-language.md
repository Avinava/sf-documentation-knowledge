---
title: "translationExists(namespace, label, language)"
domain: apex-reference
topic: translationexistsnamespace-label-language
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.480Z
keywords: [translationExists, namespace, label, language, Check, translation, exists, namespace., Signature, Parameters, Return, Value]
---

# translationExists(namespace, label, language)

> Check if translation exists for a label and language in a namespace.

### translationExists(namespace, label, language)

Check if translation exists for a label and language in a namespace.

#### Signature

public static Boolean translationExists(string namespace, string label, string language)

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

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")