---
title: "decrypt(algorithmName, secretKey, initializationVector,
      cipherText)"
domain: apex-reference
topic: decryptalgorithmname-secretkey-initializationvector-ciphertext
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.436Z
keywords: [decrypt, algorithmName, secretKey, initializationVector, cipherText, Decrypts, blob, specified, algorithm, private, key, initialization, vector., method, blobs, encrypted, third-party, application, encrypt, method.]
---

# decrypt(algorithmName, secretKey, initializationVector,
      cipherText)

> Decrypts the cipherText blob by using the specified algorithm,
    private key, and initialization vector. Use this method to decrypt blobs encrypted by using a
    third-party application or the encrypt
    method.

### decrypt(algorithmName, secretKey, initializationVector, cipherText)

Decrypts the cipherText blob by using the specified algorithm, private key, and initialization vector. Use this method to decrypt blobs encrypted by using a third-party application or the encrypt method.

#### Signature

public static Blob decrypt(String algorithmName, Blob secretKey, Blob initializationVector, Blob cipherText)

#### Parameters

algorithmName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

decrypt supports all these values for algorithmName. See [Crypto Class](#apex_classes_restful_crypto "Provides methods for creating digests, message authentication codes, and signatures, as well as encrypting and decrypting information.") for details on each algorithm.

-   AES128, AES128-CBC
-   AES192, AES192-CBC
-   AES256, AES256-CBC
-   AES256-GCM

secretKey

Type: [Blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

Private key text. The length of secretKey must match the size required by algorithmName: 128 bits, 192 bits, or 256 bits, which is 16 bytes, 24 bytes, or 32 bytes, respectively. You can use a third-party application or the generateAesKey method to generate this key.

initializationVector

Type: [Blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

-   For CBC, the 128 bit (16 byte) IV. The IV must be 128 bits (16 bytes.)
-   For GCM, don’t provide an IV. Any non-null IV will result in an error.

cipherText

Type: [Blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

The content to decrypt.

#### Return Value

Type: [Blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

Contains the decrypted contents of cipherText.

#### Example

You can use your preferred [Salesforce development environment](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_intro_writing_apex.htm "HTML (New Window)") to test this function. Create this Apex class.

```

```

To invoke this method, run:

```

```