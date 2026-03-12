---
title: "Update Parameters Input"
domain: salesforce-recipes-api
topic: update-parameters-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:42.562Z
estimatedTokens: 108
keywords: [Input, node, recipe]
---

# Update Parameters Input

> The parameters for an update node in a recipe.

# Update Parameters Input

The parameters for an update node in a recipe.

## Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| left​Keys | String[] | The list of left keys. | Required | 54.0 |
| right​Keys | String[] | The right of left keys. | Required | 54.0 |
| update​Columns | Map<String, String> | The map of columns to update. | Required | 54.0 |
