---
title: "Topic Names Input"
domain: chatterapi
topic: topic-names-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.974Z
estimatedTokens: 193
keywords: [Topic, Input, replace, currently, assigned, topics, suggested, assign]
---

# Topic Names Input

> A list of topic names to replace currently assigned topics. Also a list of suggested
    topics to assign.

# Topic Names Input

A list of topic names to replace currently assigned topics. Also a list of suggested topics to assign.

Root XML tag

<topicNamesCollection>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| topicNames | String[] | A list of up to 10 topic names for a feed item or 100 topic names for a record. | Required | 35.0 |
| topicSuggestions | String[] | A list of suggested topics to assign to a record or feed item to improve future topic suggestions. | Optional | 37.0 |

#### See Also

-   [Article Topic Assignment Job Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_article_topic_assignment_job_input.htm "An article and topic assignment job.")

## Code Examples

```
{ "topicNames": ["API", "Connect REST API", "ConnectApi"]
}
```

## Related Topics

- Article Topic Assignment Job Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_article_topic_assignment_job_input.htm)
