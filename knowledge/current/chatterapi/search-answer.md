---
title: "Search Answer"
domain: chatterapi
topic: search-answer
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:21.056Z
estimatedTokens: 314
keywords: [Search, Answer, Results, searching, objects, natural, language, query]
---

# Search Answer

> Results of searching objects using a natural language query.

# Search Answer

Results of searching objects using a natural language query.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| content | String | AI generated response. | Small, 63.0 | 63.0 |
| llmGenerationId | String | LLM generation ID used to track any feedback on the conversation. | Small, 63.0 | 63.0 |
| searchObjects | Search Object[] | Record results to build the answer. | Small, 63.0 | 63.0 |
| metadata | Map<String, Object Metadata> | All search related metadata associated with the objects found in the results. | Small, 63.0 | 63.0 |
| parameters | Parameters | Search query parameters. | Small, 63.0Medium, 64.0 | 63.0 |

#### See Also

-   [*Einstein Search Help*: Enable AI-Generated Search Answers](https://help.salesforce.com/s/articleView?id=ai.search_es_enable_search_answers.htm&language=en_US)

-   [Search Object Answer](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_search_object_answer.htm "Search an object using a natural language query and return an answer.")

-   [Search Objects Answer](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_search_objects_answer.htm "Search objects using a natural language query and return an answer.")

## Related Topics

- Search
                  Object (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_search_objec.htm)
- Object Metadata (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_object_metadat.htm)
- Parameters (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_parameter.htm)
- Search Object Answer (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_search_object_answer.htm)
- Search Objects Answer (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_search_objects_answer.htm)
