---
title: "Securing Your Data"
domain: apex-guide
topic: securing-your-data
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.915Z
keywords: [Securing, Data, Note, Example, Integrating, Amazon, WebServices, Encrypting, Decrypting, See]
---

# Securing Your Data

# Securing Your Data

You can secure your data by using the methods provided by the Crypto class.

The methods in the Crypto class provide standard algorithms for creating digests, message authentication codes, and signatures, as well as encrypting and decrypting information. These alogorithms can be used for securing content in Salesforce or for integrating with external services such as Google or Amazon WebServices (AWS).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

The code excerpts on this page are written to highlight the use of the Crypto class. A production-level implementation would incorporate more plaintext key security. Refer to Strengthen Your Data’s Security with Shield Platform Encryption in Salesforce Help.

## Example Integrating Amazon WebServices

This example demonstrates an integration of Amazon WebServices with Salesforce.

```

```

## Example Encrypting and Decrypting

This example uses the encryptWithManagedIV and decryptWithManagedIV methods and the generateAesKey method of the Crypto class.

```

```

This example shows how to write a unit test for the encryptWithManagedIV and decryptWithManagedIV Crypto methods.

```

```

#### See Also

-   [*Apex Reference Guide*: Crypto Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_classes_restful_crypto.htm "Apex Reference Guide: Crypto Class - HTML (New Window)")
    
-   [*Salesforce Help*: Strengthen Your Data’s Security with Shield Platform Encryption](https://help.salesforce.com/s/articleView?id=xcloud.security_pe_overview.htm&type=5&language=en_US "Salesforce Help: Strengthen Your Data’s Security with
    Shield Platform Encryption - HTML (New Window)")
    
-   [*Apex Reference Guide*: EncodingUtil Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_classes_restful_encodingUtil.htm "Apex Reference Guide: EncodingUtil Class - HTML (New Window)")