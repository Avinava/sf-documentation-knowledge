---
title: "Get Catalog Details Action"
domain: revenue-cloud
topic: get-catalog-details-action
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-06-21T00:39:48.008Z
estimatedTokens: 312
keywords: [Inputs, Outputs, Catalog, Action, record]
---

> Get details of a catalog record.

# Get Catalog Details Action

Get details of a catalog record.

This action is available in API version 64.0 and later.

You can invoke this action via Apex and Flows only.

## Special Access Rules

The Get Catalog Details action is available in Enterprise, Unlimited, and Developer Editions where Product Discovery is enabled.

## Inputs

| Input | Details |
| --- | --- |
| catalogId | TypestringDescriptionRequired.ID of the catalog record. |
| correlationId | TypestringDescriptionUnique identifier attached to requests and messages, enabling reference to a specific transaction or event chain. |

## Outputs

| Output | Details |
| --- | --- |
| apiStatusOutputRepresentation | TypeApex-definedDescriptionAn Apex runtime_industries_cpq.ApiStatusRepresentation record that contains the status of the request, including the status code and message. |
| catalogDetailsResult | TypeApex-definedDescriptionDetails of the catalog record. |
| correlationId | TypestringDescriptionUnique identifier attached to requests and messages, allowing reference to a specific transaction or event chain. |

## Example

Here's a sample input to call this invocable action from Apex code.

```

```

Here's a sample response when you call this action.

```

```

## Code Examples

```apex
Invocable.Action action = Invocable.Action.createStandardAction('getCatalogDetails');

action.setInvocationParameter('correlationId', '9cbb9650-48c5-11ed-96d1-0afcf185843b');
action.setInvocationParameter('catalogId', '0ZSZ6000000CtXYOA0');

List<Invocable.Action.Result> results = action.invoke();
System.debug('Catalog Details Action + '+results);
```

```
[
  {
    "actionName": "getCatalogDetails",
    "errors": null,
    "invocationId": null,
    "isSuccess": true,
    "outcome": null,
    "outputValues": {
      "apiStatusOutputRepresentation": {
        "statusMessage": null,
        "statusCode": "FetchedDetailsSuccessfully",
        "messages": []
      },
      "correlationId": "9cbb9650-48c5-11ed-96d1-0afcf185843b",
      "catalogDetailsResult": {
        "status": null,
        "numberOfCategories": 2,
        "name": "Hardware Catalog",
        "id": "0ZSZ6000000CtXYOA0",
        "effectiveStartDate": null,
        "effectiveEndDate": null,
        "description": "Hardware Catalog Desc",
        "customFields": null,
        "catalogType": "Sales",
        "catalogCode": "HC"
      }
    },
    "sortOrder": -1,
    "version": 1
  }
]
```
