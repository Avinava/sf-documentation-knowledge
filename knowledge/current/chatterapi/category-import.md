---
title: "Category Import"
domain: chatterapi
topic: category-import
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.630Z
estimatedTokens: 459
keywords: [Category, Import, job]
---

# Category Import

> Information about a category import job.

# Category Import

Information about a category import job.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| categoriesCreated | Integer | Number of product categories created by the import. | Small, 59.0 | 59.0 |
| categoriesUpdated | Integer | Number of product categories updated by the import. | Small, 59.0 | 59.0 |
| categoriesSlugsCreated | Integer | Number of category URL slugs created by the import. | Medium, 59.0 | 59.0 |
| categoriesSlugsUpdated | Integer | Number of category URL slugs updated by the import. | Medium, 59.0 | 59.0 |
| contentVersionId | String | ID of the .csv file that was imported. | Small, 59.0 | 59.0 |
| endTime | Long | Unix epoch timestamp when the import finished. | Small, 59.0 | 59.0 |
| errorMessages | Map<String, String> | Map of .csv file record number to error message. | Small, 59.0 | 59.0 |
| jobId | String | ID of the import job. | Medium, 59.0 | 59.0 |
| numberError | Integer | Number of .csv records that failed to process. | Small, 59.0 | 59.0 |
| numberSuccess | Integer | Number of .csv records that processed successfully. | Small, 59.0 | 59.0 |
| numberToProcess | Integer | Number of .csv records in the data source. | Small, 59.0 | 59.0 |
| processTime | Long | Unix epoch timestamp of how long the import process took. | Small, 59.0 | 59.0 |
| productCatalogId | String | ID of the product catalog imported to. | Small, 59.0 | 59.0 |
| startTime | Long | Unix epoch timestamp when the import started. | Small, 59.0 | 59.0 |
| startedBy | String | ID of the user who started the import. | Small, 59.0 | 59.0 |
| status | String | Status of the import. | Small, 59.0 | 59.0 |
| warningMessages | Map<String, String>> | Map of record number to associated list of warning messages. | Small, 59.0 | 59.0 |
