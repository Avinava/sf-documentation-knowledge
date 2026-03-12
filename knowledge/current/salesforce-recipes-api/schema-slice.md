---
title: "Schema Slice"
domain: salesforce-recipes-api
topic: schema-slice
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:42.996Z
estimatedTokens: 128
keywords: [Schema, Slice, definition, node, recipe]
---

# Schema Slice

> The slice definition for a schema node in a recipe.

# Schema Slice

The slice definition for a schema node in a recipe.

## Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| fields | String[] | The list of fields for SELECT or DROP. | Small, v51.0 | 51.0 |
| ignore​Missing​Fields | Boolean | Indicates whether the node action ignores missing fields (true) or not (false). | Small, v51.0 | 51.0 |
| mode | String | The slice mode. Valid values are:SELECTDROP | Small, v51.0 | 51.0 |
