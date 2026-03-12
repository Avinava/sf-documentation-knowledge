---
title: "Story Query Resource"
domain: bi-dev-guide-rest-sdd
topic: story-query-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:05.526Z
estimatedTokens: 158
keywords: [Story, Query, Resource, Queries, current, version, Einstein, Discovery]
---

# Story Query Resource

> Queries the current version of an Einstein Discovery
  story.

# Story Query Resource

Queries the current version of an Einstein Discovery story.

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
| query​Payload | Story​Query​Input | The query information. | Required | 52.0 |
| story​Id | String | The ID of the story to query. | Required | 52.0 |

Response body for POST

[Story Query](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_story_query.htm "A query for story insights.")

## Code Examples

```
/smartdatadiscovery/stories/<storyId>/query
```

## Related Topics

- Story​Query​Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_story_query_input.htm)
- Story Query (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_story_query.htm)
