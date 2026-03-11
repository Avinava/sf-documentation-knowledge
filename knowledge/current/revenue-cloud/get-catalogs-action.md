---
title: "Get Catalogs Action"
domain: revenue-cloud
topic: get-catalogs-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T14:37:49.948Z
keywords: [Get, Catalogs, Action, Special, Access, Rules, Supported, REST, HTTP, Methods, Inputs, Outputs, Example]
---

# Get Catalogs Action

# Get Catalogs Action

Get a list of catalog records.

This action is available in API version 64.0 and later.

## Special Access Rules

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/getCatalogs

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

| Input | Details |
| --- | --- |
| recordLimit | TypeintegerDescriptionNumber of catalog records to get. The minimum is 1, the maximum is 100, and the default is 100. |
| recordOffset | TypeintegerDescriptionNumber of catalog records to skip in the request. The default is 0. |
| correlationId | TypestringDescriptionUnique identifier for tracking requests and messages, allowing reference to a specific transaction or event chain. |
| orderBy | TypestringDescriptionSort records in ascending or descending order. |

## Outputs

| Output | Details |
| --- | --- |
| resultCatalogList | TypeApex-definedDescriptionList of filtered catalog records. See CatalogOutputRepresentation. |
| apiStatusOutputRepresentation | TypeApex-definedDescriptionAn Apex runtime_industries_cpq.ApiStatusRepresentation record that contains the status of the request, including the status code and message. |
| recordLimit | TypeintegerDescriptionNumber of catalog records to show per page. |
| resultListCount | TypeintegerDescriptionNumber of catalog records in the result. |
| correlationId | TypestringDescriptionUnique identifier for tracking requests and messages, allowing reference to a specific transaction or event chain. |
| recordOffset | TypeintegerDescriptionNumber of catalog records to skip in the request. The default is 0. |

## Example

POST

Here's a sample input to call this invocable action.

```

```

Here's a sample input to call this invocable action from Apex code.

```

```

Here's a sample response when you call this action.

```

```