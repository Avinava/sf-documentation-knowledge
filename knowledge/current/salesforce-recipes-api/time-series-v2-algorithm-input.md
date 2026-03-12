---
title: "Time Series V2 Algorithm Input"
domain: salesforce-recipes-api
topic: time-series-v2-algorithm-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:42.529Z
estimatedTokens: 104
keywords: [Time, Series, Algorithm, Input, version, node, recipe]
---

# Time Series V2 Algorithm Input

> The algorithm for a time series version 2 node in a recipe.

# Time Series V2 Algorithm Input

The algorithm for a time series version 2 node in a recipe.

## Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| model | Recipe​Time​Series​Model | The time series model. Valid values are:AdditiveAutoMultiplicative | Required | 54.0 |
| seasonality | Integer | The seasonality value. | Required | 54.0 |
