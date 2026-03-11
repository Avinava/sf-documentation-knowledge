---
title: "generateMac(algorithmName, input, privateKey)"
domain: apex-reference
topic: generatemacalgorithmname-input-privatekey
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.436Z
keywords: [generateMac, algorithmName, input, privateKey, Computes, message, authentication, code, MAC, blob, value, private, key, specified, algorithm., Signature, Parameters, Return, Value, Example]
---

# generateMac(algorithmName, input, privateKey)

> Computes a message authentication code (MAC) for the input blob value using the private
        key and the specified algorithm.

### generateMac(algorithmName, input, privateKey)

Computes a message authentication code (MAC) for the input blob value using the private key and the specified algorithm.

#### Signature

public static Blob generateMac(String algorithmName, Blob input, Blob privateKey)

#### Parameters

algorithmName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

These are valid values for algorithmName.

-   hmacMD5
-   hmacSHA1
-   hmacSHA256
-   hmacSHA512

input

Type: [Blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

The content for which you want to generate the MAC.

privateKey

Type: [Blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

The key to use to generate the MAC. You may supply a private key that has been encoded using Base64 encoding. However if you do, then you must also supply the Base64-encoded private key when verifying the MAC using the verifyHMac method. The value of privateKey can’t exceed 4 KB.

#### Return Value

Type: [Blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

The message authentication code.

#### Example

You can use your preferred [Salesforce development environment](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_intro_writing_apex.htm "HTML (New Window)") to test this function. Create the following Apex class:

```

```

To invoke this method, run the following:

```

```