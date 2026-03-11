---
title: "decryptWithManagedIV(algorithmName, secretKey,
      IVAndCipherText)"
domain: apex-reference
topic: decryptwithmanagedivalgorithmname-secretkey-ivandciphertext
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.436Z
keywords: [decryptWithManagedIV, algorithmName, secretKey, IVAndCipherText, Decrypts, blob, specified, algorithm, private, key., method, decrypt, blobs, encrypted, third-party, application, encryptWithManagedIV, method., version, doesn’t]
---

# decryptWithManagedIV(algorithmName, secretKey,
      IVAndCipherText)

> Decrypts the IVAndCipherText blob by using the specified algorithm
    and private key. Use this method to decrypt blobs encrypted by using a third-party application
    or the encryptWithManagedIV method. This version of
      decryptWithManagedIV doesn’t use additional authentication
    data.

### decryptWithManagedIV(algorithmName, secretKey, IVAndCipherText)

Decrypts the IVAndCipherText blob by using the specified algorithm and private key. Use this method to decrypt blobs encrypted by using a third-party application or the encryptWithManagedIV method. This version of decryptWithManagedIV doesn’t use additional authentication data.

#### Signature

public static Blob decryptWithManagedIV(String algorithmName, Blob secretKey, Blob IVAndCipherText)

#### Parameters

algorithmName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

decryptWithManagedIV supports all these values for algorithmName. See [Crypto Class](#apex_classes_restful_crypto "Provides methods for creating digests, message authentication codes, and signatures, as well as encrypting and decrypting information.") for details on each algorithm.

-   AES128, AES128-CBC
-   AES192, AES192-CBC
-   AES256, AES256-CBC
-   AES256-GCM

secretKey

Type: [Blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

Private key text. The length of secretKey must match the size required by algorithmName: 128 bits, 192 bits, or 256 bits, which is 16 bytes, 24 bytes, or 32 bytes, respectively. You can use a third-party application or the generateAesKey method to generate this key for you.

IVAndCipherText

Type: [Blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

A concatenation of the initialization vector and the encrypted text that you want to decrypt.

-   For CBC, IVAndCipherText must contain IV + ciphertext, where the IV must be the first 128 bits (16 bytes) with the ciphertext following.
-   FOR GCM, IVAndCipherText must contain the length of the IV (always 12) followed by a 96 bit (12 byte) IV, with the ciphertext following.

#### Return Value

Type: [Blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

Contains the decrypted contents of IVAndCipherText.

#### Example

You can use your preferred [Salesforce development environment](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_intro_writing_apex.htm "HTML (New Window)") to test this function. Create this Apex class.

```

```

To invoke this method, run:

```

```