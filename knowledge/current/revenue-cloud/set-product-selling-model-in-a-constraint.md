---
title: "Set Product Selling Model in a Constraint"
domain: revenue-cloud
topic: set-product-selling-model-in-a-constraint
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-07-26T01:59:40.088Z
estimatedTokens: 302
keywords: [Product, Selling, Model, Constraint, productSellingModel, tagname, write, PSM, define, time, time-deferred, subscription, end, date, evergreen, recurring, preset, updated, new, line, items, runtime]
---

> Use the productSellingModel tagname to write a constraint that sets the Product Selling
    Model (PSM) for a type. You can define a PSM as one time, time-deferred (subscription with end
    date), or evergreen (recurring subscription with no preset end date). The PSM is updated for new
    line items at runtime, based on the constraint.

# Set Product Selling Model in a Constraint

Use the productSellingModel tagname to write a constraint that sets the Product Selling Model (PSM) for a type. You can define a PSM as one time, time-deferred (subscription with end date), or evergreen (recurring subscription with no preset end date). The PSM is updated for new line items at runtime, based on the constraint.

You can’t use a Constraint Modeling Language (CML) constraint to update the PSM for an existing quote line. For more information on product selling models, see [Manage Product Selling Model](https://help.salesforce.com/s/articleView?id=ind.product_catalog_product_selling_model.htm&language=en_US "HTML (New Window)") in Revenue Cloud in Salesforce Help.

## Constraint Example

Using the GeneratorSet model, a constraint can be defined that sets the PSM based on a specific operational attribute chosen by the user, such as the DutyRating. This assumes that different duty ratings correspond to different billing models (for example, permanent installation versus temporary rental).

This example sets the PSM to a specific ID (for example, PSM\_EVERGREEN\_ID) if the user selects the "Continuous Power (COP)" duty rating.

```

```

## Code Examples

```
//Global variable PSM ID
define PSM_EVERGREEN_ID "a00Tx000000Qz1g"
type GeneratorSet {
// Use the productSellingModel tag from the context definition
@(tagName = "ProductSellingModel")
string productSellingModel;
string DutyRating = ["Prime Power (PRP)", "Continuous Power (COP)", "Emergency Standby Power (ESP)"];
// Set PSM based on Duty Rating
constraint(
DutyRating == 'Continuous Power (COP)' ->    productSellingModel == PSM_EVERGREEN_ID
);
}
```
