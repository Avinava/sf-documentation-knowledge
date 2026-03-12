---
title: "Encoding Your Data"
domain: apex-guide
topic: encoding-your-data
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:33.379Z
estimatedTokens: 156
keywords: [Encoding, Data, encode, decode, URLs, convert, strings, hexadecimal, provided, EncodingUtil]
---

# Encoding Your Data

> You can encode and decode URLs and convert strings to hexadecimal
format by using the methods provided by the EncodingUtil class.

# Encoding Your Data

You can encode and decode URLs and convert strings to hexadecimal format by using the methods provided by the EncodingUtil class.

This example shows how to URL encode a timestamp value in UTF-8 by calling urlEncode.

```

```

This next example shows how to use convertToHex to compute a client response for HTTP Digest Authentication (RFC2617).

```

```

#### See Also

-   [*Apex Reference Guide*: EncodingUtil Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_classes_restful_encodingUtil.htm "Apex Reference Guide: EncodingUtil Class - HTML (New Window)")

## Code Examples

```apex
DateTime d = System.now();
String timestamp = ''+ d.year() + '-' +
    d.month() + '-' +
    d.day() + '\'T\'' +
    d.hour() + ':' +
    d.minute() + ':' +
    d.second() + '.' +
    d.millisecond() + '\'Z\'';
System.debug(timestamp);
String urlEncodedTimestamp = EncodingUtil.urlEncode(timestamp, 'UTF-8');
System.debug(urlEncodedTimestamp);
```

```apex
@isTest
private class SampleTest {
   static testmethod void testConvertToHex() {
      String myData = 'A Test String';
      Blob hash = Crypto.generateDigest('SHA1',Blob.valueOf(myData));
      String hexDigest = EncodingUtil.convertToHex(hash);
      System.debug(hexDigest);  
    } 
}
```
