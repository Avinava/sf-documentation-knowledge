---
title: "Delete Configuration Item Relationship"
domain: agentforce
topic: delete-configuration-item-relationship
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:35:55.016Z
estimatedTokens: 240
keywords: [Configuration, Item, Relationship, Submit, operation, relationships, items, CIs, synchronous]
---

> Submit an operation to delete relationships between configuration
      items (CIs). This is a synchronous request.

# Delete Configuration Item Relationship

Submit an operation to delete relationships between configuration items (CIs). This is a synchronous request.

## Special Access Rules

Configuration Item relationships can be deleted by a user that has the ItSrvcCnfgItmTypMgr permission enabled.

## Request

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| id | ID | The unique identifier of the CI relationship to delete. | Required | 66.0 |

## Response

JSON example

This example is a sample response from the deleteCIRelationship mutation.

```

```

Properties

| Field | Type | Description | Available Version |
| --- | --- | --- | --- |
| id | Integer | The relationship identifier. | 66.0 |
| status | String | Indicates the success or failure of the operation. | 66.0 |
| message | String | A message providing details about the delete operation result. | 66.0 |

## Code Examples

```
mutation DeleteCIRelationship {
              deleteCIRelationship(id: "8") {
              id
              status
              message
              }
              }
```

```
{
              "data": {
              "deleteCIRelationship": {
              "id": "8",
              "status": "success",
              "message": "Relationship deleted successfully"
              }
              }
              }
```
