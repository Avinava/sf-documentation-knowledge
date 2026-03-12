---
title: "Validate Quote API"
domain: cpq-dev-api
topic: validate-quote-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.724Z
estimatedTokens: 272
keywords: [Validate, Quote, API, CPQ, any, validation, errors, REST, Examples, Apex]
---

# Validate Quote API

> Validate a CPQ quote and return any validation errors.

# Validate Quote API

Validate a CPQ quote and return any validation errors.

| Available in: Salesforce CPQ Winter ’19 and later |
| --- |


Formats

JSON, Apex

HTTP Method

PATCH

Authentication

Authorization: Bearer token

**REQUEST**

Parameter 1

Name: quote

Type: QuoteModel

Required: Yes

Description: Representation of SBQQ\_\_Quote\_\_c data.

**RESPONSE**

Type

String\[\]

Description

If the quote is valid, the array is empty. Otherwise, the array contains an item for each validation error.

## REST Examples

```

```

The request body quoteModel.json file validates a quote. The context value is a JSON formatted string/serialization of a quote, the same as the CPQ Save Quote API.

```

```

An example response body after creating the Apex job for generating the quote proposal.

```

```

## Apex Examples

Before saving the Validator example class, make sure that the CPQ model classes are added as individual Apex classes in your org.

```

```

Run the following code in anonymous Apex to get Apex job ID for generating and saving the quote proposal.

```

```

## Code Examples

```
curl "https://yourInstance.salesforce.com/services/apexrest/SBQQ/ServiceRouter?loader=QuoteAPI.QuoteValidator" -H 
"Content-Type: application/json" -H "Authorization: Bearer token" -X PATCH -d @quoteModel.json
```

```
{"context": "{"record": {"attributes":{"type":"SBQQ__Quote__c","url":"/services/data/v41.0/sobjects/SBQQ__Quote__c/a0l61000003kUlVAAU"},
"Name":"Q-00681","Id":"a0l61000003kUlVAAU"},"nextKey":2,"netTotal":0.00,"lineItems":[],"lineItemGroups":[],"customerTotal":0.00}"}
```

```
// valid quote
[]

// invalid quote
[
  "message 1",
  "message 2",
  "message 3"
]
```

```apex
public with sharing class Validator {

   public List<String> validate(QuoteModel quote) {
      String res=SBQQ.ServiceRouter.load(’SBQQ.QuoteAPI.QuoteValidator’, null, JSON.serialize(quote));
      return (List<String>) JSON.deserialize(res, List<String>.class);
   }
}
```

```apex
QuoteModel quoteModel; //Use Read Quote API to obtain a QuoteModel

Validator validator = new Validator();
List<String> msgs = validator.validate(quoteModel);
System.debug(msgs);
```
