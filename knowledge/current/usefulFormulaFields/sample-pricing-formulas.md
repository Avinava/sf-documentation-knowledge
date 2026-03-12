---
title: "Sample Pricing Formulas"
domain: usefulFormulaFields
topic: sample-pricing-formulas
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:21.312Z
estimatedTokens: 203
keywords: [Sample, Pricing, Formulas, total, amounts, user, Amount]
---

# Sample Pricing Formulas

> Use these formulas for total amounts and user pricing.

# Sample Pricing Formulas

Use these formulas for total amounts and user pricing.

| Available in: both Salesforce Classic and Lightning Experience |
| --- |
| Available in: All Editions |


For details about using the functions included in these samples, see [Formula Operators and Functions by Context](atlas.en-us.usefulFormulaFields.meta/usefulFormulaFields/customize_functions.htm "Use these operators and functions when building formulas. All functions are available everywhere that you can include a formula, such as formula fields, validation rules, approval processes, and workflow rules, unless otherwise specified.").

## Total Amount

This formula calculates a total amount based on unit pricing and total units.

```

```

## User Pricing

This formula calculates a price per user license.

```

```

## Code Examples

```
Unit_price__c * Total_units__c
```

```
Total_license_rev__c / Number_user_licenses__c
```

## Related Topics

- Formula Operators and Functions by Context (atlas.en-us.usefulFormulaFields.meta/usefulFormulaFields/customize_functions.htm)
