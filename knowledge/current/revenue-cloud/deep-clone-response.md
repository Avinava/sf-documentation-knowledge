---
title: "Deep Clone Response"
domain: revenue-cloud
topic: deep-clone-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:09.376Z
estimatedTokens: 185
keywords: [Deep, Clone, Output, representation, cloned, record]
---

# Deep Clone Response

> Output representation of the details of the cloned record.

# Deep Clone Response

Output representation of the details of the cloned record.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| created​RecordList | Deep Clone Record Response[] | List of cloned related records of the main record. | Small, 63.0 | 63.0 |
| createdRoot​RecordId | String | ID of the created root record. | Small, 63.0 | 63.0 |
| error​List | Deep Clone Error[] | Details of errors, if any. | Small, 63.0 | 63.0 |
| error​Message | String | Error message if the API request fails. | Small, 63.0 | 63.0 |
| is​Successful | Boolean | Indicates whether the API request is successful (true) or not (false). | Small, 63.0 | 63.0 |

## Code Examples

```
{
  "createdRecordList": [
    {
      "createdRecordId": "01tSG0000030Yb3YAE",
      "entityApiName": "Product2",
      "entityLabel": "Product"
    },
    {
      "createdRecordId": "0iOSG0000002rMn2AI",
      "entityApiName": "ProductSellingModelOption",
      "entityLabel": "Product Selling Model Option"
    },
    {
      "createdRecordId": "0v7SG0000001ktdYAA",
      "entityApiName": "ProductAttributeDefinition",
      "entityLabel": "Product Attribute Definition"
    }
  ],
  "createdRootRecordId": "01tSG0000030Yb3YAE",
  "errorList": [],
  "isSuccessful": true
}
```

## Related Topics

- Deep Clone Record Response (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_deep_clone_record_response.htm)
- Deep Clone Error (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_deep_clone_error.htm)
