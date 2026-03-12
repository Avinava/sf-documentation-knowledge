---
title: "Unified Object Search Data"
domain: omnistudio
topic: unified-object-search-data
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:49.478Z
estimatedTokens: 330
keywords: [Unified, Search, Data, Output, representation]
---

# Unified Object Search Data

> Output representation of the unified object search
    data.

# Unified Object Search Data

Output representation of the unified object search data.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| data | Unified Object Search Result | Details of the criteria-based search and filter results. | Small, 58.0 | 58.0 |
| errors | Timeline Error[] | Details of the errors that were displayed. | Small, 58.0 | 58.0 |
| mapData | Unified Object Search Result Map Data[] | Map details of the records whose location is displayed in search results. | Small, 61.0 | 61.0 |
| offset | Integer | Number of records that are skipped before returning all records. | Small, 61.0 | 61.0 |
| pageNumber | Integer | Number of the page. | Small, 58.0 | 58.0 |
| pageSize | Integer | Number of search result records on each page. | Small, 58.0 | 58.0 |
| resultAggregationFields | String[] | The fields that are selected in the search criteria configuration and are used to group and aggregate search results. | Small, 58.0 | 58.0 |
| status | String | Indicates whether the request succeeded (SUCCESS) or failed (FAILURE). | Small, 58.0 | 58.0 |
| summary | Unified Object Search Result Summary | The summary of the count of records for each search result aggregation criteria field. | Small, 58.0 | 58.0 |

## Code Examples

```
{
   "data":{
      "searchResultFields":[
         {
            "fieldLabel":"Provider Name",
            "fieldName":"ProviderName",
            "fieldType":"string"
         },
         {
            "fieldLabel":"Provider Type",
            "fieldName":"ProviderType",
            "fieldType":"string"
         },
         {
            "fieldLabel":"Specialty",
            "fieldName":"Specialty",
            "fieldType":"textarea"
         }
      ],
      "searchResultRecords":[
         {
            "fieldValues":[
               {
                  "recordTextValue":"Marvin Monroe"
               },
               {
                  "recordTextValue":"Medical Doctor"
               },
               {
                  "recordTextValue":"|Mental Health|"
               },
               {
                  "recordTextValue":"0d0Z60000004CLTIA2"
               }
            ]
         },
         {
            "fieldValues":[
               {
                  "recordTextValue":"Julius Hibbert"
               },
               {
                  "recordTextValue":"Medical Doctor"
               },
               {
                  "recordTextValue":"|Primary Care|"
               },
               {
                  "recordTextValue":"0d0Z60000004CLbIAM"
               }
            ]
         },
         {
            "fieldValues":[
               {
                  "recordTextValue":"Nick Riviera"
               },
               {
                  "recordTextValue":"Medical Doctor"
               },
               {
                  "recordTextValue":"|Surgery|"
               },
               {
                  "recordTextValue":"0d0Z60000004CLYIA2"
               }
            ]
         },
         {
            "fieldValues":[
               {
                  "recordTextValue":"Robert Kelso"
               },
               {
                  "recordTextValue":"Medical Doctor"
               },
               {
                  "recordTextValue":"|Primary Care|"
               },
               {
                  "recordTextValue":"0d0Z60000004CLVIA2"
               }
            ]
         },
         {
            "fieldValues":[
               {
                  "recordTextValue":"John Dorian"
               },
               {
                  "recordTextValue":"Medical Doctor"
               },
               {
                  "recordTextValue":"|Primary Care|"
               },
               {
                  "recordTextValue":"0d0Z60000004CLWIA2"
               }
            ]
         },
         {
            "fieldValues":[
               {
                  "recordTextValue":"Percival Cox"
               },
               {
                  "recordTextValue":"Medical Doctor"
               },
               {
                  "recordTextValue":"|Primary Care|"
               },
               {
                  "recordTextValue":"0d0Z60000004CLXIA2"
               }
            ]
         },
         {
            "fieldValues":[
               {
                  "recordTextValue":"Christopher Turk"
               },
               {
                  "recordTextValue":"Medical Doctor"
               },
               {
                  "recordTextValue":"|Surgery|"
               },
               {
                  "recordTextValue":"0d0Z60000004CLZIA2"
               }
            ]
         },
         {
            "fieldValues":[
               {
                  "recordTextValue":"Elliot Reid"
               },
               {
                  "recordTextValue":"Medical Doctor"
               },
               {
                  "recordTextValue":"|Primary Care|"
               },
               {
                  "recordTextValue":"0d0Z60000004CLaIAM"
               }
            ]
         }
      ]
   },
   "errors":[
      
   ],
   "status":"SUCCESS",
   "summary":{
      "aggregateRecordCount":{
         
      },
      "aggregateRecordCountByCriteria":{
         "ProviderType":{
            
         },
         "FacilityName":{
            
         }
      },
      "isMoreRecordsPresent":false
   }
}
```

## Related Topics

- Unified Object Search Result (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_unified_object_search_result_data.htm)
- Timeline Error (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_timeline_error.htm)
- Unified Object Search Result Map
                        Data (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_unified_object_search_result_map_data.htm)
- Unified Object Search Result Summary (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_unified_object_search_result_summary.htm)
