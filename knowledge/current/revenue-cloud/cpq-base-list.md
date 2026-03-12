---
title: "CPQ Base List"
domain: revenue-cloud
topic: cpq-base-list
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:07.623Z
estimatedTokens: 418
keywords: [CPQ, Base, List, Output, representation, list, catalogs, categories, products, based, request.]
---

# CPQ Base List

> Output representation of the list of catalogs, categories, or products based on the
    request.

# CPQ Base List

Output representation of the list of catalogs, categories, or products based on the request.

JSON example

This example shows a sample catalog list.

```

```

This example shows a sample category list.

```

```

This example shows a sample product list.

```

```

This example shows a sample of the list of products retrieved based on the Laptop search term.

```

```

This example shows a sample of the results of a qualification procedure that’s executed on a list of product IDs.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| api​Status | API Status | Status of the API request. | Small, 60.0 | 60.0 |
| context​Id | String | ID of the context. | Small, 60.0 | 60.0 |
| correlation​Id | String | Unique ID of the request. | Small, 60.0 | 60.0 |
| cursor | String | Unique ID to represent the position of each product in the dataset. | Small, 60.0 | 60.0 |
| facets | Search Products Facet | Details of the faceted search. | Small, 63.0 | 63.0 |
| limit | Integer | Number of items fetched in the response. | Small, 60.0 | 60.0 |
| offSet | Integer | Offset size from which the item count is fetched. | Small, 60.0 | 60.0 |
| query | Map<String, Object>> | Query that was used for the search request. | Small, 60.0 | 60.0 |
| result | Any response body | Result that contains the list of catalogs, categories, or products as per the requested resource. | Small, 60.0 | 60.0 |
| total | Integer | Number of fetched records. | Small, 60.0 | 60.0 |
| user​Context | User Context | User context details. For example, account ID or contact ID. | Small, 60.0 | 60.0 |

## Code Examples

```
{
  "apiStatus": {
    "messages": [
      
    ],
    "statusCode": "FetchedDetailsSuccessfully"
  },
  "correlationId": "9f417514-9587-4063-9e48-18a2cf2477c0",
  "limit": 10,
  "offSet": 0,
  "query": {
    
  },
  "result": [
    {
      "catalogCode": "Mobiles",
      "catalogType": "Sales",
      "description": "Catalog for mobile phones",
      "effectiveEndDate": "2028-04-01T19:00Z",
      "effectiveStartDate": "2024-04-01T19:00Z",
      "id": "0ZSxx0000000001GAA",
      "name": "Mobiles",
      "numberOfCategories": 3
    }
  ],
  "total": 1
}
```

```
{
  "apiStatus": {
    "messages": [
      
    ],
    "statusCode": "FetchedDetailsSuccessfully"
  },
  "correlationId": "3f2a8f45-e7d2-42ec-bc4c-b981d750e912",
  "query": {
    
  },
  "result": [
    {
      "catalogId": "0ZSxx0000000001GAA",
      "childCategories": [
        
      ],
      "description": "Category for Apple phones and iPads",
      "id": "0ZGxx0000000001GAA",
      "name": "Apple",
      "sortOrder": 1,
      "isNavigational": true
    },
    {
      "catalogId": "0ZSxx0000000001GAA",
      "childCategories": [
        
      ],
      "description": "Category for Samsung phones",
      "id": "0ZGxx000000004rGAA",
      "name": "Samsung",
      "sortOrder": 2,
      "isNavigational": true
    },
    {
      "catalogId": "0ZSxx0000000001GAA",
      "childCategories": [
        
      ],
      "description": "Category for Android phones",
      "id": "0ZGxx000000006TGAQ",
      "name": "Android",
      "isNavigational": true
    }
  ],
  "total": 3
}
```

```
{
  "apiStatus": {
    "messages": [],
    "statusCode": "FetchedDetailsSuccessfully"
  },
  "contextId": "f36f8e73f1fc338cc4e93c61613cba07a6a0129941d97e5dd6e52a2885776ce4",
  "correlationId": "eeaa1db2-f371-4227-a886-c77e2f66ce1d",
  "cursor": "MTAwMDAwMDAwNg==",
  "query": {},
  "result": [
    {
      "additionalFields": {
        "DecompositionScope": "OrderLineItem",
        "ProductCode": "LPB001",
        "CanRamp": false
      },
      "attributeCategories": [],
      "catalogs": [
        {
          "customFields": {},
          "id": "0ZSDU0000002Og74AE",
          "name": "Service Catalog",
          "numberOfCategories": 5
        }
      ],
      "categories": [
        {
          "catalogId": "0ZSDU0000002Og74AE",
          "childCategories": [],
          "customFields": {},
          "hasSubCategories": false,
          "id": "0ZGDU0000002P0H4AU",
          "name": "Cloud Services",
          "qualificationContext": {
            "isQualified": true
          }
        }
      ],
      "childProducts": [],
      "configureDuringSale": "Allowed",
      "description": "The laptop pro bundle includes a Laptop, mouse, warranty for 2 years, premium support and printer bundle",
      "displayUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCrGjPR1fvJqg4yP3RMyqjI0H9eL6tk1fvzw&amp;usqp=CAU",
      "id": "01tDU000000ExkZYAS",
      "isActive": true,
      "isAssetizable": true,
      "isSoldOnlyWithOtherProds": false,
      "name": "Laptop Pro Bundle",
      "nodeType": "bundleProduct",
      "prices": [],
      "productClassification": {},
      "productCode": "LPB001",
      "productComponentGroups": [],
      "productSellingModelOptions": [
        {
          "id": "0iODU0000002TBN2A2",
          "productId": "01tDU000000ExkZYAS",
          "productSellingModel": {
            "id": "0jPDU0000002OTv2AM",
            "name": "One Time",
            "sellingModelType": "OneTime",
            "status": "Active"
          },
          "productSellingModelId": "0jPDU0000002OTv2AM"
        }
      ],
      "productSpecificationType": {
        "name": "Commercial",
        "productSpecificationRecordType": {}
      },
      "productType": "Bundle",
      "qualificationContext": {
        "isQualified": true
      }
    }
  ]
}
```

