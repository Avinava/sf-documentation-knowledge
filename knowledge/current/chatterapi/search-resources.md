---
title: "Search Resources"
domain: chatterapi
topic: search-resources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.421Z
estimatedTokens: 307
keywords: [Search, Resources, objects, keywords, questions]
---

# Search Resources

> Search objects using keywords or questions.

# Search Resources

Search objects using keywords or questions.

Available resources are:

| Resource | Description |
| --- | --- |
| /connect/search/sobjects/result-groups | Search objects using keywords and return result groups. |
| /connect/search/sobjects/objectApiName/results | Search an object using keywords and return results. |
| /connect/search/sobjects/answer | Search objects using a natural language query and return an answer. |
| /connect/search/sobjects/objectApiName/answer | Search an object using a natural language query an answer. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

Use filter parameters to return only the data the application needs. Use filterGroup as a request parameter or in a request body.

#### See Also

-   [Specify Response Sizes](atlas.en-us.chatterapi.meta/chatterapi/connect_returns_filters.htm "Use filter parameters to return only the data the application needs. To specify the response size by group (big, medium, or small), use filterGroup as a request parameter or in a request body. In addition, to exclude or include specific properties, use either exclude or include as a request parameter or in a request body.")

## Related Topics

- /connect/search/sobjects/result-groups (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_search_objects.htm)
- /connect/search/sobjects/objectApiName/results (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_search_object.htm)
- /connect/search/sobjects/answer (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_search_objects_answer.htm)
- /connect/search/sobjects/objectApiName/answer (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_search_object_answer.htm)
- Specify Response Sizes (atlas.en-us.chatterapi.meta/chatterapi/connect_returns_filters.htm)
