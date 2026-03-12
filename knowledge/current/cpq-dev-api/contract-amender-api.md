---
title: "Contract Amender API"
domain: cpq-dev-api
topic: contract-amender-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.637Z
estimatedTokens: 443
keywords: [Contract, Amender, API, Receive, CPQ, quote, data, amendment, REST, Examples, Apex]
---

# Contract Amender API

> Receive a CPQ contract ID in a request, and return quote data for an amendment
  quote.

# Contract Amender API

Receive a CPQ contract ID in a request, and return quote data for an amendment quote.

| Available in: Salesforce CPQ Summer ’16 and later |
| --- |
| Special Access Rules: All of these user permissions are required.Create on OpportunityRead on Quote, Opportunity, and Product2Insert and update on Quote and OpportunityDelete on Quote and OpportunityImportantWithout full access on Opportunity, an error results, and contract amendment fails. |


Service Provider Name

SBQQ.ContractManipulationAPI.ContractAmender

Formats

JSON, Apex

HTTP Method

PATCH

Authentication

Authorization: Bearer token

**REQUEST**

Parameter 1

Name: uid

Type: String

Required: Yes

Description: 15-character case sensitive or 18-character case insensitive Salesforce Contract ID to amend.

Parameter 2

Available in: Salesforce CPQ Winter ’21 and later

Name: AmendmentContext

Type: AmendmentContext

Required: No

Description: Context for the contract to amend.

**RESPONSE**

Type

QuoteModel

Description

Representation of SBQQ\_\_Quote\_\_c data for an amendment quote

## REST Examples

```

```

An example response body after amending a quote. The actual response is a JSON formatted string.

```

```

An example response body after amending a quote. The actual response is a JSON formatted string.

```

```

## Apex Examples

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=cpq_dev_api)

#### Note

Before saving the ContractAmender example class, make sure that the CPQ model classes are added as individual Apex classes in your org.

In this example, the amendment context isn’t used.

```

```

In this example, the amendment context is used.

```

```

Example response body for returnOnlyQuoteId = true:

```

```

## Code Examples

```
curl "https://yourInstance.salesforce.com/services/apexrest/SBQQ/ServiceRouter?loader=SBQQ.ContractManipulationAPI.ContractAmender&uid=800R00000000X4g"
    -H  "Content-Type: application/json" -H "Authorization: Bearer token" -X PATCH
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

```
{
  "record": {
    "attributes": {
      "type": "SBQQ__Quote__c",
      "url": "/services/data/v41.0/sobjects/SBQQ__Quote__c/a0p61000004IpR8AAK"
    }
  },
  "nextKey": 4,
  "netTotal": 0.00,
  "lineItems": [
    {
      "record": {
        "attributes": {
          "type": "SBQQ__QuoteLine__c"
        },
        "SBQQ__Product__c": "01t610000033JNtAAM"
      },
      "productQuantityEditable": true,
      "productHasDimensions": false,
      "key": 3,
      "descriptionLocked": false
    },
    {
      "record": {
        "attributes": {
          "type": "SBQQ__QuoteLine__c"
        },
        "SBQQ__Product__c": "01t610000033JNUAA2",
        "SBQQ__Product__r": {
          "attributes": {
            "type": "Product2",
            "url": "/services/data/v41.0/sobjects/Product2/01t610000033JNUAA2"
          },
          "Id": "01t610000033JNUAA2",
          "Name": "Product 2",
          "ProductCode": "P2"
        }
      }
    }
  ],
  "lineItemGroups": [
    {
      "record": {
        "attributes": {
          "type": "SBQQ__QuoteLineGroup__c",
          "url": "/services/data/v41.0/sobjects/SBQQ__QuoteLineGroup__c/a0k61000008WIF1AAO"
        },
        "SBQQ__Quote__c": "a0p61000004IpR8AAK",
        "Id": "a0k61000008WIF1AAO",
        "SBQQ__Number__c": 1.0,
        "SBQQ__SeparateContract__c": false,
        "Name": "Group1"
      },
      "key": 2,
      "hasMultiSegmentLines": false
    }
  ],
  "customerTotal": 0.00
}
```

```apex
public with sharing class ContractAmender {
    public QuoteModel load(String contractId) {
        String quoteJSON = SBQQ.ServiceRouter.load('SBQQ.ContractManipulationAPI.ContractAmender', contractId, null);
        return (QuoteModel) JSON.deserialize(quoteJSON, QuoteModel.class);
    }
}
 
ContractAmender amender = new ContractAmender();
QuoteModel quote = amender.load('8001D000000AUlg'); // example id
System.debug(quote);
```

```apex
public with sharing class ContractAmenderTest {

    public QuoteModel load(String contractId, String context) {

        String quoteJSON = SBQQ.ServiceRouter.load('SBQQ.ContractManipulationAPI.ContractAmender', contractId, context);
        return (QuoteModel) JSON.deserialize(quoteJSON, QuoteModel.class);
    }
}

// Create an amendment context
private with sharing class AmendmentContextTest {
    public Boolean returnOnlyQuoteId;
}

AmendmentContextTest context = new AmendmentContextTest();
context.returnOnlyQuoteId = true; 

// Invoke the ContractAmender API
String contextJson = JSON.serialize(context);
ContractAmenderTest amender = new ContractAmenderTest();
QuoteModel quote = amender.load('CONTRACT_ID', contextJson);
```
