---
title: "Mass Update Sales Agreement Action"
domain: mfg-api-devguide
topic: mass-update-sales-agreement-action
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:55.194Z
estimatedTokens: 414
keywords: [Mass, Sales, Agreement, Action, Now, updates, different, products, periods, REST, HTTP, Inputs, Usage]
---

# Mass Update Sales Agreement Action

> Now you can make mass updates to sales agreement fields for different
   products and periods with a single action.

# Mass Update Sales Agreement Action

Now you can make mass updates to sales agreement fields for different products and periods with a single action.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=mfg_api_devguide)

#### Note

These actions update the sales agreement based data in your Salesforce org. You must perform a database rollback to undo these actions.

This object is available in API version 48.0 and later for users with Manufacturing Cloud license.

## Supported REST HTTP Methods

URI

/services/data/vXX.X/actions/standard/massUpdateSalesAgreement

Formats

JSON, XML

HTTP Methods

GET, HEAD, POST

Authentication

Authorization: Bearer token

## Inputs

| Input | Details |
| --- | --- |
| entityId | TypestringDescriptionThe ID of the sales agreement to mass update. |
| fieldToUpdate | TypestringDescriptionThe developer name of a sales agreement product schedule field. For example, SalesPrice. |
| periods | TypeanyTypeDescriptionList of sales agreement product schedules in the yyyy-MM-dd date format. For example, 2020-01-01,2020-02-01. |
| products | TypeanyTypeDescriptionComma separated list of sales agreement product IDs. |
| operation | TypestringDescriptionOperation for mass update.Valid values are:Increase ByDecrease ByReplace With |
| numericvalue | TypedoubleDescriptionNumeric value to use in the operation for mass update. Can be any number up to 15 digits. |
| numericValueType | TypestringDescriptionType of operation for mass update.Valid values are:percentageabsolute |

## Usage

**Sample Request**

The following example shows how to mass update sales agreement fields:

```

```

## Code Examples

```
{
  "inputs": [
    {
      "entityId": "0YALT000000H9rh4AC",
      "products": [
        "0YBLT0000000Mq94AE"
      ],
      "periods": [
        "ALL"
      ],
      "fieldToUpdate": "SalesPrice",
      "operation": "Increase By",
      "numericValue": "15",
      "numericValueType": "absolute"
    }
  ]
}
```
