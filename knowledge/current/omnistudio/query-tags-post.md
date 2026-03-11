---
title: "Query Tags (POST)"
domain: omnistudio
topic: query-tags-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:08.701Z
keywords: [Query, Tags, POST]
---

# Query Tags (POST)

# Query Tags (POST)

Create query tags within a defined context

Resource

```

```

Example

```

```

Available version

59.0

Requires Chatter

No

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contextId | String | ID of the context record. | Required | 59.0 |
| tags | String[] | List of query tags to be queried within this context. | Required | 59.0 |

Response body for POST

[Query Tags Result](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_query_tags_result.htm "Output representation of the results when querying context tags.")