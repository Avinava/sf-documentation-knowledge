---
title: "Query Context Record (POST)"
domain: omnistudio
topic: query-context-record-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:08.956Z
keywords: [Query, Context, Record, POST]
---

# Query Context Record (POST)

# Query Context Record (POST)

Query a context record, with the option to retrieve child records.

Resource

```

```

Examples

```

```

```

```

Available version

59.0

Requires Chatter

No

HTTP methods

POST

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| children | Boolean | Indicates whether to retrieve child records true or not false. | Optional | 59.0 |

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| attributes | String[] | List of attributes to be retrieved. | Optional | 58.0 |
| businessObjectTypeFilter | String | Filter based on a business object type. | Optional | 58.0 |
| contextId | String | The ID of the context to be queried. | Required | 58.0 |
| queryPath | String[] | Path to the parent node. | Optional | 58.0 |

Response body for POST

[Query Context Record Result](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_query_context_record_result.htm "Output representation of query result context record.")