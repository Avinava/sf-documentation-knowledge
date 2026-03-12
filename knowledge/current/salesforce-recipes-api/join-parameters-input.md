---
title: "Join Parameters Input"
domain: salesforce-recipes-api
topic: join-parameters-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:42.286Z
estimatedTokens: 155
keywords: [Join, Input, node, recipe]
---

# Join Parameters Input

> The parameters for a join node in a recipe.

# Join Parameters Input

The parameters for a join node in a recipe.

## Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| join​Type | Recipe​Join​Type | The join type. Valid values are:CrossInnerLeft​OuterLookupMulti​Value​LookupOuterRight​Outer | Required | 51.0 |
| left​Keys | String[] | The list of left keys. | Required | 51.0 |
| left​Qualifier | String | The left qualifier. | Required | 51.0 |
| right​Keys | String[] | The list of right keys. | Required | 51.0 |
| right​Qualifier | String | The right qualifier. | Required | 51.0 |
