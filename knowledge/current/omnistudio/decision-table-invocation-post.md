---
title: "Decision Table Invocation (POST)"
domain: omnistudio
topic: decision-table-invocation-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:25:08.724Z
keywords: [Decision, Table, Invocation, POST]
---

# Decision Table Invocation (POST)

# Decision Table Invocation (POST)

Invoke a decision table by passing multiple input conditions within the same request.

Resource

```

```

Resource example

```

```

Available version

58.0

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
| conditions | Decision Table Condition List | The list of decision table conditions on which the decision table executes and provides outcomes. | Required | 58.0 |
| datasetLinkName | String | The API name of the dataset link provided as an input for the decision table execution. | Optional | 58.0 |

Response body for POST

[Decision Table Bulk Outcome](atlas.en-us.industries_reference.meta/industries_reference/connect_responses_decision_table_bulk_outcome.htm "Output representation of the decision table bulk look-up.")