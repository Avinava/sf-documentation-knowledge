---
title: "Story Summary Resource"
domain: bi-dev-guide-rest-sdd
topic: story-summary-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:05.529Z
estimatedTokens: 151
keywords: [Story, Summary, Resource, current, version, Einstein, Discovery]
---

# Story Summary Resource

> Returns a summary for the current version of an Einstein Discovery
   story.

# Story Summary Resource

Returns a summary for the current version of an Einstein Discovery story.

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
| story​Id | String | The ID of the story to retrieve the summary for. | Required | 51.0 |

Response body for GET

[Story Summary Detail](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_story_summary_detail.htm "The summary detail for a story.")

## Code Examples

```
/smartdatadiscovery/stories/<storyId>/summary
```

## Related Topics

- Story Summary Detail (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_story_summary_detail.htm)
