---
title: "Get Data Category Details"
domain: api-action
topic: get-data-category-details
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.081Z
estimatedTokens: 215
keywords: [Data, Category, labels, API, associated, Knowledge, child, categories, REST, HTTP, Inputs, Outputs]
---

# Get Data Category Details

> Gets the labels and API names for a specified data category associated with the Knowledge
  object and its child categories.

# Get Data Category Details

Gets the labels and API names for a specified data category associated with the Knowledge object and its child categories.

This object is available in API version 56.0 and later.

## Supported REST HTTP Methods

URI

/services/data/56.0/actions/standard/getDataCategoryDetails

Formats

JSON, XML

HTTP Methods

GET, HEAD, POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| dataCategoryGroupName | TypestringDescriptionThe API name of the data category group. |
| dataCategoryName | TypestringDescriptionThe API name of the data category. |

## Outputs

| Output | Details |
| --- | --- |
| dataCategoryDetailsOutput | TypeApexDescriptionAn Apex knowledge_bot__DataCategoryDetailsOutput record that contains the labels and API names for the data category and its child categories. |
