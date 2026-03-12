---
title: "Assign a Task Related to a Translation"
domain: knowledge-dev
topic: assign-a-task-related-to-a-translation
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:41.445Z
estimatedTokens: 159
keywords: [Assign, Task, Translation, Assigns, user, translated, article, including, due, date, instructions, actions, defined, change, resource]
---

# Assign a Task Related to a Translation

> Assigns a task to a user for a translated article, including due date and instructions.
  The actions are defined by the field change you request on the resource.

# Assign a Task Related to a Translation

Assigns a task to a user for a translated article, including due date and instructions. The actions are defined by the field change you request on the resource.

## Syntax

URI

```

```

Formats

JSON, XML

HTTP Method

PATCH

Authentication

Authorization: OAuth **accesstoken**

Parameters

| Parameter | Description |
| --- | --- |
| assigneeId | Assigns the primary article to a user ID or a queue ID. |
| dueDate | Date that the task is due. |
| instruction | Instructions for the task. |

Input:

```

```

Output:

HTTP status code 204 is returned when an existing record is updated.

## Code Examples

```
/services/data/v25.0/knowledgeManagement/articleVersions/translations/<translationVersionId>
```

```
{
       "assigneeId":"05Dxx0000dsads",
       "dueDate":"2012-04-19T07:00:00.000+0000",
       "instruction":"Please review."
       }
```
