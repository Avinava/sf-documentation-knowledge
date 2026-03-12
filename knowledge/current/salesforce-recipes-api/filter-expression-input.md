---
title: "Filter Expression Input"
domain: salesforce-recipes-api
topic: filter-expression-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:42.252Z
estimatedTokens: 131
keywords: [Filter, Expression, Input, regex]
---

# Filter Expression Input

> A regex expression for a filter.

# Filter Expression Input

A regex expression for a filter.

## Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| field | String | The field to filter on. | Required | 51.0 |
| operands | Object[] | The list of operands. | Required | 51.0 |
| operator | String | The operator to use for the filter. | Required | 51.0 |
| type | Recipe​Data​Type | The recipe data type. Valid values are:Date​OnlyDate​TimeMultivalueNumberText | Required | 51.0 |
