---
title: "Save Quote API"
domain: cpq-dev-api
topic: save-quote-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.832Z
estimatedTokens: 227
keywords: [Save, Quote, API, saves, CPQ, REST, Examples, APEX]
---

# Save Quote API

> The Save Quote API saves a CPQ quote.

# Save Quote API

The Save Quote API saves a CPQ quote.

| Available in: Salesforce CPQ Summer ’16 and later |
| --- |


Formats

JSON, Apex

HTTP Method

POST

Authentication

Authorization: Bearer token

**REQUEST**

Name

quote

Type

QuoteModel

Required

Yes

Description

Representation of SBQQ\_\_Quote\_\_c data

**RESPONSE**

Type

QuoteModel

Description

Representation of SBQQ\_\_Quote\_\_c data

## REST Examples

```

```

This request body quoteModel.json file saves a quote. The context value is a JSON formatted string.

```

```

An example response body after saving a quote. The actual response is a JSON formatted string.

```

```

## APEX Examples

Before saving the QuoteSaver example class, make sure that the CPQ Model classes are added as individual Apex classes in your org.

```

```

For an example of the QuoteSaver class, run the following code in anonymous Apex.

```

```

## Code Examples

```
curl
     "https://yourInstance.salesforce.com/services/apexrest/SBQQ/ServiceRouter" -H
     "Content-Type: application/json" -H "Authorization: Bearer token" -X POST -d
     @quoteModel.json
```

```
{"saver": "SBQQ.QuoteAPI.QuoteSaver", "model": "{"record":
{"attributes":{"type":"SBQQ__Quote__c","url":"/services/data/v41.0/sobjects/
SBQQ__Quote__c/a0l61000003kUlVAAU"},
"Name":"Q-00681","Id":"a0l61000003kUlVAAU"},"nextKey":2,"netTotal":0.00,\
"lineItems":[],"lineItemGroups":[],"customerTotal":0.00}"}
```

```
{    
    "record": {        
      "attributes":{
         "type":"SBQQ__Quote__c",
         "url":"/services/data/v41.0/sobjects/SBQQ__Quote__c/a0l61000003kUlVAAU"
     },        
     "Name":"Q-00681",        
     "Id":"a0l61000003kUlVAAU"
  },    
  "nextKey":2,    
  "netTotal":0.00,    
  "lineItems":[],
  "lineItemGroups":[],    
  "customerTotal":0.00
}
```

```apex
public with sharing class QuoteSaver {
    public QuoteModel save(QuoteModel quote) {
        String quoteJSON = SBQQ.ServiceRouter.save('SBQQ.QuoteAPI.QuoteSaver', JSON.serialize(quote));
        return (QuoteModel) JSON.deserialize(quoteJSON, QuoteModel.class);
    }
}
```

```apex
QuoteModel quoteModel; //Use Read, Add Products, or Calculate APIs to obtain a QuoteModel

QuoteSaver saver = new QuoteSaver();
QuoteModel savedQuote = saver.save(quoteModel);
System.debug(savedQuote);
```
