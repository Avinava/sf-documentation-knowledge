---
title: "Join Parameters"
domain: salesforce-recipes-api
topic: join-parameters
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:39:19.240Z
estimatedTokens: 160
keywords: [Join, node, recipe]
---

> The parameters for a join node in a recipe.

# Join Parameters

The parameters for a join node in a recipe.

## Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| join​Type | Recipe​Join​Type | The join type. Valid values are:CrossInnerLeft​OuterLookupMulti​Value​LookupOuterRight​Outer | Small, v51.0 | 51.0 |
| left​Keys | String[] | The list of left keys. | Small, v51.0 | 51.0 |
| left​Qualifier | String | The left qualifier. | Small, v51.0 | 51.0 |
| right​Keys | String[] | The list of right keys. | Small, v51.0 | 51.0 |
| right​Qualifier | String | The right qualifier. | Small, v51.0 | 51.0 |
