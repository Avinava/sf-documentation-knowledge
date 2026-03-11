---
title: "verify(algorithmName, data, signature, certDevName)"
domain: apex-reference
topic: verifyalgorithmname-data-signature-certdevname
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.436Z
keywords: [verify, algorithmName, data, signature, certDevName, Verifies, digital, blob, specified, algorithm, public, key, associated, certDevName., method, signed, created, third-party, application, signWithCertificate]
---

# verify(algorithmName, data, signature, certDevName)

> Verifies the digital signature for the data blob using the specified
    algorithm and the public key associated with certDevName. Use this method to
    verify a blob signed by a digital signature created using a third-party application or the
      signWithCertificate method.

### verify(algorithmName, data, signature, certDevName)

Verifies the digital signature for the data blob using the specified algorithm and the public key associated with certDevName. Use this method to verify a blob signed by a digital signature created using a third-party application or the signWithCertificate method.

#### Signature

public static Boolean verify(String algorithmName, Blob data, Blob signature, String certDevName)

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

The RSA or ECDSA signature.

certDevName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The value listed in the Unique Name field for a certificate stored in the Salesforce organization’s Certificate and Key Management page to use for signing.

To access the Certificate and Key Management page from Setup, enter Certificate and Key Management in the **Quick Find** box, then select **Certificate and Key Management**.

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Returns true if the signature is successfully verified.

#### Example

You can use your preferred [Salesforce development environment](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_intro_writing_apex.htm "HTML (New Window)") to test this function. Create the following Apex class. For the TestCertName variable, use the unique name value for a self-signed or CA certificate that you have created in the org in which you run this test.

```

```

To invoke this method, run the following:

```

```