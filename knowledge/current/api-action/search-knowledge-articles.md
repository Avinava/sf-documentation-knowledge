---
title: "Search Knowledge Articles"
domain: api-action
topic: search-knowledge-articles
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:58.190Z
estimatedTokens: 335
keywords: [Search, Knowledge, Articles, Searches, terms, language, data, category, group, REST, HTTP, Inputs, Outputs]
---

# Search Knowledge Articles

> Searches for knowledge articles with specified search terms, language, data category
  group, and data category.

# Search Knowledge Articles

Searches for knowledge articles with specified search terms, language, data category group, and data category.

This object is available in API version 56.0 and later.

## Supported REST HTTP Methods

URI

/services/data/v56.0/actions/standard/searchKnowledgeArticles

Formats

JSON, XML

HTTP Methods

GET, HEAD, POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| searchText | TypestringDescriptionSearch terms to be used in the knowledge article search. |
| languageCode | TypestringDescriptionThe language code to be used in a knowledge article search. Valid values are language codes for fully supported languages. |
| dataCategoryGroupName | TypestringDescriptionThe API name of the data category group to be used in the knowledge article search. |
| dataCategoryName | TypestringDescriptionThe API name of the data category to be used in the knowledge article search. |
| resultsLimit | TypeintegerDescriptionOptional. The maximum number of knowledge articles to return. Valid values are from 1 through 2000. By default, the maximum is 2000. |

## Outputs

| Output | Details |
| --- | --- |
| knoweldgeArticlesList | TypeApexDescriptionAn Apex knowledge_bot__ArticlesList record that contains information about the knowledge articles that were returned. |
