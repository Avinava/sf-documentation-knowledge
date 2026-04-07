---
title: "Get Answers From Data 360 Sources"
domain: chatterapi
topic: get-answers-from-data-360-sources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:03:37.193Z
estimatedTokens: 224
keywords: [Answers, Data, Sources, Search, model, natural, language, query, answer]
---

# Get Answers From Data 360 Sources

> Search a data model object using a natural language query and return an
    answer.

# Get Answers From Data 360 Sources

Search a data model object using a natural language query and return an answer.

Resource

[/connect/search/sobjects/objectApiName/answer](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_search_object_answer.htm "Search an object using a natural language query and return an answer.")

HTTP method

GET

Example

```

```

Response Body

```

```

#### See Also

-   [Search Object Answer](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_search_object_answer.htm "Search an object using a natural language query and return an answer.")

-   [*Einstein Search Help*: Select Data Model Objects as Sources for Search Answers](https://help.salesforce.com/s/articleView?id=ai.search_es_search_answers_select_dmo_sources.htm&language=en_US " Einstein Search Help: Select Data Model Objects as Sources for Search
    Answers - HTML (New Window)")

## Code Examples

```
/services/data/v63.0/connect/search/sobjects/ssot__KnowledgeArticleVersion__dlm/answer?q=How can I setup the labs field service dashboards &htmlEncode=false
```

```
{
   "content":"<p>To set up the <b>Salesforce Labs Field Service Dashboards</b>, you can download a free package from the Salesforce Labs AppExchange. This package includes three standard dashboards that help track key metrics and performance in your field service operations. These dashboards can be customized to meet your specific needs. Key metrics tracked include:</p><ul><li>Number of completed appointments by a resource</li><li>Management by territory and utility</li><li>Total hours worked by resource</li><li>Number of maintenance plan check-ins</li><li>Resource capacity by territory</li><li>Upcoming priority appointments</li><li>Total number of completed appointments by week</li><li>Products consumed by work orders</li><li>Average appointment and travel times</li></ul><p>The dashboards available are:</p><ul><li><b>System Administrator Dashboard</b>: Displays metrics such as products needed and consumed, and overall performance for each type of work.</li><li><b>Inventory Manager Dashboard</b>: Shows how products are consumed and used by work order types.</li><li><b>Service Manager Dashboard</b>: Focuses on work performance of resources and additional work order metrics.</li></ul><p>To download the dashboards, click 'Get It Now' on the Field Service Dashboards page on AppExchange.</p>",
   "searchObjects":[
      {
         "objectApiName":"ssot__KnowledgeArticleVersion__dlm",
         "searchResults":[
            {
               "id":"q9i000003855734AAA",
               "fields":{
                  "ssot__Name__c":{
                     "value":"Set Up Salesforce Labs Field Service Dashboards",
                     "displayValue":null
                  },
                  "ssot__Id__c":{
                     "value":"ka0SG00000KKV8zYAH",
                     "displayValue":null
                  }
               }
            },
            {
               "id":"q9i000007146011AAA",
               "fields":{
                  "ssot__Name__c":{
                     "value":"Set Up Field Service",
                     "displayValue":null
                  },
                  "ssot__Id__c":{
                     "value":"ka0SG00000KKWrRYAX",
                     "displayValue":null
                  }
               }
            }
         ],
         "displayFields":[
            "ssot__Name__c",
            "ssot__Id__c"
         ],
         "orderBy":[
            
         ],
         "status":null,
         "pageInfo":{
            "offset":0,
            "pageSize":2,
            "hasNextPage":false
         },
         "spellCorrectionInfo":null
      }
   ],
   "llmGenerationId":"chatcmpl-BaOnl0VoiNqJS2TZvYsx8chmyY93W",
   "parameters":{
      "q":"How can I set up the labs field service dashboards"
   },
   "metadata":{
      "ssot__KnowledgeArticleVersion__dlm":{
         "objectApiName":"ssot__KnowledgeArticleVersion__dlm",
         "label":"Knowledge Article Version",
         "labelPlural":"Knowledge Article Version",
         "themeInfo":{
            "color":"FF538A",
            "iconUrl":"https://orgfarm-0a84d99a1a.test1.my.pc-rnd.salesforce.com/img/icon/t4v35/custom/custom68.svg"
         },
         "fields":{
            "ssot__Id__c":{
               "field":"ssot__Id__c",
               "fieldApiName":"ssot__Id__c",
               "domain":"ssot__KnowledgeArticleVersion__dlm",
               "label":"Knowledge Article Version Id",
               "fieldType":"String",
               "sortable":true,
               "filterable":true,
               "highlightable":false
            },
            "ssot__Name__c":{
               "field":"ssot__Name__c",
               "fieldApiName":"ssot__Name__c",
               "domain":"ssot__KnowledgeArticleVersion__dlm",
               "label":"Name",
               "fieldType":"String",
               "sortable":true,
               "filterable":true,
               "highlightable":false
            }
         }
      }
   }
}
```

## Related Topics

- /connect/search/sobjects/objectApiName/answer (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_search_object_answer.htm)
- Search Object Answer (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_search_object_answer.htm)
