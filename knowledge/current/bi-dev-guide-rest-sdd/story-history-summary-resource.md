---
title: "Story History Summary Resource"
domain: bi-dev-guide-rest-sdd
topic: story-history-summary-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:05.519Z
estimatedTokens: 177
keywords: [Story, History, Summary, Resource, Einstein, Discovery, item]
---

# Story History Summary Resource

> Returns a summary for an Einstein Discovery story history item.

# Story History Summary Resource

Returns a summary for an Einstein Discovery story history item.

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
| history​Id | String | The ID of the story history to retrieve the summary for. | Required | 51.0 |
| story​Id | String | The ID of the story to retrieve the history record for. | Required | 51.0 |

Response body for GET

[Story Summary Detail](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_story_summary_detail.htm "The summary detail for a story.")

## Code Examples

```
/smartdatadiscovery/stories/<storyId>/histories/<historyId>/summary
```

## Related Topics

- Story Summary Detail (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_story_summary_detail.htm)
