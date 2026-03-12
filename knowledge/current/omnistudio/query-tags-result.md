---
title: "Query Tags Result"
domain: omnistudio
topic: query-tags-result
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:50.615Z
estimatedTokens: 143
keywords: [Query, Tags, Result, Output, representation, results, querying, context, tags.]
---

# Query Tags Result

> Output representation of the results when querying context tags.

# Query Tags Result

Output representation of the results when querying context tags.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| isDone | Boolean | Indicates whether the tag query process is complete (true) or not (false). | Small, 59.0 | 59.0 |
| isSuccess | Boolean | Indicates if the query was successful (true) or not (false). | Small, 59.0 | 59.0 |
| queryResult | Map<String, ContextTagDataRepresentation>> | Contains a mapping of each queried tag to its results. | Small, 59.0 | 59.0 |

## Related Topics

- Map<String,
                  ContextTagDataRepresentation>> (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_context_tag_data.htm)
