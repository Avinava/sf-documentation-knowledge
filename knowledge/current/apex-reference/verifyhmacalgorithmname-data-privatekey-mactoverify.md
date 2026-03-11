---
title: "verifyHMac(algorithmName,  data,  privateKey,  macToVerify)"
domain: apex-reference
topic: verifyhmacalgorithmname-data-privatekey-mactoverify
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.436Z
keywords: [verifyHMac, algorithmName, data, privateKey, macToVerify, Verifies, HMAC, signature, blob, specified, algorithm, input, private, key, mac., method, verify, signed, digital, created]
---

# verifyHMac(algorithmName,  data,  privateKey,  macToVerify)

> Verifies the HMAC signature for the data blob using the specified
    algorithm, input data, private key, and the mac. Use this method to verify a blob signed by a
    digital signature created using a third-party application or the sign method.

### verifyHMac(algorithmName, data, privateKey, macToVerify)

Verifies the HMAC signature for the data blob using the specified algorithm, input data, private key, and the mac. Use this method to verify a blob signed by a digital signature created using a third-party application or the sign method.

#### Signature

public static Boolean verifyHMac(String algorithmName, Blob data, Blob privateKey, Blob macToVerify)

#### Parameters

algorithmName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

These are valid values for algorithmName.

-   hmacMD5
-   hmacSHA1
-   hmacSHA256
-   hmacSHA512

data

Type: [Blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

The data to sign.

privateKey

Type: [Blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

If the private key used to generate the MAC was Base64 encoded, then the value of privateKey must also be Base64 encoded. The value cannot exceed 4 KB.

hmacToVerify

Type: [Blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

The value of the mac must be verified against the provided privateKey, data, and algorithmName.

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

The verification status of the data to verify.

#### Example

You can use your preferred [Salesforce development environment](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_intro_writing_apex.htm "HTML (New Window)") to test this function. Create the following Apex class:

```

```

To invoke this method, run the following:

```

```