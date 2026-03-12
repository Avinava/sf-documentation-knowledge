---
title: "Securing Your Data"
domain: apex-guide
topic: securing-your-data
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:33.090Z
estimatedTokens: 494
keywords: [Securing, Data, secure, data, provided, Crypto, class., Note, Example, Integrating, Amazon, WebServices, Encrypting, Decrypting]
---

# Securing Your Data

> You can secure your data by using the methods provided by the
            Crypto class.

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

## Code Examples

```apex
public class HMacAuthCallout {

   public void testAlexaWSForAmazon() {
 
   // The date format is yyyy-MM-dd'T'HH:mm:ss.SSS'Z'
      DateTime d = System.now();
      String timestamp = ''+ d.year() + '-' +
      d.month() + '-' +
      d.day() + '\'T\'' +
      d.hour() + ':' +
      d.minute() + ':' +
      d.second() + '.' +
      d.millisecond() + '\'Z\'';
      String timeFormat = d.formatGmt(timestamp);

      String urlEncodedTimestamp = EncodingUtil.urlEncode(timestamp, 'UTF-8');
      String action = 'UrlInfo';
      String inputStr = action + timeFormat;
      String algorithmName = 'HMacSHA1';
      Blob mac = Crypto.generateMac(algorithmName,  Blob.valueOf(inputStr), 
                                                    Blob.valueOf('your_signing_key'));
      String macUrl = EncodingUtil.urlEncode(EncodingUtil.base64Encode(mac), 'UTF-8');
 
      String urlToTest = 'amazon.com';
      String version = '2005-07-11'; 
      String endpoint = 'http://awis.amazonaws.com/';
      String accessKey = 'your_key';
 
      HttpRequest req = new HttpRequest();
      req.setEndpoint(endpoint +
                      '?AWSAccessKeyId=' + accessKey +
                      '&Action=' + action +
                      '&ResponseGroup=Rank&Version=' + version +
                      '&Timestamp=' + urlEncodedTimestamp +
                      '&Url=' + urlToTest +
                      '&Signature=' + macUrl);
 
      req.setMethod('GET');
      Http http = new Http();
      try {
         HttpResponse res = http.send(req);
         System.debug('STATUS:'+res.getStatus());
         System.debug('STATUS_CODE:'+res.getStatusCode());
         System.debug('BODY: '+res.getBody());
      } catch(System.CalloutException e) {
         System.debug('ERROR: '+ e);
      }
   }
}
```

```apex
// Use generateAesKey to generate the private key
Blob cryptoKey = Crypto.generateAesKey(256);

// Generate the data to be encrypted.
Blob data = Blob.valueOf('Test data to encrypted');

// Encrypt the data and have Salesforce generate the initialization vector 
Blob encryptedData = Crypto.encryptWithManagedIV('AES256', cryptoKey, data);

// Decrypt the data
Blob decryptedData = Crypto.decryptWithManagedIV('AES256', cryptoKey, encryptedData);
```

```apex
@isTest
private class CryptoTest {
    static testMethod void testValidDecryption() {

        // Use generateAesKey to generate the private key
        Blob key = Crypto.generateAesKey(128);
        // Generate the data to be encrypted.
        Blob data = Blob.valueOf('Test data');
        // Generate an encrypted form of the data using base64 encoding
        String b64Data = EncodingUtil.base64Encode(data);
        // Encrypt and decrypt the data
        Blob encryptedData = Crypto.encryptWithManagedIV('AES128', key, data);
        Blob decryptedData = Crypto.decryptWithManagedIV('AES128', key, encryptedData);
        String b64Decrypted = EncodingUtil.base64Encode(decryptedData);
        // Verify that the strings still match
        System.assertEquals(b64Data, b64Decrypted);
    }
    static testMethod void testInvalidDecryption() {
        // Verify that you must use the same key size for encrypting data
        // Generate two private keys, using different key sizes
        Blob keyOne = Crypto.generateAesKey(128);
        Blob keyTwo = Crypto.generateAesKey(256);
        // Generate the data to be encrypted.
        Blob data = Blob.valueOf('Test data');
        // Encrypt the data using the first key 
        Blob encryptedData = Crypto.encryptWithManagedIV('AES128', keyOne, data);
        try {
         // Try decrypting the data using the second key   
            Crypto.decryptWithManagedIV('AES256', keyTwo, encryptedData);
            System.assert(false);
        } catch(SecurityException e) {
            System.assertEquals('Given final block not properly padded', e.getMessage());
        }
    }
}
```
