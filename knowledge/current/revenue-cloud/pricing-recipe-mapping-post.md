---
title: "Pricing Recipe Mapping (POST)"
domain: revenue-cloud
topic: pricing-recipe-mapping-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:07.066Z
estimatedTokens: 267
keywords: [Pricing, Recipe, Mapping, POST, Create, mapping, between, pricing, recipe, Decision, Tables., Post, recipes, lookup, tables, procedures.]
---

# Pricing Recipe Mapping (POST)

> Create a mapping between the pricing recipe and the Decision Tables.
      Post recipes with lookup tables or procedures.

# Pricing Recipe Mapping (POST)

Create a mapping between the pricing recipe and the Decision Tables. Post recipes with lookup tables or procedures.

Resource

```

```

Resource example

```

```

Available version

60.0

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| pricing​RecipeLookUp​Table​Input​Representations | Pricing Recipe LookUp Table Input[] | Input representation of the recipe mapping. | Required | 60.0 |
| pricing​Recipe​Procedure​Input​Representation | Pricing Recipe Procedure Input | Input representation of the procedure that’s used in the pricing recipe. | Required | 60.0 |
| recipeId | String | ID of the pricing recipe. | Required | 60.0 |

Response body for POST

[Pricing Recipe Post](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_pricing_recipe_post_output.htm "Output representation of the pricing recipe after the API request.")

## Code Examples

```
/connect/core-pricing/recipe/mapping
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/core-pricing/recipe/mapping
```

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
- Pricing Recipe
              Post (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_pricing_recipe_post_output.htm)
