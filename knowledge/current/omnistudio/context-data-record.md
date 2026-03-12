---
title: "Context Data Record"
domain: omnistudio
topic: context-data-record
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:48.539Z
estimatedTokens: 234
keywords: [Context, Data, Record, Output, representation, including, attributes, associated, child, objects, relevant, metadata]
---

# Context Data Record

> Output representation of context data record, including its attributes, type, associated
    child objects, and other relevant metadata.

# Context Data Record

Output representation of context data record, including its attributes, type, associated child objects, and other relevant metadata.

Sample Response

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| attributesAndValues | Map<String, Object> | Mapping of attributes to their corresponding values within the context. | Small, 59.0 | 59.0 |
| businessObjectType | String | Type of business object. | Small, 59.0 | 59.0 |
| childBusinessObjectTypes | String[] | List indicating types of child business objects. | Small, 59.0 | 59.0 |
| contextDataRecordId | String | Unique ID of the context data record. | Small, 59.0 | 59.0 |
| currentState | String | The current status of the context data record. | Small, 59.0 | 59.0 |
| lastUpdatedTimeStamp | String | The last updated time stamp of context data record. | Small, 59.0 | 59.0 |

## Code Examples

```
{
            "childQueryRecords": [
                {
                    "childQueryRecords": [],
                    "record": {
                        "attributesAndValues": {
                            "Name": "Acme Corp",
                            "BillingAddress": "{city:New York,country:USA,geocodeAccuracy:null,latitude:null,longitude:null,postalCode:31349,state:NY,street:10 Main Rd.}",
                            "Industry": "Manufacturing",
                            "Type": "Prospect"
                        },
                        "businessObjectType": "Account",
                        "childBusinessObjectTypes": [
                            "OpportunityItem",
                            "OrderItem"
                        ],
                        "contextDataRecordId": "003xx000004WhFsAAK",
                        "currentState": "CREATED",
                        "lastUpdatedTimeStamp": "2023-10-11 04:46:13.804"
                    }
                }
            ]
        }
    ]
}
```
