---
title: "Quote Term Reader API"
domain: cpq-dev-api
topic: quote-term-reader-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:23.692Z
estimatedTokens: 318
keywords: [Quote, Term, Reader, API, Retrieve, terms, REST, Examples, Apex]
---

# Quote Term Reader API

> Retrieve quote terms for a quote.

# Quote Term Reader API

Retrieve quote terms for a quote.

| Available in: Salesforce CPQ Summer ’19 and later |
| --- |


Formats

JSON, Apex

HTTP Method

PATCH

Authentication

Authorization: Bearer token

**REQUEST**

Parameter 1

Name: quoteId

Type: Id

Required: Yes

Description: The quote record's ID

Parameter 2

Name: templateId

Type: Id

Required: Optional

Description: The quote template record's ID. If you don’t include the templateId parameter, the quote terms associated with the template contents don’t return.

Parameter 3

Name: language

Type: String

Required: Optional

Description: Language code when using CPQ translations.

**RESPONSE**

Type

QuoteTermModel

Description

The representation of SBQQ\_\_QuoteTerm\_\_c data

## REST Examples

```

```

Example request body termContext.json file for reading quote terms. The context value is a JSON-formatted string.

```

```

An example response body returning two quote terms. The actual response is a JSON-formatted string.

```

```

## Apex Examples

Before saving the QuoteTermReader example class, make sure that the CPQ model classes are added as individual Apex classes in your org.

```

```

For an example of the QuoteTermReader class, run this code in anonymous Apex.

```

```

## Code Examples

```
curl "https://yourInstance.salesforce.com/services/apexrest/SBQQ/
ServiceRouter?loader=SBQQ.QuoteTermAPI.Load&uid=a0x5C000000G1CV" 
-H "Content-Type: application/json" -H "Authorization: Bearer token" -X PATCH -d "@termContext.json"
```

```
{"context":"{"templateId": "a0v5C000000jTgr", "language": "es"}"}
```

```
[
    {
        "value": "Hasta 10 sesiones concurrentes incluidas.",
        "type": "Standard",
        "standardTermId": null,
        "quoteId": null,
        "locked": false,
        "label": "1",
        "id": "a0w5C000000cbaFQAQ"
    },
    {
        "value": "$ 50USD / por mes por licencia de sesión adicional.",
        "type": "Standard",
        "standardTermId": null,
        "quoteId": null,
        "locked": false,
        "label": "1.1",
        "id": "a0w5C000000cbaKQAQ"
    }
]
```

```apex
public with sharing class QuoteTermReader {
    
    public List<QuoteTermModel> load(Id quoteId, Id templateId, String language) {
        TermContext ctx = new TermContext(templateId, language);
        String quoteTermsJSON = SBQQ.ServiceRouter.load('SBQQ.QuoteTermAPI.Load', quoteId, JSON.serialize(ctx));
        return (List<QuoteTermModel>) JSON.deserialize(quoteTermsJSON, List<QuoteTermModel>.class);
    }

    private class TermContext {
        private Id templateId;
        private String language;
    
        private TermContext(Id templateId, String language) {
            this.templateId = templateId;
            this.language = language;
        }
    }
}
```

```apex
QuoteTermReader quoteTermReader = new QuoteTermReader();
List<QuoteTermModel> quoteTerms = quoteTermReader.load('a0x5C000000G1CV', 'a0v5C000000jTgr', 'es');
System.debug(quoteTerms);
```
