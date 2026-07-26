---
title: "Preference Rule"
domain: revenue-cloud
topic: preference-rule
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-07-26T01:59:39.968Z
estimatedTokens: 319
keywords: [Preference, Rule, encourages, constraint, solver, satisfy, condition, doesn't, enforce, can't, met]
---

> The preference rule encourages the constraint solver to satisfy the condition, but
    doesn't enforce it if the condition can't be met.

# Preference Rule

The preference rule encourages the constraint solver to satisfy the condition, but doesn't enforce it if the condition can't be met.

The system tries to satisfy the condition in a preference rule, but if for some reason it can't, the system delivers a failure message to the user with Info severity.

![Note](/docs/resources/img/en-us/262.0?doc_id=images%2Ficon_note.png&folder=revenue_lifecycle_management_dev_guide)

#### Note

If a preference rule auto-adds a product that has one or more Product Selling Model Options (PSMOs), set one PSMO on the product to Default. The system uses the default PSMO to determine which pricebook entry to use for the auto-added product. For more information, see [Manage Product Selling Model](https://help.salesforce.com/s/articleView?id=ind.product_catalog_product_selling_model.htm&language=en_US "HTML (New Window)") in Revenue Cloud in Salesforce Help.

The preference rule has this syntax.

```

```

A preference rule can include an optional explanation message for failure. The message is of Info severity, meaning it does not block the user from continuing with the action.

In this example, the preference rule encourages the user to mention the dBMax value as 90 and the requiredKW value as 500.

```

```

## Code Examples

```
preference(logic expression, string literal | string variable, argument, .., argument);
preference(logic expression, string literal | string variable);
preference(logic expression);
```

```
type GeneratorSet {
   int requiredKW = [101..10000];
   int dBMax = [0..140];
   preference(dBMax == 90, "90 preferred for dbMax");
   preference(requiredKW == 500,"50 preferred for requiredKW");
}
```
