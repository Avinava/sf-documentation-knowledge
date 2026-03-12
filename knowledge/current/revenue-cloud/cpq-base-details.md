---
title: "CPQ Base Details"
domain: revenue-cloud
topic: cpq-base-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:07.616Z
estimatedTokens: 229
keywords: [CPQ, Base, Details, Output, representation, catalog, category, product, details, based, request.]
---

# CPQ Base Details

> Output representation of the catalog, category, or product details based on the
    request.

# CPQ Base Details

Output representation of the catalog, category, or product details based on the request.

JSON example

This example shows the sample catalog details.

```

```

This example shows the sample category details.

```

```

This example shows the sample product details.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| api​Status | API Status | Status of the API request. | Small, 60.0 | 60.0 |
| context​Id | String | ID of the context. | Small, 60.0 | 60.0 |
| correlation​Id | String | Unique identifier of the request. | Small, 60.0 | 60.0 |
| result | Any response body | Result that contains the details of catalogs, categories, or products as per the requested resource. | Small, 60.0 | 60.0 |
| user​Context | User Context | User context details. For example, account ID or contact ID. | Small, 60.0 | 60.0 |

## Code Examples

```
{
  "apiStatus": {
    "messages": [
      
    ],
    "statusCode": "FetchedDetailsSuccessfully"
  },
  "correlationId": "32595ed6-1922-41f7-9c2c-373c677a7d62",
  "result": {
    "catalogCode": "Mobiles",
    "catalogType": "Sales",
    "description": "Catalog for mobile phones",
    "effectiveEndDate": "2028-04-01T19:00Z",
    "effectiveStartDate": "2024-04-01T19:00Z",
    "id": "0ZSxx0000000001GAA",
    "name": "Mobiles",
    "numberOfCategories": 3
  }
}
```

```
{
  "apiStatus": {
    "messages": [
      
    ],
    "statusCode": "FetchedDetailsSuccessfully"
  },
  "correlationId": "f9fb90de-36aa-44a1-9961-a9ef5fc0cad8",
  "result": {
    "catalogId": "0ZSxx0000000001GAA",
    "childCategories": [
      
    ],
    "description": "Category for Samsung phones",
    "id": "0ZGxx000000004rGAA",
    "name": "Samsung",
    "isNavigational": true,
    "sortOrder": 2
  }
}
```

```
{
  "apiStatus": {
    "messages": [
      
    ],
    "statusCode": "FetchedDetailsSuccessfully"
  },
  "correlationId": "822a8941-7412-4883-bb80-e488f908471e",
  "result": {
    "additionalFields": {
        "CustomField1__c": "TextValue",
        "CustomField2__c": "10",
        "StandardField1": "false"
    },
    "attributeCategories": [
      
    ],
    "attributes": [
      
    ],
    "catalogs": [
      
    ],
    "childProducts": [
      
    ],
    "id": "01txx0000006i2WAAQ",
    "isActive": true,
    "isAssetizable": true,
    "isSoldOnlyWithOtherProds": false,
    "name": "iPhone15",
    "nodeType": "simpleProduct",
    "prices": [
      
    ],
    "productClassification": {
      
    },
    "productCode": "iPhone15",
    "productComponentGroups": [
      
    ],
    "productSellingModelOptions": [
      {
        "id": "0iOxx0000000003EAA",
        "productId": "01txx0000006i2WAAQ",
        "productSellingModel": {
          "id": "0jPxx0000000001EAA",
          "name": "OneTime",
          "sellingModelType": "OneTime",
          "status": "Active"
        },
        "productSellingModelId": "0jPxx0000000001EAA"
      },
      {
        "id": "0iOxx0000000004EAA",
        "productId": "01txx0000006i2WAAQ",
        "productSellingModel": {
          "id": "0jPxx0000000002EAA",
          "name": "Monthly",
          "pricingTerm": 1,
          "pricingTermUnit": "Months",
          "sellingModelType": "TermDefined",
          "status": "Active"
        },
        "productSellingModelId": "0jPxx0000000002EAA"
      }
    ],
    "productSpecificationType": {
      "name": "ProdSpecRecType1",
      "productSpecificationRecordType": {
        
      }
    }
  }
}
```

## Related Topics

- API
                Status (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_api_status_output.htm)
- User
                  Context (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_user_context_output.htm)
