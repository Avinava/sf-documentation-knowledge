---
title: "Discovery Parameters"
domain: salesforce-recipes-api
topic: discovery-parameters
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:42.735Z
estimatedTokens: 205
keywords: [Discovery, Einstein, predict, node, recipe]
---

# Discovery Parameters

> The parameters for an Einstein Discovery predict node in a recipe.

# Discovery Parameters

The parameters for an Einstein Discovery predict node in a recipe.

## Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| column​Mapping | Map<String, String> | The map of column mappings. | Small, v51.0 | 51.0 |
| multi​Class​Fields | Discovery​Contributor[] | The list of multiclass fields. | Small, v56.0 | 56.0 |
| predict​Source | Discovery​Source | The prediction source. | Small, v51.0 | 51.0 |
| prediction​Factor​Fields | Discovery​Contributor[] | The list of prediction factor fields. | Small, v51.0 | 51.0 |
| prediction​Field | Recipe​Name​Label | The prediction field. | Small, v51.0 | 51.0 |
| prescription​Fields | Discovery​Contributor[] | The list of prescription fields. | Small, v51.0 | 51.0 |

## Related Topics

- Discovery​Contributor (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_discovery_contributor.htm)
- Discovery​Source (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_discovery_source.htm)
- Recipe​Name​Label (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_responses_recipe_name_label.htm)
