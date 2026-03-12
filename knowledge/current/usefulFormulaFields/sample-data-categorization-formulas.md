---
title: "Sample Data Categorization Formulas"
domain: usefulFormulaFields
topic: sample-data-categorization-formulas
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:21.269Z
estimatedTokens: 324
keywords: [Sample, Data, Categorization, Formulas, categorizations, Deal, Size, Large, Small, Product]
---

# Sample Data Categorization Formulas

> Use these formulas for data categorizations.

# Sample Data Categorization Formulas

Use these formulas for data categorizations.

| Available in: both Salesforce Classic and Lightning Experience |
| --- |
| Available in: All Editions |


For details about using the functions included in these samples, see [Formula Operators and Functions](atlas.en-us.usefulFormulaFields.meta/usefulFormulaFields/customize_functions.htm "Use these operators and functions when building formulas. All functions are available everywhere that you can include a formula, such as formula fields, validation rules, approval processes, and workflow rules, unless otherwise specified.").

## Deal Size Large and Small

This formula displays “Large Deal” for deals over one million dollars or “Small Deal” for deals under one million dollars.

```

```

## Deal Size Small

This formula displays Small if the price and quantity are less than one. This field is blank if the asset has a price or quantity greater than one.

```

```

## Product Categorization

This formula checks the content of a custom text field named Product\_Type and returns Parts for any product with the word “part” in it. Otherwise, it returns Service. The values are case-sensitive, so if a Product\_Type field contains the text “Part” or “PART,” this formula returns Services.

```

```

## Code Examples

```
IF(Sales_Price__c > 1000000, 
"Large Deal", 
"Small Deal")
```

```
IF(AND(Price<1,Quantity<1),"Small", null)
```

```
IF(CONTAINS(Product_Type__c, "part"), "Parts", "Service")
```

## Related Topics

- Formula Operators and Functions (atlas.en-us.usefulFormulaFields.meta/usefulFormulaFields/customize_functions.htm)
