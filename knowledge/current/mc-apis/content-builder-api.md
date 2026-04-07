---
title: "Content Builder API"
domain: mc-apis
topic: content-builder-api
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T18:40:15.838Z
estimatedTokens: 604
keywords: [Content, Builder, API, Marketers, Marketing, Cloud, cross-channel, repository, emails, images, text, documents, Specification]
---

> Marketers use Content Builder in Marketing Cloud as a single cross-channel repository for marketing content, such as emails, images, text, and other documents.

# Content Builder API

## Overview

Marketers use Content Builder in Marketing Cloud as a single cross-channel repository for marketing content, such as emails, images, text, and other documents.

Marketing developers, service providers, and third-party developers can create and manipulate marketing content using the Content Builder REST API.

The API uses the term **asset** to refer to all types of marketing content. Assets are hierarchical; an asset can be a message that contains a template, which is itself an asset. The template can contain slots, which are also assets. Assets are stored in both ElasticSearch and in SQL Server; ElasticSearch provides a fast document retrieval engine, while SQL Server provides the reliability Salesforce is famous for. Use the asset model described in this documentation to create, update, delete, query for, and publish assets.

## API Specification

These tables include the most commonly used REST resources that make up the Content Builder API.

| HTTP Method | Resource | Description |
| --- | --- | --- |
| POST | /asset/v1/content/assets/query | Gets an asset collection by advanced query. |
| GET | /asset/v1/content/assets/{id} | Gets an asset by ID. |
| POST | /asset/v1/content/assets | Inserts an asset. |
| PUT | /asset/v1/content/assets/{id} | Updates a full asset. |
| PATCH | /asset/v1/content/assets/{id} | Updates part of an asset. |
| DELETE | /asset/v1/content/assets/{id} | Deletes an asset. |
| GET | /asset/v1/content/assets/{id}/file | Gets the binary file for an asset. |
| GET | /asset/v1/content/assets/salutations | Gets the default header and footer for an account. |
| GET | /asset/v1/content/assets/{id}/salutations | Gets the header and footer for a message. |
| GET | /asset/v1/content/assets/{id}/channelviews/{viewname} | Returns the requested channel view's compiled HTML for the asset. |
| POST | /asset/v1/content/categories | Inserts a category. |
| GET | /asset/v1/content/categories | Gets a collection of categories. |
| GET | /asset/v1/content/categories/{id} | Gets a category by ID. |
| PUT | /asset/v1/content/categories/{id} | Updates a category by ID. |
| DELETE | /asset/v1/content/categories/{id} | Deletes a category by ID. |
| GET | /asset/v1/content/deletedAssets | Returns a collection of all assets deleted in the last 30 days. |
| PATCH | /asset/v1/content/deletedAssets/AssetID | Updates part of a deleted asset. |

## Related Topics

- /asset/v1/content/assets/query (atlas.en-us.noversion.mc-apis.meta/mc-apis/routes.htm)
- /asset/v1/content/assets/{id} (atlas.en-us.noversion.mc-apis.meta/mc-apis/routes.htm)
- /asset/v1/content/assets (atlas.en-us.noversion.mc-apis.meta/mc-apis/routes.htm)
- /asset/v1/content/assets/{id}/file (atlas.en-us.noversion.mc-apis.meta/mc-apis/routes.htm)
- /asset/v1/content/assets/salutations (atlas.en-us.noversion.mc-apis.meta/mc-apis/routes.htm)
- /asset/v1/content/assets/{id}/salutations (atlas.en-us.noversion.mc-apis.meta/mc-apis/routes.htm)
- /asset/v1/content/assets/{id}/channelviews/{viewname} (atlas.en-us.noversion.mc-apis.meta/mc-apis/routes.htm)
- /asset/v1/content/categories (atlas.en-us.noversion.mc-apis.meta/mc-apis/createCategory.htm)
- /asset/v1/content/categories (atlas.en-us.noversion.mc-apis.meta/mc-apis/getCategories.htm)
- /asset/v1/content/categories/{id} (atlas.en-us.noversion.mc-apis.meta/mc-apis/getCategory.htm)
