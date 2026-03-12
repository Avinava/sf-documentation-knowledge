---
title: "Recipe Conversion Detail Input"
domain: salesforce-recipes-api
topic: recipe-conversion-detail-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:42.407Z
estimatedTokens: 156
keywords: [Recipe, Conversion, Detail, Input, upconversion, data, prep]
---

# Recipe Conversion Detail Input

> The details for the upconversion of a data prep recipe.

# Recipe Conversion Detail Input

The details for the upconversion of a data prep recipe.

## Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| conversion​Detail​Id | Integer | The conversion detail ID. | Required | 52.0 |
| message | String | The conversion detail message. | Required | 52.0 |
| node​Name | String | The name of the node referenced in the conversion detail. | Required | 52.0 |
| severity | Connect​Recipe​Conversion​Severity​Enum | The severity of the conversion detail. Valid values are:UserInfoWarning | Small, 52.0 | 52.0 |
