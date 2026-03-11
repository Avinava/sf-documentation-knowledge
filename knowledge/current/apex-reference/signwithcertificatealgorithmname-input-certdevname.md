---
title: "signWithCertificate(algorithmName, input, certDevName)"
domain: apex-reference
topic: signwithcertificatealgorithmname-input-certdevname
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.436Z
keywords: [signWithCertificate, algorithmName, input, certDevName, Computes, unique, digital, signature, blob, value, specified, algorithm, supplied, certificate, key, pair., Signature, Parameters, Return, Value]
---

# signWithCertificate(algorithmName, input, certDevName)

> Computes a unique digital signature for the input blob value, using
      the specified algorithm and the supplied certificate and key pair.

### signWithCertificate(algorithmName, input, certDevName)

Computes a unique digital signature for the input blob value, using the specified algorithm and the supplied certificate and key pair.

#### Signature

public static Blob signWithCertificate(String algorithmName, Blob input, String certDevName)

#### Parameters

algorithmName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

signWithCertificate supports all these values for algorithmName. See [Crypto Class](#apex_classes_restful_crypto "Provides methods for creating digests, message authentication codes, and signatures, as well as encrypting and decrypting information.") for details on each algorithm.

RSA, RSA-SHA1, RSA-SHA256, RSA-SHA384, RSA-SHA512, ECDSA-SHA256, ECDSA-SHA256-PLAIN, ECDSA-SHA384, and ECDSA-SHA512

input

Type: [Blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

The data to sign.

certDevName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The value listed in the Unique Name field for a certificate stored in the Salesforce org’s Certificate and Key Management page to use for signing.

To access the Certificate and Key Management page from Setup, enter Certificate and Key Management in the **Quick Find** box, then select **Certificate and Key Management**.

#### Return Value

Type: [Blob](atlas.en-us.apexref.meta/apexref/apex_methods_system_blob.htm#apex_methods_system_blob "Contains methods for the Blob primitive data type.")

The signed content.

#### Example

You can use your preferred [Salesforce development environment](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_intro_writing_apex.htm "HTML (New Window)") to test this function. Create the following Apex class. For the TestCertName variable, use the unique name value for a self-signed or CA certificate that you have created in the org in which you run this test.

```

```

To invoke the method, run the following:

```

```