---
title: "Sample Discounting Formulas"
domain: usefulFormulaFields
topic: sample-discounting-formulas
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:21.272Z
estimatedTokens: 338
keywords: [Sample, Discounting, Formulas, calculate, discount, amounts, Maintenance, Services, Opportunity, Amount, Rounded, Approval]
---

# Sample Discounting Formulas

> Use these formulas to calculate discount amounts.

# Sample Discounting Formulas

Use these formulas to calculate discount amounts.

| Available in: both Salesforce Classic and Lightning Experience |
| --- |
| Available in: All Editions |


For details about using the functions included in these samples, see [Formula and Operator Functions](https://help.salesforce.com/s/articleView?id=sf.customize_functions.htm&language=en_US).

## Maintenance and Services Discount

This formula field uses two custom currency fields: Maintenance Amount and Services Amount. It displays “Discounted” on an opportunity if its maintenance amount and services amount don’t equal the opportunity Amount standard field value. Otherwise, it displays "Full Price."

```

```

## Opportunity Discount Amount

This formula calculates the difference of the product Amount less the Discount Amount. Discount Amount is a custom currency field.

```

```

## Opportunity Discount Rounded

Use this formula to calculate the discounted amount of an opportunity rounded off to two digits. This example is a number formula field on opportunities that uses a custom percent field called Discount Percent.

```

```

## Opportunity Discount with Approval

This formula adds a “Discount Approved” checkbox to an opportunity. It uses conditional logic to check the value of the approval flag before calculating the commission.

```

```

## Code Examples

```
IF(Maintenance_Amount__c + Services_Amount__c <> Amount, 
"Discounted", 
"Full Price")
```

```
Amount -
                    Discount_Amount__c
```

```
ROUND(Amount-Amount* Discount_Percent__c,2)
```

```
IF(Discount_Approved__c, ROUND(Amount – Amount * DiscountPercent__c, 2), Amount)
```
