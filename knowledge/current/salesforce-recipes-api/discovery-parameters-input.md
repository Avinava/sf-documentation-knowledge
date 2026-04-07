---
title: "Discovery Parameters Input"
domain: salesforce-recipes-api
topic: discovery-parameters-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:39:18.256Z
estimatedTokens: 207
keywords: [Discovery, Einstein, prediction, node, recipe]
---

> The parameters for an Einstein Discovery prediction node in a recipe.

# Discovery Parameters Input

The parameters for an Einstein Discovery prediction node in a recipe.

## Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| column​Mapping | Map<String, String> | The map of column mappings. | Required | 51.0 |
| multi​Class​Fields | Discovery​Contributor​Input[] | The list of multiclass fields. | Required | 56.0 |
| predict​Source | Recipe​Type​Name​Input | The prediction source. | Required | 51.0 |
| prediction​Factor​Fields | Discovery​Contributor​Input[] | The list of prediction factor fields. | Required | 51.0 |
| prediction​Field | Recipe​Name​Label​Input | The prediction field. | Required | 51.0 |
| prescription​Fields | Discovery​Contributor​Input[] | The list of prescription fields. | Required | 51.0 |

## Related Topics

- Discovery​Contributor​Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_discovery_contributor_input.htm)
- Recipe​Type​Name​Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_recipe_type_name_input.htm)
- Recipe​Name​Label​Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_recipe_name_label_input.htm)
