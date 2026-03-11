---
title: "sign(algorithmName, input,
    privateKey)"
domain: apex-reference
topic: signalgorithmname-input-privatekey
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.436Z
keywords: [sign, algorithmName, input, privateKey, Computes, unique, digital, signature, blob, value, specified, algorithm, supplied, private, key., Signature, Parameters, Return, Value, Example]
---

# sign(algorithmName, input,
    privateKey)

> Computes a unique digital signature for the input blob value, using the specified
        algorithm and the supplied private key.

### sign(algorithmName, input, privateKey)

Computes a unique digital signature for the input blob value, using the specified algorithm and the supplied private key.

#### Signature

public static Blob sign(String algorithmName, Blob input, Blob privateKey)

#### Parameters

algorithmName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

input

signWithCertificate supports all these values for algorithmName. See [Crypto Class](#apex_classes_restful_crypto "Provides methods for creating digests, message authentication codes, and signatures, as well as encrypting and decrypting information.") for details on each algorithm.

RSA, RSA-SHA1, RSA-SHA256, RSA-SHA384, RSA-SHA512, ECDSA-SHA256, ECDSA-SHA256-PLAIN, ECDSA-SHA384, and ECDSA-SHA512

Type: [Blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

The data to sign.

privateKey

Type: [Blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

The key to use for signing. The value of privateKey must be decoded using the EncodingUtilbase64Decode method, and should be in RSA's [PKCS #8 (1.2) Private-Key Information Syntax Standard](https://datatracker.ietf.org/doc/html/rfc5958 "HTML (New Window)") form. The value can’t exceed 4 KB.

#### Return Value

Type: [Blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

The new digital signature.

#### Example

You can use your preferred [Salesforce development environment](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_intro_writing_apex.htm "HTML (New Window)") to test this function. To run it correctly, you need a PKCS8 private key. At your terminal, use openssl to create one. First, create the key. Then convert it to PKCS8:

$ openssl genrsa -out myprivatekey.pem 1024 $ openssl pkey -in myprivatekey.pem -out myprivatekey.pkcs8.pem

After you create the PKCS8 compatible key, you decode just the key portion of the text (without the BEGIN PRIVATE KEY or END PRIVATE KEY lines) for the privateKey parameter.

```

```

To invoke this method, run the following:

```

```