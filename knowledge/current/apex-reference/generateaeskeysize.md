---
title: "generateAesKey(size)"
domain: apex-reference
topic: generateaeskeysize
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.436Z
keywords: [generateAesKey, size, Generates, Advanced, Encryption, Standard, AES, key., Signature, Parameters, Return, Value, Example]
---

# generateAesKey(size)

> Generates an Advanced Encryption Standard (AES) key.

### generateAesKey(size)

Generates an Advanced Encryption Standard (AES) key.

#### Signature

public static Blob generateAesKey(Integer size)

#### Parameters

size

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The key's size in bits. Valid values are:

-   128
-   192
-   256

#### Return Value

Type: [Blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

Contains the generated AES key.

#### Example

You can use your preferred [Salesforce development environment](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_intro_writing_apex.htm "HTML (New Window)") to test this function. Create the following Apex class:

```

```

To invoke this method, run the following:

```

```