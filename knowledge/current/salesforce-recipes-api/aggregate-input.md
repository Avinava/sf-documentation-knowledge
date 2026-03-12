---
title: "Aggregate Input"
domain: salesforce-recipes-api
topic: aggregate-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:42.097Z
estimatedTokens: 141
keywords: [Aggregate, Input, data, recipe, node]
---

# Aggregate Input

> The aggregate data for a recipe node.

# Aggregate Input

The aggregate data for a recipe node.

## Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| action | Recipe​Aggregate​Type | The recipe aggregation type. Valid values are:AvgCountMaximumMedianMinimumStdDevStdDevPSumUniqueVarVarP | Required | 49.0 |
| label | String | The label for the aggregate data. | Required | 49.0 |
| name | String | The name for the aggregate data. | Required | 49.0 |
| source | String | The source for the aggregate data. | Required | 49.0 |
