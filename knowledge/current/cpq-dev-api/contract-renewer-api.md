---
title: "Contract Renewer API"
domain: cpq-dev-api
topic: contract-renewer-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.645Z
estimatedTokens: 608
keywords: [Contract, Renewer, API, Receive, CPQ, quote, renewal, quotes, REST, Examples, Apex]
---

# Contract Renewer API

> Receive a CPQ contract in a request, and return quote information for one or more
        renewal quotes.

# Contract Renewer API

Receive a CPQ contract in a request, and return quote information for one or more renewal quotes.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=cpq_dev_api)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. Because changing terms in our code can break current implementations, we maintained this metadata type’s name.

| Available in: Salesforce CPQ Summer ’16 and later |
| --- |
| Special Access Rules: All of these user permissions are required.Insert and update on quote and opportunity objectsRead on quote, opportunity, and product2 objectsDelete on quote object |


Service Provider Name

SBQQ.ContractManipulationAPI.ContractRenewer

Formats

JSON, Apex

HTTP Method

PATCH

Authentication

Authorization: Bearer token

**REQUEST**

Parameter 1

Name: context

Type: RenewalContext

Required: Yes

Description: JSON object containing the contracts to renew. Include the IDs of each contract to renew. If there’s more than one contract, include the ID of the contract to use as the main contract.

Attribute 1

Name: masterContractId

Type: Id

Required: No

Description: If you’re renewing multiple contracts, specify the ID of the main contract.

Attribute 2

Name: renewedContracts

Type: ContractModel\[\]

Required: Yes

Description: One or more ContractModels to renew.

Attribute 3

Available in: Salesforce CPQ Winter ’21 and later

Name: returnOnlyQuoteId

Type: boolean

Required: No

Description: If true, return the ID of the renewed quotes. If false or null, return the information for the renewed quotes.

Default value is false.

**RESPONSE**

If returnOnlyQuoteId is false or null:

Type

QuoteModel\[\]

Description

Representation of one or more SBQQ\_\_Quote\_\_c data for renewal quotes.

**RESPONSE**

If returnOnlyQuoteId is true:

Type

integer

Description

The ID of the SBQQ\_\_Quote\_\_c record.

## REST Examples

```

```

This request body context.json file renews one or more Contracts. The context value is a JSON formatted string.

```

```

An example response body after renewing a quote. The actual response is a JSON formatted string.

```

```

## Apex Examples

Before saving the ContractRenewer example class, ensure that you've created individual Apex classes for your CPQ models.

```

```

Example response body for returnOnlyQuoteId = true:

```

```

## Code Examples

```
curl
     "https://yourInstance.salesforce.com/services/apexrest/SBQQ/ServiceRouter?loader=SBQQ.ContractManipulationAPI.ContractRenewer" -H
     "Content-Type: application/json" -H "Authorization: Bearer token" -X POST -d
     @context.json
```

```
{"context": "{"masterContractId": null, "renewedContracts": 
[{"attributes":{"type":"Contract"},"Id":"800540000006LLVAA2"}]}"}
```

```
[{
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
}]
```

```apex
// Define a class to hold information about the contracts to renew
private with sharing class CreateRenewalContext {
    public Id masterContractId;
    public Contract[] renewedContracts;
public Boolean returnOnlyQuoteId;
}

//define a class to hold the serialized context and the returned quote information
public with sharing class ContractRenewer {
    public QuoteModel[] load(String masterContractId, String serializedContext) {
        String quotesJSON = SBQQ.ServiceRouter.load('SBQQ.ContractManipulationAPI.ContractRenewer', masterContractId, serializedContext);
        return (QuoteModel[]) JSON.deserialize(quotesJSON, List<QuoteModel>.class);
    }
}

// populate the renewal context
CreateRenewalContext context = new CreateRenewalContext();
context.masterContractId = '4567'; 
context.renewedContracts = [SELECT Id FROM Contract WHERE Id IN ('4567', '8910')]; 
// Set returnOnlyQuoteId to true if you only want the Quote ID and not the entire Quote model.
context.returnOnlyQuoteId = true; 
 

// Serialized the renewal context
// For example, context = '{"masterContractId": "8001D000000AUlg", "renewedContracts": 
//[{"attributes":{"type":"Contract"},"Id":"8001D000000AUlg"}, 
// {"attributes":{"type":"Contract"},"Id":"8001D000000AVGt"}]}'; 
String jsonContext = JSON.serialize(context);

// renew the two contracts
ContractRenewer renewer = new ContractRenewer();
QuoteModel[] quotes = renewer.load(null, jsonContext);
```

```
{"attributes":{"type":"SBQQ__Quote__c","url":"/services/data/v50.0/sobjects/SBQQ__Quote__c/123456"},"Id":"56789"}
```
