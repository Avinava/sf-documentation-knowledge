---
title: "Product Classification Details"
domain: revenue-cloud
topic: product-classification-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:09.730Z
estimatedTokens: 214
keywords: [Product, Classification, Output, representation, including, attributes, categories]
---

# Product Classification Details

> Output representation that contains the details of a single product classification,
    including its attributes and categories.

# Product Classification Details

Output representation that contains the details of a single product classification, including its attributes and categories.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| attributeCategories | Product Classification Attribute Category[] | List of attribute categories applicable to the product classification. | Small, 66.0 | 66.0 |
| attributes | Product Classification Attribute Definition[] | List of uncategorized attributes applicable to the product classification. | Small, 66.0 | 66.0 |
| code | String | Code of the product classification. | Small, 66.0 | 66.0 |
| id | String | ID of the product classification. | Small, 66.0 | 66.0 |
| name | String | Name of the product classification. | Small, 66.0 | 66.0 |

## Code Examples

```
{
  "id": "dummyId",
  "name": "Dummy Product Classification",
  "code": "DUMMY_CODE",
  "attributeCategories": [{
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
        }],
  "attributes": [{
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
        }]
}
```

## Related Topics

- Product Classification
                  Attribute Category (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_attribute_category_output.htm)
- Product Classification
                  Attribute Definition (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_attribute_definition_output.htm)
