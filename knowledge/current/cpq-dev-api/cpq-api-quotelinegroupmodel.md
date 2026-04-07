---
title: "CPQ API QuoteLineGroupModel"
domain: cpq-dev-api
topic: cpq-api-quotelinegroupmodel
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:27.357Z
estimatedTokens: 131
keywords: [CPQ, API, QuoteLineGroupModel, Quote, Line, Group, model, Salesforce]
---

> The Quote Line Group model represents a quote line group data model in Salesforce
  CPQ.

# CPQ API QuoteLineGroupModel

The Quote Line Group model represents a quote line group data model in Salesforce CPQ.

| Available in: Salesforce CPQ Summer ’16 and later |
| --- |


| Name | Type | Description |
| --- | --- | --- |
| record | SBQQ__QuoteLineGroup__c | The record that this model represents. |
| netNonSegmentTotal | Decimal | The net total for all non-multidimensional quote lines. |
| key | Integer | Each quote line and group has a key that is unique amongst all other keys in the same quote. |

```

```

## Code Examples

```apex
public class QuoteLineGroupModel {
    public SBQQ__QuoteLineGroup__c record;
    public Decimal netNonSegmentTotal;
    public Integer key;
}
```
