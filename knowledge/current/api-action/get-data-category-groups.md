---
title: "Get Data Category Groups"
domain: api-action
topic: get-data-category-groups
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.083Z
estimatedTokens: 170
keywords: [Data, Category, Groups, labels, API, active, associated, Knowledge, visible, current, user, REST, HTTP, Inputs, Outputs]
---

# Get Data Category Groups

> Gets the labels and API names of the active data category groups associated with the
  Knowledge object that are visible to the current user.

# Get Data Category Groups

Gets the labels and API names of the active data category groups associated with the Knowledge object that are visible to the current user.

This object is available in API version 56.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v56.0/actions/standard/getDataCategoryGroups

Formats

JSON, XML

HTTP Methods

GET, HEAD, POST

Authentication

Authorization: Bearer token

## Inputs

None

## Outputs

| Output | Details |
| --- | --- |
| dataCategoryGroupInfo | TypeApexDescriptionAn Apex knowledge_bot__DataCategoryGroupInfo record that contains the labels and API names of the data category groups visible to the current user. |
