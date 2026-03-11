---
title: "generateDigest(algorithmName, input)"
domain: apex-reference
topic: generatedigestalgorithmname-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.436Z
keywords: [generateDigest, algorithmName, input, Computes, secure, one-way, hash, digest, specified, algorithm, supplied, blob., Signature, Parameters, Return, Value, Example]
---

# generateDigest(algorithmName, input)

> Computes a secure, one-way hash digest using the specified algorithm on the supplied
                input blob.

### generateDigest(algorithmName, input)

Computes a secure, one-way hash digest using the specified algorithm on the supplied input blob.

#### Signature

public static Blob generateDigest(String algorithmName, Blob input)

#### Parameters

algorithmName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The algorithm you want to use to generate the digest. Valid values for algorithmName are:

-   MD5
-   SHA1
-   SHA3-256
-   SHA3-384
-   SHA3-512
-   SHA-256
-   SHA-512

input

Type: [Blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

The content for which you want to generate the digest.

#### Return Value

Type: [Blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

Contains the generated digest.

#### Example

You can use your preferred [Salesforce development environment](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_intro_writing_apex.htm "HTML (New Window)") to test this function. Create the following Apex class:

```

```

To invoke this method, run the following:

```

```