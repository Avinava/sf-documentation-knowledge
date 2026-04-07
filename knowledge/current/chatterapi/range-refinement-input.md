---
title: "Range Refinement Input"
domain: chatterapi
topic: range-refinement-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:09.941Z
estimatedTokens: 191
keywords: [Range, Refinement, Attribute-based, minimum, maximum, numeric, product, search]
---

> Attribute-based refinement with minimum or maximum numeric values for product
    search.

# Range Refinement Input

Attribute-based refinement with minimum or maximum numeric values for product search.

Root XML tag

rangeRefinementInput

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| attributeType | String | Type of search attribute for the refinement. Values are:CustomStandardPricebookEntry | Required | 64.0 |
| max | String | Maximum value for range refinement. | Required if min isn't specified | 64.0 |
| min | String | Minimum value for range refinement. | Required if max isn't specified | 64.0 |
| nameOrId | String | Developer name of the attribute for the refinement. | Required | 64.0 |
| type | String | Type of the refinement. Values is:Range | Required | 64.0 |
