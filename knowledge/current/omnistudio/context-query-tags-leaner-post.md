---
title: "Context Query Tags Leaner (POST)"
domain: omnistudio
topic: context-query-tags-leaner-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:47.918Z
estimatedTokens: 257
keywords: [Context, Query, Tags, Leaner, POST, memory-optimized, result, suitable, Apex, low-heap, clients, Eliminate, redundant, metadata, reduce]
---

# Context Query Tags Leaner (POST)

> Query tags and return a memory-optimized (leaner) result suitable for Apex and low-heap
    clients. Eliminate redundant metadata to reduce heap usage and payload size.

# Context Query Tags Leaner (POST)

Query tags and return a memory-optimized (leaner) result suitable for Apex and low-heap clients. Eliminate redundant metadata to reduce heap usage and payload size.

Resource

```

```

Resource example

```

```

Available version

66.0

HTTP methods

POST

Request body for POST

Root XML tag

<LeanerQueryTagsInputRepresentation>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contextId | String | ID of the context to query. | Required | 66.0 |
| tags | String[] | List of tag names to query from the context. Tags can include both attribute-level and node-level. | Required | 66.0 |

Response body for POST

[Leaner Query Tags Result](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_leaner_query_tags_result.htm "Output representation of the leaner query tags result. The result includes compact tag data mapped to tag names and a shared list of record IDs.")

## Code Examples

```
/connect/contexts/query-tags-leaner
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/contexts/query-tags-leaner
```

```
{
  "contextId": "0000000s07fm061002917633740427233ff03037a8fe48048696667781ec824c",
  "tags": [
    "Contact_FirstName",
    "Contact_Email"
  ]
}
```

## Related Topics

- Leaner Query Tags Result (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_leaner_query_tags_result.htm)
