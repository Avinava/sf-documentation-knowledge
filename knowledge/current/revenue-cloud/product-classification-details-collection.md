---
title: "Product Classification Details Collection"
domain: revenue-cloud
topic: product-classification-details-collection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:08.179Z
estimatedTokens: 188
keywords: [Product, Classification, Details, Collection, Output, representation, contains, collection, product, classification, details, along, any, processing, errors.]
---

# Product Classification Details Collection

> Output representation that contains a collection of product classification details along
    with any processing errors.

# Product Classification Details Collection

Output representation that contains a collection of product classification details along with any processing errors.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| errors | Product Catalog Management Error[] | List of errors encountered during the processing of the API request. | Small, 66.0 | 66.0 |
| productClassifications | Product Classification Details[] | List of product classification detail records that match the requested product classification IDs. | Small, 66.0 | 66.0 |
| success | Boolean | Indicates whether the API request is successful (true) or has failed (false). | Small, 66.0 | 66.0 |

## Code Examples

```
{
  "success": false,
  "errors": [
    {
      "errorCode": "INSUFFICIENT_ACCESS",
      "message": "Insufficient access rights on cross-reference ID"
    }
  ],
  "productClassifications": [
    {
      "id": "dummyId",
      "name": "Dummy Product Classification",
      "code": "DUMMY_CODE",
      "attributeCategories": [
        {
          "attributes": [
            {
              "attributeNameOverride": "Dummy_Attribute__c",
              "code": "ATTR_CODE_1",
              "dataType": "String",
              "defaultValue": "default",
              "description": "A dummy attribute for demonstration.",
              "developerName": "Dummy_Attribute",
              "displayType": "Text",
              "helpText": "Help text for dummy attribute",
              "id": "attrId1",
              "isConfigurable": true,
              "isHidden": false,
              "isPriceImpacting": false,
              "isReadOnly": false,
              "isRequired": false,
              "isValueCloneable": true,
              "label": "Dummy Attribute Label",
              "maximumCharacterCount": 100,
              "maximumValue": "100",
              "minimumCharacterCount": 1,
              "minimumValue": "1",
              "name": "Dummy Attribute",
              "sequence": 1,
              "status": "Active",
              "stepValue": "1"
            }
          ],
          "code": "GENERAL",
          "id": "catId1",
          "name": "General"
        }
      ],
      "attributes": [
        {
          "attributeNameOverride": "Dummy_Attribute__c",
          "code": "ATTR_CODE_1",
          "dataType": "String",
          "defaultValue": "default",
          "description": "A dummy attribute for demonstration.",
          "developerName": "Dummy_Attribute",
          "displayType": "Text",
          "helpText": "Help text for dummy attribute",
          "id": "attrId1",
          "isConfigurable": true,
          "isHidden": false,
          "isPriceImpacting": false,
          "isReadOnly": false,
          "isRequired": false,
          "isValueCloneable": true,
          "label": "Dummy Attribute Label",
          "maximumCharacterCount": 100,
          "maximumValue": "100",
          "minimumCharacterCount": 1,
          "minimumValue": "1",
          "name": "Dummy Attribute",
          "sequence": 1,
          "status": "Active",
          "stepValue": "1"
        }
      ]
    }
  ]
}
```

## Related Topics

- Product Catalog Management Error (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_p_c_m_error_output.htm)
- Product Classification Details (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_product_classification_details_output.htm)
