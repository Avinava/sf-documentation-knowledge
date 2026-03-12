---
title: "Search Contract Document Action"
domain: clm-developer-guide
topic: search-contract-document-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:21.991Z
estimatedTokens: 300
keywords: [Search, Contract, Document, Action, latest, version, user's, query, Special, Access, Rules, REST, HTTP, Inputs, Outputs]
---

# Search Contract Document Action

> Search the latest contract document version based on the user's
            query.

# Search Contract Document Action

Search the latest contract document version based on the user's query.

This action is available in API version 64.0 and later.

## Special Access Rules

To use this action, Contracts AI User permission set is required.

## Supported REST HTTP Methods

URI

/services/data/v66.0/actions/standard/searchContractDocument

Formats

JSON, XML

HTTP Methods

POST

Authentication

Authorization: Bearertoken

## Inputs

| Input | Details |
| --- | --- |
| contractId | TypestringDescriptionRequired.ID of the contract record to use for the search. |
| searchQuery | TypestringDescriptionRequired.Text-based query to use to search contract documents. |
| resultLimit | TypestringDescriptionRequired.Maximum number of text segments that can be returned from the contract search. Each segment represents a relevant portion of a contract document. |

## Outputs

| Output | Details |
| --- | --- |
| searchResult | TypestringDescriptionConcatenated content of the top segments that match a user query. |

## Example

POST

This sample request is for the Search Contract Document action.

```

```

This sample response is for the Search Contract Document action.

```

```

## Code Examples

```
{
  "inputs": [
    {
      "contractId": "800VW000006142vYAA",
      "searchQuery": "Show me the contract for paper packaging deliveries.",
      "resultLimit": "1000"
    }
  ]
}
```

```
{
  "actionName": "searchContractDocument",
  "errors": null,
  "invocationId": null,
  "isSuccess": true,
  "outcome": null,
  "outputValues": {
    "searchResult": "AGREEMENT FOR DELIVERY OF PAPER PACKAGING MATERIALS

This Agreement...."
  },
  "sortOrder": -1,
  "version": 1
}
```
