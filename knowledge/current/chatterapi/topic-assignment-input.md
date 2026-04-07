---
title: "Topic Assignment Input"
domain: chatterapi
topic: topic-assignment-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:10.423Z
estimatedTokens: 172
keywords: [Topic, Assignment, assign, item, record, Administrators, enable, topics, users, add, records]
---

> Represents a topic to assign to a feed item or record. Administrators must enable topics
    for objects before users can add topics to records of that object type.

# Topic Assignment Input

Represents a topic to assign to a feed item or record. Administrators must enable topics for objects before users can add topics to records of that object type.

Root XML tag

<topicAssignment>

JSON

The following example assigns a topic to a record:

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| topicId | String | ID of an existing topic. | Required for existing topics if the topicName property isn’t used. | 30.0 |
| topicName | String | Name of a new or existing topic. | Required for new topics; required for existing topics if the topicId property isn’t used. | 30.0 |

## Code Examples

```
{ "topicId": "0TOD0000000090r"
}
```
