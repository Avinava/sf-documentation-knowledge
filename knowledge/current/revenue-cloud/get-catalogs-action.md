---
title: "Get Catalogs Action"
domain: revenue-cloud
topic: get-catalogs-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:03.795Z
estimatedTokens: 467
keywords: [Get, Catalogs, Action, list, catalog, records., Special, Access, Rules, Supported, REST, HTTP, Inputs, Outputs, Example]
---

# Get Catalogs Action

> Get a list of catalog records.

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

## Code Examples

```
{
  "inputs": [
    {
      "correlationId": "9cbb9650-48c5-11ed-96d1-0afcf185843b",
      "recordLimit": 2,
      "recordOffset": 0,
      "orderBy": [
        "Name:ASC"
      ]
    }
  ]
}
```

```apex
Invocable.Action action = Invocable.Action.createStandardAction('getCatalogs');

action.setInvocationParameter('correlationId', '9cbb9650-48c5-11ed-96d1-0afcf185843b');
action.setInvocationParameter('recordLimit', 1);
action.setInvocationParameter('recordOffset', 1);
String[] sortOrder = new String[]{'Name:ASC'};
action.setInvocationParameter('orderBy', sortOrder);

List<Invocable.Action.Result> results = action.invoke();
System.debug('Catalog List Action + '+results);
```

```
[
  {
    "actionName": "getCatalogs",
    "errors": null,
    "invocationId": null,
    "isSuccess": true,
    "outcome": null,
    "outputValues": {
      "resultListCount": 2,
      "apiStatusOutputRepresentation": {
        "statusMessage": null,
        "statusCode": "FetchedDetailsSuccessfully",
        "messages": []
      },
      "resultCatalogList": [
        {
          "status": null,
          "numberOfCategories": 2,
          "name": "Hardware Catalog",
          "id": "0ZSZ6000000CtXYOA0",
          "effectiveStartDate": null,
          "effectiveEndDate": null,
          "description": "Hardware Catalog Desc",
          "customFields": [],
          "catalogType": "Sales",
          "catalogCode": "HC"
        }
      ],
      "correlationId": "9cbb9650-48c5-11ed-96d1-0afcf185843b",
      "recordOffset": 0,
      "recordLimit": 1
    },
    "sortOrder": -1,
    "version": 1
  }
]
```
