---
title: "Sample Opportunity Management Formulas"
domain: usefulFormulaFields
topic: sample-opportunity-management-formulas
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:21.309Z
estimatedTokens: 1058
keywords: [Sample, Opportunity, Management, Formulas, business, expenses, earnings, Expected, Product, Revenue, Maintenance, Calculation, Monthly, Subscription-Based, Calculated]
---

# Sample Opportunity Management Formulas

> Use these formulas for business expenses and earnings.

# Sample Opportunity Management Formulas

Use these formulas for business expenses and earnings.

| Available in: both Salesforce Classic and Lightning Experience |
| --- |
| Available in: All Editions |


For details about using the functions included in these samples, see [Formula Operators and Functions](atlas.en-us.usefulFormulaFields.meta/usefulFormulaFields/customize_functions.htm "Use these operators and functions when building formulas. All functions are available everywhere that you can include a formula, such as formula fields, validation rules, approval processes, and workflow rules, unless otherwise specified.").

## Expected Product Revenue

This formula calculates total revenue from multiple products, each with a different probability of closing.

```

```

## Maintenance Calculation

This formula calculates maintenance fees as 20% of license fees per year. Maintenance Years is a custom field on opportunities.

```

```

## Monthly Subscription-Based Calculated Amounts

This formula calculates an opportunity amount based on a monthly subscription rate multiplied by the subscription period.

```

```

## Monthly Value

This formula divides total yearly value by 12 months.

```

```

## Opportunity Additional Costs

This formula calculates the sum of the product Amount, maintenance amount, and services fees. Maint amount and Service Fees are custom currency fields.

```

```

## Opportunity Categorization

This formula uses conditional logic to populate an Opportunity category text field, based on the value of the Amount standard field. Opportunities with amounts less than $1500 are “Category 1,” opportunities with amounts between $1500 and $10,000 are “Category 2,” and the rest are “Category 3.” This example uses nested IF statements.

```

```

## Opportunity Data Completeness

This formula takes a group of fields and calculates what percent of them are being used by your personnel. This formula field checks five fields to see if they’re blank. If so, a zero is counted for that field. A “1” is counted for any field that contains a value, and this total is divided by five (the number of fields evaluated). This formula requires you to select the **Treat blank fields as blanks** option under Blank Field Handling while the Advanced Formula subtab is showing.

```

```

## Opportunity Expected License Revenue

This formula calculates expected revenue for licenses based on the probability of closing.

```

```

## Opportunity Revenue Text Display

This formula returns the expected revenue amount of an opportunity in text format without a dollar sign. For example, if the Expected Revenue of a campaign is “$200,000,” this formula field displays “200000.”

```

```

## Opportunity Total Deal Size

This formula calculates the sum of maintenance and services amounts.

```

```

## Opportunity Total Price Based on Units

This formula generates proposal pricing based on unit price and total volume.

```

```

## Professional Services Calculation

This formula estimates professional service fees at an average loaded rate of $1200 per day. Consulting Days is a custom field on opportunities.

```

```

## Stage-Based Sales Document Selection

This formula Identifies a relevant document in the Documents tab based on opportunity Stage. Use document IDs in the form of “00l30000000j7AO.”

```

```

## Sales Coach

This formula creates a hyperlink that opens a stage-specific document stored in the Documents tab. It uses the previously defined custom formula field that identifies a document based on opportunity Stage. See [Stage-Based Sales Document Selection](#StageSalesDocument).

```

```

## Shipping Cost by Weight

This formula calculates postal charges based on weight.

```

```

## Shipping Cost Percentage

This formula calculates shipping cost as a fraction of total amount.

```

```

## Tiered Commission Rates

This formula calculates the 2% commission amount of an opportunity that has a probability of 100%. All other opportunities have a commission value of zero.

```

```

## Total Contract Value from Recurring and Non-Recurring Revenue

This formula calculates both recurring and non-recurring revenue streams over the lifetime of a contract.

```

```

## Code Examples

```
ProductA_probability__c * ProductA_revenue__c + ProductB_probability__c * ProductB_revenue__c
```

```
Amount * Maint_Years__c * 0.2
```

```
Monthly_Amount__c * Subscription_Months__c
```

```
Total_value__c / 12
```

```
Amount + Maint_Amount__c +
                    Services_Amount__c
```

## Related Topics

- Formula Operators and Functions (atlas.en-us.usefulFormulaFields.meta/usefulFormulaFields/customize_functions.htm)
