---
title: "Sample Expense Tracking Formulas"
domain: usefulFormulaFields
topic: sample-expense-tracking-formulas
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:21.282Z
estimatedTokens: 174
keywords: [Sample, Expense, Tracking, Formulas, Identifier, Mileage, Calculation]
---

# Sample Expense Tracking Formulas

> Use these formulas for expense tracking.

# Sample Expense Tracking Formulas

Use these formulas for expense tracking.

| Available in: both Salesforce Classic and Lightning Experience |
| --- |
| Available in: All Editions |


For details about using the functions included in these samples, see [Formula and Operator Functions](https://help.salesforce.com/s/articleView?id=sf.customize_functions.htm&language=en_US).

## Expense Identifier

This formula displays the text Expense- followed by trip name and the expense number. This field a text formula field that uses an expense number custom field.

```

```

## Mileage Calculation

This formula calculates mileage expenses for visiting a customer site at 35 cents a mile.

```

```

## Code Examples

```
"Expense-" &
                    Trip_Name__c & "-" & ExpenseNum__c
```

```
Miles_Driven__c * 0.35
```
