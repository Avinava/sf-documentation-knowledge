---
title: "encryptWithManagedIV(algorithmName, secretKey,
      clearText)"
domain: apex-reference
topic: encryptwithmanagedivalgorithmname-secretkey-cleartext
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.436Z
keywords: [encryptWithManagedIV, algorithmName, secretKey, clearText, Encrypts, blob, specified, algorithm, private, key., method, want, Salesforce, generate, initialization, vector., version, doesn’t, additional, authentication]
---

# encryptWithManagedIV(algorithmName, secretKey,
      clearText)

> Encrypts the clearText blob by using the specified algorithm and
    private key. Use this method when you want Salesforce to generate the initialization vector.
    This version of encryptWithManagedIV doesn’t use additional authentication
    data.

### encryptWithManagedIV(algorithmName, secretKey, clearText)

Encrypts the clearText blob by using the specified algorithm and private key. Use this method when you want Salesforce to generate the initialization vector. This version of encryptWithManagedIV doesn’t use additional authentication data.

#### Signature

public static Blob encryptWithManagedIV(String algorithmName, Blob secretKey, Blob clearText)

#### Parameters

algorithmName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

encryptWithManagedIV supports all these values for algorithmName. See [Crypto Class](#apex_classes_restful_crypto "Provides methods for creating digests, message authentication codes, and signatures, as well as encrypting and decrypting information.") for details on each algorithm.

-   AES128, AES128-CBC
-   AES192, AES192-CBC
-   AES256, AES256-CBC
-   AES256-GCM

secretKey

Type: [Blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

Private key text. The length of secretKey must match the size required by algorithmName: 128 bits, 192 bits, or 256 bits, which is 16 bytes, 24 bytes, or 32 bytes, respectively. You can use a third-party application or the generateAesKey method to generate this key for you.

clearText

Type: [Blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

The content you want to encrypt.

#### Return Value

Type: [Blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

Contains the encrypted contents of clearText.

-   For CBC, the initialization vector is stored as the first 128 bits (16 bytes) of the encrypted blob.
-   For GCM, the return value contains the length of the IV (always 12) followed by a 96 bit (12 byte) Salesforce generated IV, with the ciphertext following.

Use either third-party applications or the decryptWithManagedIV method to decrypt blobs encrypted with this method. Use the encrypt method if you want to generate your own initialization vector.

#### Example

You can use your preferred [Salesforce development environment](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_intro_writing_apex.htm "HTML (New Window)") to test this function. Create this Apex class.

```

```

To invoke this method, run:

```

```