---
title: "Top Unanswered Questions (Pilot)"
domain: chatterapi
topic: top-unanswered-questions-pilot
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.300Z
estimatedTokens: 288
keywords: [Top, Unanswered, Questions, Pilot, context, user, Experience, Cloud, site]
---

# Top Unanswered Questions (Pilot)

> Get the top unanswered questions for the context user in an
      Experience Cloud site.

# Top Unanswered Questions (Pilot)

Get the top unanswered questions for the context user in an Experience Cloud site.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

We provided top-five unanswered questions to selected customers through a pilot program that required agreement to specific terms and conditions. This pilot program is closed and not accepting new participants.

Resource

```

```

Available version

42.0

Requires Chatter

Yes

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| filter | String | Specifies the filter for the feed. UnansweredQuestionsWithCandidate​Answers is the only valid value. | Optional | 42.0 |
| pageSize | Integer | Specifies the number of items per page. Valid values are from 0 through 10. If you don’t specify a value, the default size is 5. | Optional | 42.0 |

Response body for GET

[Feed Element Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_page.htm "Container of feed elements with paginated results.")

## Code Examples

```
/connect/communities/communityId/question-and-answers/top-unanswered
```

## Related Topics

- Feed Element Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_page.htm)
