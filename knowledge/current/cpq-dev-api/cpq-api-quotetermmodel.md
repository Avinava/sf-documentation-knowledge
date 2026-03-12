---
title: "CPQ API QuoteTermModel"
domain: cpq-dev-api
topic: cpq-api-quotetermmodel
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:23.709Z
estimatedTokens: 401
keywords: [CPQ, API, QuoteTermModel, QuoteTerm, model, quote, term, Salesforce]
---

# CPQ API QuoteTermModel

> The QuoteTerm model represents the quote term object in Salesforce CPQ.

# CPQ API QuoteTermModel

The QuoteTerm model represents the quote term object in Salesforce CPQ.

| Available in: Salesforce CPQ Summer ’16 and later |
| --- |


| Name | Type | Description |
| --- | --- | --- |
| id | Id | ID for the quote term. |
| label | String | For quote templates with multiple quote terms, this field defines the order in which the terms appear on the quote document. Terms are ordered from the lowest to highest value. |
| locked | Boolean | Defines whether sales reps can edit the quote term. Corresponds directly to SBQQ__QuoteTerm__c.SBQQ__Locked__c. |
| quoteId | Id | Allows users to relate the quote term to a specific quote. Left blank if the term applies to multiple quotes. Corresponds directly to SBQQ__QuoteTerm__c.SBQQ__Quote__c. |
| standardTermId | Id | If the quote term was created by clicking Modify Terms on the quote, standardTermId shows the original quote term’s ID. Corresponds directly to SBQQ__QuoteTerm__c.SBQQ__StandardTerm__c. |
| type | String | Shows whether the term is standard, modified, or custom. Unmodified terms have a Type value of Standard. When a user clicks Modify Terms on a quote and changes the term, Salesforce CPQ creates a quote term with a Type value of Modified. Corresponds directly to SBQQ__QuoteTerm__c.SBQQ__Type__c. |
| value | String | Value of the quote term’s Body field, or the translated value of the Body field when using CPQ translations. Quote Term Body field value or the translated value when using CPQ translations. Maximum 32,768 characters. Corresponds directly to SBQQ__QuoteTerm__c.SBQQ__Body__c. |

```

```

## Code Examples

```apex
public class QuoteTermModel {
    public String value;
    public String type;
    public Id standardTermId;
    public Id quoteId;
    public Boolean locked;
    public String label;
    public Id id;
}
```
