---
title: "Get Configuration Item Relationship"
domain: agentforce
topic: get-configuration-item-relationship
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-05-10T00:39:14.861Z
estimatedTokens: 348
keywords: [Configuration, Item, Relationship, Retrieves, detailed, relationships, unique, identifier, record]
---

> Retrieves detailed information about all configuration item (CI)
      relationships by using the unique identifier of a CI record.

# Get Configuration Item Relationship

Retrieves detailed information about all configuration item (CI) relationships by using the unique identifier of a CI record.

## Special Access Rules

Configuration Item relationships can be retrieved by users with either the ItSrvcCnfgItmTypMgr or ItSrvcCnfgItmOwner permission enabled.

## Request

JSON example

This example is a sample request to retrieve all relationships for a specific configuration item.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| id | ID | The unique identifier of the Configuration Item whose relationships are to be retrieved. | Required | 66.0 |

## Response

JSON example

This example is a sample response from the getCIRelationships query.

```

```

Properties

| Field | Type | Description | Available Version |
| --- | --- | --- | --- |
| developerName | String | Developer name of the configuration item. | 66.0 |
| id | Integer | Unique ID of this relationship record. | 66.0 |
| relation | String | Name of the relationship type. | 66.0 |
| source | Integer | ID of the parent configuration item. | 66.0 |
| sourceName | String | Display name of the parent configuration item. | 66.0 |
| target | int | ID of the child configuration item. | 66.0 |
| targetName | String | Display name of the child configuration item. | 66.0 |

## Code Examples

```
query GetCIRelationships {
              getCIRelationships(id: "6545401") {
              developerName
              id
              relation
              source
              sourceName
              targetName
              target
              }
              }
```

```
{
              "data": {
              "getCIRelationships": [
              {
              "developerName": "SD_AIFr",
              "id": "1175502",
              "relation": "Allocated From",
              "source": "6545402",
              "sourceName": "testingapplication2",
              "target": "6545401",
              "targetName": "testingbase2"
              }
              ]
              }
              }
```
