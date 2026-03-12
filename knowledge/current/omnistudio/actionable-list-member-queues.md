---
title: "Actionable List Member
    Queues"
domain: omnistudio
topic: actionable-list-member-queues
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:48.359Z
estimatedTokens: 135
keywords: [Actionable, Member, Queues, Output, representation, fetch, contain]
---

# Actionable List Member
    Queues

> Output representation of the fetch request of the queues that contain the actionable list
    member as a supported object.

# Actionable List Member Queues

Output representation of the fetch request of the queues that contain the actionable list member as a supported object.

JSON Example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| nextPageCursor | String | Next page cursor of filtered actionable list member supporting queues. | Small, 59.0 | 59.0 |
| queues | Actionable List Member Queue[] | List of actionable lists assigned to the querying user. | Small, 59.0 | 59.0 |

## Code Examples

```
{
  "queues": [
    {
      "name": "Queue1",
      "id": "1sgxx0000000001AAA"
    },
    {
      "name": "Queue2",
      "id": "1sgxx0000000001BAA"
    }
  ],
  "nextPageCursor": "0xxdr45",
  "status": {
    "code": 200,
    "message": "Fetched all Queues"
  }
}
```

## Related Topics

- Actionable List Member
                  Queue (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_actionable_list_member_queue.htm)
