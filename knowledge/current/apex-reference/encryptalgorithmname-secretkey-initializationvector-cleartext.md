---
title: "encrypt(algorithmName, secretKey, initializationVector,
      clearText)"
domain: apex-reference
topic: encryptalgorithmname-secretkey-initializationvector-cleartext
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.436Z
keywords: [encrypt, algorithmName, secretKey, initializationVector, clearText, Encrypts, blob, specified, algorithm, private, key, initialization, vector., method, want, specify, own, Signature, Parameters, Return]
---

# encrypt(algorithmName, secretKey, initializationVector,
      clearText)

> Encrypts the clearText blob by using the specified algorithm,
    private key, and initialization vector. Use this method when you want to specify your own
    initialization vector.

### encrypt(algorithmName, secretKey, initializationVector, clearText)

Encrypts the clearText blob by using the specified algorithm, private key, and initialization vector. Use this method when you want to specify your own initialization vector.

#### Signature

public static Blob encrypt(String algorithmName, Blob secretKey, Blob initializationVector, Blob clearText)

#### Parameters

algorithmName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Algorithm for encrypting clearText.

encrypt supports all these values for algorithmName. See [Crypto Class](#apex_classes_restful_crypto "Provides methods for creating digests, message authentication codes, and signatures, as well as encrypting and decrypting information.") for details on each algorithm.

-   AES128, AES128-CBC
-   AES192, AES192-CBC
-   AES256, AES256-CBC
-   AES256-GCM

secretKey

Type: [Blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

Private key text. The length of secretKey must match the size required by algorithmName: 128 bits, 192 bits, or 256 bits, which is 16 bytes, 24 bytes, or 32 bytes, respectively. You can use a third-party application or the generateAesKey method to generate this key for you.

initializationVector

Type: [Blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

-   For CBC, any 128 bit (16 byte) string to provide the initial state to this method. The initialization vector must be 128 bits (16 bytes.)
-   For GCM, don’t provide an IV. Any non-null IV results in an error.

clearText

Type: [Blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

The content that you want to encrypt.

#### Return Value

Type: [Blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

Contains the encrypted contents of clearText.

#### Example

You can use your preferred [Salesforce development environment](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_intro_writing_apex.htm "HTML (New Window)") to test this function. Create this Apex class.

```

```

To invoke this method, run:

```

```