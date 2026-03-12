---
title: "Story History Query Resource"
domain: bi-dev-guide-rest-sdd
topic: story-history-query-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:05.515Z
estimatedTokens: 186
keywords: [Story, History, Query, Resource, Runs, Einstein, Discovery, item]
---

# Story History Query Resource

> Runs a query on an Einstein Discovery story history item.

# Story History Query Resource

Runs a query on an Einstein Discovery story history item.

Resource URL

```

```

Formats

JSON

Available Version

52.0

HTTP Methods

POST

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| history​Id | String | The ID of the story history to query. | Required | 52.0 |
| query​Payload | Story​Query​Input | The query information. | Required | 52.0 |
| story​Id | String | The ID of the story to retrieve the history record for. | Required | 52.0 |

Response body for POST

[Story Query](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_story_query.htm "A query for story insights.")

## Code Examples

```
/smartdatadiscovery/stories/<storyId>/histories/<historyId>/query
```

## Related Topics

- Story​Query​Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_story_query_input.htm)
- Story Query (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_story_query.htm)
