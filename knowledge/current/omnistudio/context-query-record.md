---
title: "Context Query Record"
domain: omnistudio
topic: context-query-record
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:49.883Z
estimatedTokens: 126
keywords: [Context, Query, Record, Output, representation, context, query, record, including, primary, associated, child, records.]
---

# Context Query Record

> Output representation of context query record, including primary and associated child
    records.

# Context Query Record

Output representation of context query record, including primary and associated child records.

Sample Response

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| childQueryRecords | Context Query Record | List of child query records derived from the main context query. | Small, 59.0 | 59.0 |
| record | Context Data Record | The context data record obtained from the query. | Small, 59.0 | 59.0 |

## Code Examples

```
{
   "childQueryRecords":[
      {
         "childQueryRecords":[
            
         ],
         "record":{
            "attributesAndValues":{
               "Name":"Acme Corp",
               "BillingAddress":"{city:New York,country:USA,geocodeAccuracy:null,latitude:null,longitude:null,postalCode:31349,state:NY,street:10 Main Rd.}",
               "Industry":"Manufacturing",
               "Type":"Prospect"
            },
            "businessObjectType":"Account",
            "childBusinessObjectTypes":[
               "OpportunityItem",
               "OrderItem"
            ],
            "contextDataRecordId":"003xx000004WhFsAAK",
            "currentState":"CREATED",
            "lastUpdatedTimeStamp":"2023-10-11 04:46:13.804"
         }
      }
   ]
}
```

## Related Topics

- Context Data Record (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_data_record.htm)
