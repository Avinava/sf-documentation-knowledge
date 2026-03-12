---
title: "Attribute Detail"
domain: insurance-developer-guide
topic: attribute-detail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:40.358Z
estimatedTokens: 294
keywords: [Attribute, Detail, Output, representation, product]
---

# Attribute Detail

> Output representation of product attribute details.

# Attribute Detail

Output representation of product attribute details.

JSON example

This request shows a sample success response.

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| attributeDefinitionId | String | ID of the attribute definition. | Small, 63.0 | 63.0 |
| attributePicklistValueId | String | ID of the attribute picklist value. | Small, 63.0 | 63.0 |
| dataType | String | Data type of attribute, such as Percentage. | Small, 63.0 | 63.0 |
| id | String | ID of the product. | Small, 63.0 | 63.0 |
| isActive | Boolean | Indicates whether the attribute is active (true) or not (false). | Small, 63.0 | 63.0 |
| keyHidden | Boolean | Indicates whether the attribute key is hidden (true) or (not). | Small, 63.0 | 63.0 |
| label | String | Label of the attribute. | Small, 63.0 | 63.0 |
| name | String | Name of the attribute. | Small, 63.0 | 63.0 |
| picklistValues | Attribute Picklist Value[] | List of picklist values. | Small, 63.0 | 63.0 |
| sequence | Integer | Sequence of attribute. | Small, 63.0 | 63.0 |
| value | String | Value of attribute. | Small, 63.0 | 63.0 |

## Code Examples

```
"attributes": [
    {
        "id": "0tjSG0000001embYAA",
        "sequence": 1, #optional
        "name": "Copay",
        "label": "Copay Currency", #optional
        "dataType": "CURRENCY",
        "keyHidden":false,
        "isActive": true
    },
    {
        "id": "0tjSG0000001eoDYAQ",
        "sequence": 1,
        "name": "Coinsurance",
        "label": "Coinsurance Percentage",
        "dataType": "PERCENTAGE",
        "keyHidden":false,
        "isActive": true
    }
]
```

## Related Topics

- Attribute Picklist Value (atlas.en-us.insurance_developer_guide.meta/insurance_developer_guide/connect_responses_attribute_picklist_value.htm)
