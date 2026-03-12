---
title: "Pricing Recipe Input"
domain: revenue-cloud
topic: pricing-recipe-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:08.152Z
estimatedTokens: 155
keywords: [Pricing, Recipe, Input, representation]
---

# Pricing Recipe Input

> Input representation to set up a pricing recipe page.

# Pricing Recipe Input

Input representation to set up a pricing recipe page.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| pricing​RecipeLookUp​Table​Input​Representations | Pricing Recipe LookUp Table Input[] | Input representation of the recipe mapping. | Required | 60.0 |
| pricing​Recipe​Procedure​Input​Representation | Pricing Recipe Procedure Input | Input representation of the procedure that’s used in the pricing recipe. | Required | 60.0 |
| recipeId | String | ID of the pricing recipe. | Required | 60.0 |

## Code Examples

```
{
    "recipeId" : "12Gxx0000005J9MEAU",
    "pricingRecipeLookUpTableInputRepresentations": [
    {
      lookupId: “12Gxx0000005J9MEAU”, 
      pricingComponentType: “CustomDiscount”
  },
    {
      lookupId: “12Gxx0000005J9MEAU”, 
      pricingComponentType: “CustomDiscount”
  }
 ],
    "pricingRecipeProcedureInputRepresentation" : {
    "procedureId" : "9QLxx0000004C92GAE"
}
}
```

## Related Topics

- Pricing Recipe LookUp Table Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_pricing_recipe_look_up_table_input.htm)
- Pricing
                        Recipe Procedure Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_pricing_recipe_procedure_input.htm)
