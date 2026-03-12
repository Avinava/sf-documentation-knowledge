---
title: "Query Context Record Result"
domain: omnistudio
topic: query-context-record-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:50.604Z
estimatedTokens: 167
keywords: [Query, Context, Record, Result, Output, representation, query, result, context, record.]
---

# Query Context Record Result

> Output representation of query result context record.

# Query Context Record Result

Output representation of query result context record.

Sample Response

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| contextId | String | ID for the context record that is queried. | Small, 59.0 | 59.0 |
| isDone | Boolean | Indicates whether the query operation is complete (true) or not (false). | Small, 59.0 | 59.0 |
| isSuccess | Boolean | Indicates whether the status of query is successful (true) or not (false). | Small, 59.0 | 59.0 |
| queryRecords | Context Query Record[] | List of the retrieved context query records. | Small, 59.0 | 59.0 |

## Code Examples

```
{
   "contextId":"7bc695bc-f38b-4a94-8a95-0caa50f3da53",
   "isDone":true,
   "isSuccess":true,
   "queryRecords":[
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

- Context
                  Query Record (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_query_record.htm)
