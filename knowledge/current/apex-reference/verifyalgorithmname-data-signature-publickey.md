---
title: "verify(algorithmName, data, signature, publicKey)"
domain: apex-reference
topic: verifyalgorithmname-data-signature-publickey
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.436Z
keywords: [verify, algorithmName, data, signature, publicKey, Verifies, digital, blob, specified, algorithm, supplied, public, key., method, signed, created, third-party, application, sign, method.]
---

# verify(algorithmName, data, signature, publicKey)

> Verifies the digital signature for the data blob using the specified
    algorithm and the supplied public key. Use this method to verify a blob signed by a digital
    signature created using a third-party application or the sign method.

### verify(algorithmName, data, signature, publicKey)

Verifies the digital signature for the data blob using the specified algorithm and the supplied public key. Use this method to verify a blob signed by a digital signature created using a third-party application or the sign method.

#### Signature

public static Boolean verify(String algorithmName, Blob data, Blob signature, Blob publicKey)

#### Parameters

algorithmName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

verify supports all these values for algorithmName. See [Crypto Class](#apex_classes_restful_crypto "Provides methods for creating digests, message authentication codes, and signatures, as well as encrypting and decrypting information.") for details on each algorithm.

RSA, RSA-SHA1, RSA-SHA256, RSA-SHA384, RSA-SHA512, ECDSA-SHA256, ECDSA-SHA256-PLAIN, ECDSA-SHA384, and ECDSA-SHA512

data

Type: [Blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

The data to sign.

signature

Type:

[Blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

The RSA or EDSA-compliant signature.

publicKey

Type: [Blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

The value of publicKey must be decoded using the EncodingUtilbase64Decode method, and be in X.509 standard format.

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

true if and only if the signature is successfully verified.

#### Example

You can use your preferred [Salesforce development environment](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_intro_writing_apex.htm "HTML (New Window)") to test this function. To run it correctly, you must:

-   generate an X.509 private key and public certificate
-   convert the private key to PKCS8
-   extract the public key from the public certificate

You provide the private PKCS8 key to the sign method, and the extracted public key to the verify method (along with the signature you generate with sign.

At your terminal, use openssl to create the X.509 key pair:

$ openssl req -x509 -newkey rsa:2048 -keyout myPriv509.key -out myPub509.cert -days 365

Convert the private key to PKCS8:

```

```

Extract the public key from myPub509.cert:

```

```

After you create the myPub509.pem key, you decode just the key portions of the text (without the BEGIN PRIVATE KEY or END PRIVATE KEY lines) for both the privateKey and publicKey parameters.

```

```

To invoke, run the following:

```

```

#### See Also

-   [X.509 Standard](https://www.itu.int/rec/T-REC-X.509)