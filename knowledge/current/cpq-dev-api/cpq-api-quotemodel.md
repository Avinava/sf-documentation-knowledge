---
title: "CPQ API QuoteModel"
domain: cpq-dev-api
topic: cpq-api-quotemodel
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:23.689Z
estimatedTokens: 354
keywords: [CPQ, API, QuoteModel, Quote, model, data, Salesforce]
---

# CPQ API QuoteModel

> The Quote model represents a CPQ quote data model in Salesforce CPQ.

# CPQ API QuoteModel

The Quote model represents a CPQ quote data model in Salesforce CPQ.

| Available in: Salesforce CPQ Summer ’16 and later |
| --- |


| Name | Type | Description |
| --- | --- | --- |
| record | SBQQ__Quote__c | The record that this model represents. |
| lineItems | QuoteLineModel[] | The lines that this quote contains. |
| lineItemGroups | QuoteLineGroupModel[] | The groups that this quote contains. |
| nextKey | Integer | The next key to use for new groups or lines. To keep keys unique, do not lower this value. |
| applyAdditionalDiscountLast | Boolean | Corresponds to the field SBQQ__Quote__c.ApplyAdditionalDiscountLast__c. |
| applyPartnerDiscountFirst | Boolean | Corresponds to the field SBQQ__Quote__c.ApplyPartnerDiscountFirst__c. |
| channelDiscountsOffList | Boolean | Corresponds to the field SBQQ__Quote__c.ChannelDiscountsOffList__c. |
| customerTotal | Decimal | SBQQ__Quote__c.SBQQ__CustomerAmount__c is a roll-up summary field, so its accuracy is guaranteed only after a quote has been saved. In the meantime, its current value is stored in customerTotal. |
| netTotal | Decimal | SBQQ__Quote__c.SBQQ__NetAmount__c is a roll-up summary field, so its accuracy is guaranteed only after a quote has been saved. In the meantime, its current value is stored in netTotal. |
| netNonSegmentTotal | Decimal | The net total for all non-multidimensional quote lines. |

```

```

## Code Examples

```apex
public class QuoteModel {
    public SBQQ__Quote__c record;
    public QuoteLineModel[] lineItems;
    public QuoteLineGroupModel[] lineItemGroups;
    public Integer nextKey;
    public Boolean applyAdditionalDiscountLast;
    public Boolean applyPartnerDiscountFirst;
    public Boolean channelDiscountsOffList;
    public Decimal customerTotal;
    public Decimal netTotal;
    public Decimal netNonSegmentTotal;
}
```
