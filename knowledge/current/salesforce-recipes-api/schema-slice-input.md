---
title: "Schema Slice Input"
domain: salesforce-recipes-api
topic: schema-slice-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:42.473Z
estimatedTokens: 129
keywords: [Schema, Slice, Input, definition, node, recipe]
---

# Schema Slice Input

> The slice definition for a schema node in a recipe.

# Schema Slice Input

The slice definition for a schema node in a recipe.

## Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fields | String[] | The list of fields for SELECT or DROP. | Required | 51.0 |
| ignore​Missing​Fields | Boolean | Indicates whether the node action ignores missing fields (true) or not (false). | Required | 51.0 |
| mode | Recipe​Slice​Mode | The slice mode. Valid values are:SELECTDROP | Required | 51.0 |
