---
title: "Sample Commission Calculations Formulas"
domain: usefulFormulaFields
topic: sample-commission-calculations-formulas
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:21.259Z
estimatedTokens: 444
keywords: [Sample, Commission, Calculations, Formulas, calculate, amounts, Opportunities, Deal, Size, Greater, Equal, Maximum]
---

# Sample Commission Calculations Formulas

> Use these formulas to calculate commission amounts.

# Sample Commission Calculations Formulas

Use these formulas to calculate commission amounts.

| Available in: both Salesforce Classic and Lightning Experience |
| --- |
| Available in: All Editions |


For details about using the functions included in these samples, see [Formula Operators and Functions](atlas.en-us.usefulFormulaFields.meta/usefulFormulaFields/customize_functions.htm "Use these operators and functions when building formulas. All functions are available everywhere that you can include a formula, such as formula fields, validation rules, approval processes, and workflow rules, unless otherwise specified.").

## Commission Amounts for Opportunities

The following is a simple formula where commission is based on a flat 2% of the opportunity Amount.

```

```

This example calculates the commission amount for any opportunity that has a “Closed Won” stage. The value of this field is the amount times 0.02 for any closed or won opportunity. Open or lost opportunities have a zero commission value.

## Commission Deal Size

This formula calculates a commission rate based on deal size, returning a 9% commission rate for deals over 100,000 and an 8% commission rate for smaller deals.

```

```

## Commission Greater Than or Equal To

This formula assigns the YES value with a commission greater than or equal to one million. Note, this field is a text formula field that uses a custom currency field called Commission.

```

```

## Commission Maximum

This formula determines what commission to log for an asset based on which is greater: the user's commission percentage of the price, the price times the discount percent stored for the account or 100 dollars. This example assumes you have two custom percent fields on users and assets.

```

```

## Code Examples

```
IF(ISPICKVAL(StageName, "Closed Won"), 
  ROUND(Amount *0.02, 2), 0)
```

```
IF(Amount > 100000, 0.09, 0.08 )
```

```
IF(Commission__c >=
                    1000000, "YES", "NO")
```

```
MAX($User.Commission_Percent__c * Price,
  ​Price * Account_Discount__c, 100)
```

## Related Topics

- Formula Operators and Functions (atlas.en-us.usefulFormulaFields.meta/usefulFormulaFields/customize_functions.htm)
