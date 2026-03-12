---
title: "Sample Financial Calculations Formulas"
domain: usefulFormulaFields
topic: sample-financial-calculations-formulas
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:21.288Z
estimatedTokens: 482
keywords: [Sample, Financial, Calculations, Formulas, Compound, Interest, Continuous, Consultant, Cost, Gross, Margin, Percent, Payment, Due, Indicator]
---

# Sample Financial Calculations Formulas

> Use these formulas for financial calculations.

# Sample Financial Calculations Formulas

Use these formulas for financial calculations.

| Available in: both Salesforce Classic and Lightning Experience |
| --- |
| Available in: All Editions |


For details about using the functions included in these samples, see [Formula Operators and Functions](atlas.en-us.usefulFormulaFields.meta/usefulFormulaFields/customize_functions.htm "Use these operators and functions when building formulas. All functions are available everywhere that you can include a formula, such as formula fields, validation rules, approval processes, and workflow rules, unless otherwise specified.").

## Compound Interest

This formula calculates the interest that you have after T years, compounded M times per year.

```

```

## Compound Interest Continuous

This formula calculates the interest that will have accumulated after T years, if continuously compounded.

```

```

## Consultant Cost

This formula calculates the number of consulting days times 1200 given that this formula field is a currency data type and consulting charges a rate of $1200 per day. Consulting Days is a custom field.

```

```

## Gross Margin

This formula provides a simple calculation of gross margin. In this formula example, Total Sales and Cost of Goods Sold are custom currency fields.

```

```

## Gross Margin Percent

This formula calculates the gross margin based on a margin percent.

```

```

## Payment Due Indicator

This formula returns the date five days after the contract start date whenever Payment Due Date is blank. Payment Due Date is a custom date field.

```

```

## Payment Status

This formula determines if the payment due date is past and the payment status is “UNPAID.” If so, it returns the text “PAYMENT OVERDUE” and if not, it leaves the field blank. This example uses a custom date field called Payment Due Date and a text custom field called Payment Status on contracts.

```

```

## Code Examples

```
Principal__c * ( 1 + Rate__c / M ) ^ ( T * M) )
```

```
Principal__c * EXP(Rate__c * T)
```

```
Consulting_Days__c *
                    1200
```

```
Total_Sales__c - Cost_of_Goods_Sold__c
```

```
Margin_percent__c * Items_Sold__c * Price_item__c
```

## Related Topics

- Formula Operators and Functions (atlas.en-us.usefulFormulaFields.meta/usefulFormulaFields/customize_functions.htm)
