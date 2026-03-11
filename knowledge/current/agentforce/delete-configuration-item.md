---
title: "Delete Configuration Item"
domain: agentforce
topic: delete-configuration-item
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:08:17.748Z
keywords: [Delete, Configuration, Item, Special, Access, Rules, Request, Response]
---

# Delete Configuration Item

# Delete Configuration Item

Delete a configuration item from the Configuration Management Database using its unique identifier.

## Special Access Rules

Configuration Items can be deleted by user that has ItSrvcCnfgItmTypMgr permission enabled.

## Request

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| id | Integer | The unique identifier of the configuration item to delete. | Required | 66.0 |

## Response

JSON example

```

```

Properties

| Field | Type | Description | Available Version |
| --- | --- | --- | --- |
| id | Integer | The unique integer identifier of the deleted configuration item. | 66.0 |
| status | String | The status of the delete operation. | 66.0 |
| message | String | A message providing details about the delete operation result. | 66.0 |