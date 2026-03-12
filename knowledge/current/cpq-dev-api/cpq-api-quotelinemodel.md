---
title: "CPQ API QuoteLineModel"
domain: cpq-dev-api
topic: cpq-api-quotelinemodel
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:23.699Z
estimatedTokens: 449
keywords: [CPQ, API, QuoteLineModel, Quote, Line, model, data, Salesforce]
---

# CPQ API QuoteLineModel

> The Quote Line model represents a quote line data model in Salesforce CPQ.

# CPQ API QuoteLineModel

The Quote Line model represents a quote line data model in Salesforce CPQ.

| Available in: Salesforce CPQ Summer ’16 and later |
| --- |


| Name | Type | Description |
| --- | --- | --- |
| record | SBQQ__QuoteLine__c | The record that this model represents. |
| amountDiscountProrated | Boolean | Corresponds to SBQQ__QuoteLine__c.ProrateAmountDiscount__c. |
| parentGroupKey | Integer | The unique key of this line’s group, if this line is part of a grouped quote. |
| parentItemKey | Integer | The unique key of this line’s parent, if this line is part of a bundle. |
| key | Integer | Each quote line and group has a key that is unique amongst all other keys in the same quote. |
| upliftable | Boolean | True if this line is an MDQ segment that can be uplifted from a previous segment. |
| configurationType | String | Indicates the configuration type of the product that this line represents. |
| configurationEvent | String | Indicates the configuration event of the product that this line represents. |
| reconfigurationDisabled | Boolean | If true, this line cannot be reconfigured. |
| descriptionLocked | Boolean | If true, this line’s description cannot be changed. |
| productQuantityEditable | Boolean | If true, this line’s quantity is editable. |
| productQuantityScale | Decimal | The number of decimal places used for rounding this line’s quantity. |
| dimensionType | String | The type of MDQ dimension that this line represents. |
| productHasDimensions | Boolean | If true, the underlying product can be represented as a multidimensional line. |
| targetCustomerAmount | Decimal | The unit price forwhich this quote line is discounted. |
| targetCustomerTotal | Decimal | The customer amount for which this quote line is discounted. |

```

```

## Code Examples

```apex
public class QuoteLineModel {
    public SBQQ__QuoteLine__c record;
    public Boolean amountDiscountProrated;
    public Integer parentGroupKey;
    public Integer parentItemKey;
    public Integer key;
    public Boolean upliftable;
    public String configurationType;
    public String configurationEvent;
    public Boolean reconfigurationDisabled;
    public Boolean descriptionLocked;
    public Boolean productQuantityEditable;
    public Decimal productQuantityScale;
    public String dimensionType;
    public Boolean productHasDimensions;
    public Decimal targetCustomerAmount;
    public Decimal targetCustomerTotal;
}
```
