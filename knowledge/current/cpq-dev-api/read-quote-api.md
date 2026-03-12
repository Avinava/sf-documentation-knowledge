---
title: "Read Quote API"
domain: cpq-dev-api
topic: read-quote-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.718Z
estimatedTokens: 201
keywords: [Quote, API, reads, CPQ, REST, Examples, Apex]
---

# Read Quote API

> The Read Quote API reads a quote from a CPQ quote ID.

# Read Quote API

The Read Quote API reads a quote from a CPQ quote ID.

| Available in: Salesforce CPQ Summer ’16 and later |
| --- |


Formats

JSON, Apex

HTTP Method

GET

Authentication

Authorization: Bearer token

**REQUEST**

Parameter 1

Name: uid

Type: String

Required: Yes

Description: The ID of the quote to read

**RESPONSE**

Type

QuoteModel

Description

The representation of SBQQ\_\_Quote\_\_c data.

## REST Examples

```

```

An example response body after reading a quote. The actual response is a JSON formatted string.

```

```

## Apex Examples

Before saving the QuoteReader example class, make sure that the CPQ model classes are as individual Apex classes in your org.

```

```

For an example of the QuoteReader class, run the following code in anonymous Apex.

```

```

## Code Examples

```
curl "https://yourInstance.salesforce.com/services/apexrest/SBQQ/
ServiceRouter?reader=SBQQ.QuoteAPI.QuoteReader&uid=a0p610000040iumAAA" 
-H "Content-Type: application/json" -H "Authorization: Bearer token" -X GET
```

```
{
    "record": {
        "attributes": {
            "type": "SBQQ__Quote__c", 
            "url": "/services/data/v41.0/sobjects/SBQQ__Quote__c/a0p610000040iumAAA"
        }, 
        "Id": "a0p610000040iumAAA", 
        "Name": "Q-00880"
    }, 
    "nextKey": 5, 
    "netTotal": 300, 
    "netNonSegmentTotal": 300, 
    "lineItems": [
        {
            "record": {
                "attributes": {
                    "type": "SBQQ__QuoteLine__c", 
                    "url": "/services/data/v41.0/sobjects/SBQQ__QuoteLine__c/a0l61000003u09UAAQ"
                }, 
                "Id": "a0l61000003u09UAAQ"
            }
        }
    "lineItemGroups": [ ]
}
```

```apex
public with sharing class QuoteReader {
    
    public QuoteModel read(String quoteId) {
        String quoteJSON = SBQQ.ServiceRouter.read('SBQQ.QuoteAPI.QuoteReader', quoteId);
        return (QuoteModel) JSON.deserialize(quoteJSON, QuoteModel.class);
    }
}
```

```apex
QuoteReader reader = new QuoteReader();
QuoteModel quote = reader.read('a0Wf100000J1vk1');
System.debug(quote);
```
