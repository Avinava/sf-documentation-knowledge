---
title: "Extension Parameters Input"
domain: salesforce-recipes-api
topic: extension-parameters-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:39:18.286Z
estimatedTokens: 135
keywords: [Extension, node, recipe]
---

> The parameters for an extension node in a recipe.

# Extension Parameters Input

The parameters for an extension node in a recipe.

## Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| args | Map<Object, Object> | A map of extension arguments, defined by the extension definition | Required | 56.0 |
| name | String | The name of the extension. | Required | 56.0 |
| namespace | String | The namespace of the extension. | Required | 56.0 |
| version | Double | The version of the extension. | Required | 56.0 |