```
{
  "apiStatus": {
    "messages": [],
    "statusCode": "FetchedDetailsSuccessfully"
  },
  "correlationId": "d9d8f898-19f5-464a-ba2b-6a070783f6c4",
  "cursor": "MTAwMDAwMDAwMw==",
  "facets": [
    {
      "attributeType": "ProductStandard",
      "displayName": "Product Type",
      "displayRank": 2,
      "nameOrId": "Type",
      "values": [
        {
          "displayName": "Bundle",
          "nameOrId": "Bundle"
        }
      ]
    },
    {
      "attributeType": "ProductDynamicAttribute",
      "displayName": "Display",
      "displayRank": 3,
      "nameOrId": "0tjDU0000003K5BYAU",
      "values": [
        {
          "displayName": "1080p Built-in Display",
          "nameOrId": "1080p Built-in Display"
        },
        {
          "displayName": "2k Built-in Display",
          "nameOrId": "2k Built-in Display"
        },
        {
          "displayName": "4k Built-in Display",
          "nameOrId": "4k Built-in Display"
        }
      ]
    }
  ],
  "limit": 10,
  "query": {},
  "result": [
    {
      "additionalFields": {},
      "attributeCategories": [],
      "catalogs": [],
      "categories": [
        {
          "catalogId": "0ZSDU0000002Og64AE",
          "childCategories": [],
          "customFields": {},
          "hasSubCategories": false,
          "id": "0ZGDU0000002P0A4AU",
          "name": "Laptops",
          "qualificationContext": {
            "isQualified": true
          }
        }
      ],
      "configureDuringSale": "Allowed",
      "description": "Battery- or AC-powered personal computer (PC) smaller than a briefcase",
      "displayUrl": "https://media.istockphoto.com/id/1023428598/photo/3d-illustration-laptop-isolated-on-white-background-laptop-with-empty-space-screen-laptop-at.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=ssK6er5v1fGpSghGiqySwoD8tn5blC7xgefQJI2xU38=",
      "id": "01tDU000000ExkWYAS",
      "isActive": true,
      "isAssetizable": true,
      "isSoldOnlyWithOtherProds": false,
      "name": "Laptop",
      "nodeType": "simpleProduct",
      "prices": [],
      "productClassification": {
        "id": "11BDU0000002TCD2A2"
      },
      "productCode": "LP001",
      "productComponentGroups": [],
      "productSellingModelOptions": [
        {
          "id": "0iODU0000002TBF2A2",
          "productId": "01tDU000000ExkWYAS",
          "productSellingModel": {
            "id": "0jPDU0000002OTv2AM",
            "name": "One Time",
            "sellingModelType": "OneTime",
            "status": "Active"
          },
          "productSellingModelId": "0jPDU0000002OTv2AM"
        }
      ],
      "productSpecificationType": {
        "name": "Commercial",
        "productSpecificationRecordType": {}
      },
      "qualificationContext": {
        "isQualified": true
      }
    },
    {
      "additionalFields": {},
      "attributeCategories": [],
      "catalogs": [],
      "categories": [
        {
          "catalogId": "0ZSDU0000002Og64AE",
          "childCategories": [],
          "customFields": {},
          "hasSubCategories": false,
          "id": "0ZGDU0000002P0A4AU",
          "name": "Laptops",
          "qualificationContext": {
            "isQualified": true
          }
        }
      ],
      "configureDuringSale": "Allowed",
      "description": "The laptop basic bundle includes a Laptop, mouse, and warranty for 1 year.",
      "displayUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbf49JG4zZogCmZMJuXU38qOkR9X36MN4bSw&amp;usqp=CAU",
      "id": "01tDU000000ExkXYAS",
      "isActive": true,
      "isAssetizable": true,
      "isSoldOnlyWithOtherProds": false,
      "name": "Laptop Basic Bundle",
      "nodeType": "bundleProduct",
      "prices": [],
      "productClassification": {},
      "productCode": "LB001",
      "productComponentGroups": [],
      "productSellingModelOptions": [
        {
          "id": "0iODU0000002TBD2A2",
          "productId": "01tDU000000ExkXYAS",
          "productSellingModel": {
            "id": "0jPDU0000002OTv2AM",
            "name": "One Time",
            "sellingModelType": "OneTime",
            "status": "Active"
          },
          "productSellingModelId": "0jPDU0000002OTv2AM"
        }
      ],
      "productSpecificationType": {
        "name": "Commercial",
        "productSpecificationRecordType": {}
      },
      "productType": "Bundle",
      "qualificationContext": {
        "isQualified": true
      }
    },
    {
      "additionalFields": {},
      "attributeCategories": [],
      "catalogs": [],
      "categories": [
        {
          "catalogId": "0ZSDU0000002Og64AE",
          "childCategories": [],
          "customFields": {},
          "hasSubCategories": false,
          "id": "0ZGDU0000002P0A4AU",
          "name": "Laptops",
          "qualificationContext": {
            "isQualified": true
          }
        }
      ],
      "configureDuringSale": "Allowed",
      "description": "The laptop pro bundle includes a Laptop, mouse, warranty for 2 years, premium support and printer bundle",
      "displayUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCrGjPR1fvJqg4yP3RMyqjI0H9eL6tk1fvzw&amp;usqp=CAU",
      "id": "01tDU000000ExkZYAS",
      "isActive": true,
      "isAssetizable": true,
      "isSoldOnlyWithOtherProds": false,
      "name": "Laptop Pro Bundle",
      "nodeType": "bundleProduct",
      "prices": [],
      "productClassification": {},
      "productCode": "LPB001",
      "productComponentGroups": [],
      "productSellingModelOptions": [
        {
          "id": "0iODU0000002TBN2A2",
          "productId": "01tDU000000ExkZYAS",
          "productSellingModel": {
            "id": "0jPDU0000002OTv2AM",
            "name": "One Time",
            "sellingModelType": "OneTime",
            "status": "Active"
          },
          "productSellingModelId": "0jPDU0000002OTv2AM"
        }
      ],
      "productSpecificationType": {
        "name": "Commercial",
        "productSpecificationRecordType": {}
      },
      "productType": "Bundle",
      "qualificationContext": {
        "isQualified": true
      }
    },
    {
      "additionalFields": {},
      "attributeCategories": [],
      "catalogs": [],
      "categories": [
        {
          "catalogId": "0ZSDU0000002Og64AE",
          "childCategories": [],
          "customFields": {},
          "hasSubCategories": false,
          "id": "0ZGDU0000002P0A4AU",
          "name": "Laptops",
          "qualificationContext": {
            "isQualified": true
          }
        }
      ],
      "configureDuringSale": "Allowed",
      "description": "Laptop, Laptop Bag, Laptop stand, Mouse, Keyboard, USB-C Hub,External Hard Drive, Noise Cancelling Headphones, office 365",
      "displayUrl": "https://m.media-amazon.com/images/I/613Fno-NLYL._AC_SL1000_.jpg",
      "id": "01tDU000000ExlAYAS",
      "isActive": true,
      "isAssetizable": true,
      "isSoldOnlyWithOtherProds": false,
      "name": "Laptop Productivity Bundle",
      "nodeType": "bundleProduct",
      "prices": [],
      "productClassification": {},
      "productCode": "LPB001",
      "productComponentGroups": [],
      "productSellingModelOptions": [
        {
          "id": "0iODU0000002TBq2AM",
          "productId": "01tDU000000ExlAYAS",
          "productSellingModel": {
            "id": "0jPDU0000002OTv2AM",
            "name": "One Time",
            "sellingModelType": "OneTime",
            "status": "Active"
          },
          "productSellingModelId": "0jPDU0000002OTv2AM"
        }
      ],
      "productSpecificationType": {
        "name": "Commercial",
        "productSpecificationRecordType": {}
      },
      "productType": "Bundle",
      "qualificationContext": {
        "isQualified": true
      }
    }
  ],
  "total": 4
}
```

```
{
  "apiStatus": {
    "messages": [
      
    ],
    "statusCode": "FetchedDetailsSuccessfully"
  },
  "contextId": "e055bb18-d4e8-41c3-881e-0132b9561708",
  "correlationId": "c280c1b0-fd3f-4eac-9b08-075bdf1cbefc",
  "query": {
    
  },
  "result": [
    {
      "productId": "01txx0000006i7PAAQ",
      "qualificationContext": {
        "isQualified": true
      }
    },
    {
      "productId": "01txx0000006i7QAAQ",
      "qualificationContext": {
        "isQualified": true
      }
    },
    {
      "productId": "01txx0000006i7IAAQ",
      "qualificationContext": {
        "isQualified": true
      }
    }
  ]
}
```

## Related Topics

- API
                  Status (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_api_status_output.htm)
- Search Products Facet (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_search_products_facet.htm)
- User
                  Context (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_user_context_output.htm)
