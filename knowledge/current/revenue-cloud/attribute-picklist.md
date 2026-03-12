---
title: "Attribute Picklist"
domain: revenue-cloud
topic: attribute-picklist
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:07.350Z
estimatedTokens: 190
keywords: [Attribute, Picklist, Output, representation, attribute, picklist.]
---

# Attribute Picklist

> Output representation of the attribute picklist.

# Attribute Picklist

Output representation of the attribute picklist.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| dataType | String | Data type of the values in the picklist. Valid values are:BooleanDateDatetimeNumberTextCurrencyPercent | Small, 60.0 | 60.0 |
| description | String | Description of the picklist, such as the picklist purpose or the associated product. | Small, 60.0 | 60.0 |
| id | String | ID associated with the attribute picklist record. | Small, 60.0 | 60.0 |
| name | String | Name of the picklist value. | Small, 60.0 | 60.0 |
| values | Attribute Picklist Value[] | List of values associated with the picklist. | Small, 60.0 | 60.0 |

## Code Examples

```
"picklist": {
     "dataType": "Text",
     "description": "Fabric Module options",
     "id": "0v51Q000000TNDkQAO",
     "name": "Fabric Module options",
     "values": [
      {
        "abbreviation": "IFM1"
        "code": "PV0051",
        "displayValue": "25G Intelligent Fabric Module with 8x 25G SFP28 ports",
        "id": "0v61Q0000008OMYQA2",
        "name": "25G Intelligent Fabric Module with 8x 25G SFP28 ports",
        "sequence": "1",
        "value": "25G Intelligent Fabric Module with 8x 25G SFP28 ports",
        "status" : "Active"
      },
      {
        "abbreviation": "IFM2"
        "code": "PV0052",
        "displayValue": "100G Intelligent Fabric Module with 8x 100G QSFP28 ports",
        "id": "0v61Q0000008OMZQA2",
        "name": "100G Intelligent Fabric Module with 8x 100G QSFP28 ports",
        "sequence": "2",
        "value": "100G Intelligent Fabric Module with 8x 100G QSFP28 ports",
        "status" : "Active"
      }
     ]
  }
```

## Related Topics

- Attribute Picklist Value (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_attribute_picklist_value_output.htm)
