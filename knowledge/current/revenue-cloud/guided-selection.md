---
title: "Guided Selection"
domain: revenue-cloud
topic: guided-selection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:09.440Z
estimatedTokens: 84
keywords: [Guided, Selection, Output, representation]
---

# Guided Selection

> Output representation of the details of a guided selection.

# Guided Selection

Output representation of the details of a guided selection.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| searchTerms | Guided Selection Search Term[] | Search terms for the guided selection. | Small, 62.0 | 62.0 |

## Code Examples

```
{
  "apiStatus": {
    "messages": [],
    "statusCode": "FETCHED_DETAILS_SUCCESSFULLY"
  },
  "correlationId": "corrId",
  "cursor": "MTAwMDAwMDAwNg==",
  "searchTerms": [
    {
      "term": "IPhone"
    },
    {
      "term": "4GB"
    },
    {
      "term": "64GB"
    }
  ],
  "result": [
    {
      "additionalFields": {
        "CustomField1__c": "TextValue",
        "CustomField2__c": "10",
        "StandardField1": "false"
      },
      "description": "IPhone-13",
      "id": "01txx0000006kYwAAI",
      "name": "Sample product 1",
      "prices": [
        {
          "price": 150,
          "priceBookEntryId": "12Axx0000004DF7EAM",
          "priceBookId": "01sxx0000005puLAAQ",
          "pricingModel": {
            "frequency": "Monthly",
            "id": "12Bxx000000CiCDEA0",
            "name": "IPhone-13",
            "occurrence": 6,
            "pricingModelType": "Recurring"
          }
        },
        {
          "price": 400,
          "priceBookEntryId": "12Axx0000004DGjEAM",
          "priceBookId": "01sxx0000005puLAAQ",
          "pricingModel": {
            "id": "12Bxx000000CiCCEA0",
            "name": "IPhone-13",
            "pricingModelType": "OneTime"
          }
        }
      ],
      "qualificationContext": {
        "isQualified": true
      }
    }
  ]
}
```

## Related Topics

- Guided Selection Search Term (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_guided_selection_search_term_output.htm)
