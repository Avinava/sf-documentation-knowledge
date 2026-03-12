---
title: "Persist Context (POST)"
domain: omnistudio
topic: persist-context-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:48.239Z
estimatedTokens: 357
keywords: [Persist, Context, POST, passing]
---

# Persist Context (POST)

> Persist a context by passing the context ID.

# Persist Context (POST)

Persist a context by passing the context ID.

Resource

```

```

Example for POST

```

```

Available version

59.0

Requires Chatter

No

HTTP methods

POST

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contextPersistInput | Object | Contains contextId and targetMappingId for persisting context. | Required | 59.0 |

JSON example

```

```

Response body for POST

[Persist Context Output](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_persist_context_output.htm "Output Representation to persist context data.")

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=industries_reference)

#### Note

When updating reference fields within a context and attempting to persist the context, changes to the reference field itself may not be persisted. This is because reference fields point to related entities, and the persist operation primarily focuses on the attributes of the main entity within the context.

For example, if you have an Order context with a reference field to an Account, updating the Account reference within the Order context and then calling the persist API may not save the updated Account reference. Other attributes of the Order might be persisted, but the relationship to the Account might not be.

## Code Examples

```
/connect/contexts/persist-records
```

```
https://yourInstance.salesforce.com/services/data/v66.0/connect/contexts/persist-records
```

```
{
  "contextPersistInput": {
    "contextId": "384fdcef-36e2-4bbb-82ed-2e7bc4e670c7",
    "targetMappingId": "11jxx0000004Q83AAE"
  }
}
```

```
{
  "contextId": "384fdcef-36e2-4bbb-82ed-2e7bc4e670c7",
  "targetMappingId": "11jxx0000004Q83AAE"
}
```

## Related Topics

- Persist
              Context Output (atlas.en-us.industries_reference.meta/industries_reference/connect_responses_persist_context_output.htm)
