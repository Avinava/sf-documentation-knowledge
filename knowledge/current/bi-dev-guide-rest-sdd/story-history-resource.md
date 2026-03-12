---
title: "Story History Resource"
domain: bi-dev-guide-rest-sdd
topic: story-history-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:05.512Z
estimatedTokens: 162
keywords: [Story, History, Resource, specific, Einstein, Discovery, item]
---

# Story History Resource

> Returns a specific Einstein Discovery story history item.

# Story History Resource

Returns a specific Einstein Discovery story history item.

Resource URL

```

```

Formats

JSON

Available Version

51.0

HTTP Methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| history​Id | String | The ID of the story history to retrieve. | Required | 51.0 |
| story​Id | String | The ID of the story to retrieve. | Required | 51.0 |

Response body for GET

[Story Version](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_story_version.htm "An Einstein Discovery story version.")

## Code Examples

```
/smartdatadiscovery/stories/<storyId>/histories/<historyId>
```

## Related Topics

- Story Version (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_story_version.htm)
