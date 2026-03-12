---
title: "Append Parameters Input"
domain: salesforce-recipes-api
topic: append-parameters-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:42.112Z
estimatedTokens: 119
keywords: [Append, Input, node, recipe]
---

# Append Parameters Input

> The parameters for an append node in a recipe.

# Append Parameters Input

The parameters for an append node in a recipe.

## Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| allow​Implicit​Disjoint​Schema | Boolean | Indicates whether disjoint schema merge is allowed when automatically mapping fields (true) or not (false). | Optional | 55.0 |
| field​Mappings | Append​Mapping​Input[] | The list of mappings for the node. | Required | 51.0 |

## Related Topics

- Append​Mapping​Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_append_mapping_input.htm)
