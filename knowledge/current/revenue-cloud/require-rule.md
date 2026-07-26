---
title: "Require Rule"
domain: revenue-cloud
topic: require-rule
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-07-26T01:59:40.071Z
estimatedTokens: 371
keywords: [Require, Rule, requires, certain, included, relationship, conditions, met]
---

> The require rule requires certain components to be included in a relationship when
    specified conditions are met.

# Require Rule

The require rule requires certain components to be included in a relationship when specified conditions are met.

Required components can have attributes and quantity specified. The require rule can include an optional explanation message, for the rule failure explanation.

In certain scenarios, you can independently add a type at the header level. This means you can include a specific type even if it isn't explicitly defined as part of any of the relationships you've configured. This capability offers flexibility in managing and including necessary types that might not always fall under a specific relationship structure.

![Note](/docs/resources/img/en-us/262.0?doc_id=images%2Ficon_note.png&folder=revenue_lifecycle_management_dev_guide)

#### Note

If a require rule auto-adds a product that has one or more Product Selling Model Options (PSMOs), set one PSMO on the product to Default. The system uses the default PSMO to determine which pricebook entry to use for the auto-added product. For more information, see [Manage Product Selling Model](https://help.salesforce.com/s/articleView?id=ind.product_catalog_product_selling_model.htm&language=en_US "HTML (New Window)") in Revenue Cloud in Salesforce Help.

The require rule has this syntax:

```

```

In this example, the require rule specifies that if the number of engineers is more than 0, installation is required. The installation will be automatically added upon adding an engineer.

```

```

## Code Examples

```
require(logic expression, relationship[type]{var=value,…,var=value}==integer value, "Explanation message");
```

```
type GeneratorSet {
    relation engineers : engineer[0..99];
relation installation : install[0..5];
   require(engineers[engineer] > 0, installation[install], "Installation is required if engineers are present");
}
type engineer{}
type install{}
```
