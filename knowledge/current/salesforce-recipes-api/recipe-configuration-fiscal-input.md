---
title: "Recipe Configuration Fiscal Input"
domain: salesforce-recipes-api
topic: recipe-configuration-fiscal-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:42.397Z
estimatedTokens: 157
keywords: [Recipe, Configuration, Fiscal, Input, data, prep]
---

# Recipe Configuration Fiscal Input

> The data prep recipe fiscal configuration data.

# Recipe Configuration Fiscal Input

The data prep recipe fiscal configuration data.

## Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| first​Day​Of​Week | Integer | The first day of week, calendar and fiscal. | Required | 55.0 |
| fiscal​Type | Recipe​Configuration​Type​Enum | The recipe configuration fiscal type. Valid values are:Offset (Recipe Configuration Fiscal Offset Input) | Required | 54.0 |
| is​Default | Boolean | Indicates whether this recipe configuration is the default configuration (true) or not (false). | Required | 54.0 |

## Related Topics

- Recipe Configuration Fiscal Offset Input (atlas.en-us.salesforce_recipes_api.meta/salesforce_recipes_api/sforce_recipes_api_requests_recipe_configuration_fiscal_offset_input.htm)
