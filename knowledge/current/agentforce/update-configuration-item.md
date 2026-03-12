---
title: "Update Configuration Item"
domain: agentforce
topic: update-configuration-item
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:15.909Z
estimatedTokens: 599
keywords: [Configuration, Item, Updates, attributes, unique, identifier, subset, Special, Access, Rules, UpdatedAttributes]
---

# Update Configuration Item

> Updates one or more attributes of an existing configuration item
      specified by its unique identifier. You can update a subset of attributes or all attributes in
      a single request.

# Update Configuration Item

Updates one or more attributes of an existing configuration item specified by its unique identifier. You can update a subset of attributes or all attributes in a single request.

## Special Access Rules

Who can update a configuration item:

-   Users with ItSrvcCnfgItmOwner can update only configuration items they own.
-   Configuration Management Database (CMDB) managers: Users with ItSrvcCnfgItmTypMgr can update any configuration item.

## Request

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| id | ID | The unique identifier of the configuration item to update. | Required | 66.0 |
| Attribute Developer Name | String | The developer name of the configuration item attribute to update. You can specify multiple attributes in a single request. | Required | 66.0 |

## Response

JSON example

```

```

Properties

| Field | Type | Description | Available Version |
| --- | --- | --- | --- |
| id | Integer | The unique integer identifier of the updated configuration item. | 66.0 |
| lastModifiedOn | String | The date and time the record was last updated. | 66.0 |
| updatedAttributes | UpdatedAttributes | An array of objects containing the developer names and values of the attributes that were updated. | 66.0 |

## UpdatedAttributes

An array of objects containing the developer names and values of the attributes that were updated in the configuration item.

JSON example

```

```

Properties

| Field | Type | Description | Available Version |
| --- | --- | --- | --- |
| developerName | String | The developer name of the updated attribute. | 66.0 |
| value | String | The new value assigned to the attribute after the update operation. | 66.0 |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=agentforce_it_service_dev_guide)

#### Note

When using the updateCIById operation, you can update any available attribute using its Developer Name. The attributes you can update include:

-   **Standard Attributes**: Many attributes are available out-of-the-box.
-   **Custom Attributes**: You can create and include custom attributes using the sObject API.

Add any attribute using its Developer Name (for example, SD\_AsNa—Asset Name) to specify exactly which attributes you want to update for your Configuration Items (CIs).

## Code Examples

```
mutation UpdateCIById {
  updateCIById(
    input: {
      SD_AsNa: "abc"
      SD_SeIpAd: "10.10.10.10"
      id: "6249301"
    }
  ) {
    id
    lastModifiedOn
    updatedAttributes {
      developerName
      value
    }
  }
}
```

```
{
  "data": {
    "updateCIById": {
      "id": 6249301,
      "lastModifiedOn": "1764831587989",
      "updatedAttributes": [
        {
          "developerName": "SD_AsNa",
          "value": "abc"
        },
        {
          "developerName": "SD_SeIpAd",
          "value": "10.10.10.10"
        }
      ]
    }
  }
}
```

```
{
  "updatedAttributes": [
    {
      "developerName": "SD_AsNa",
      "value": "abc"
    },
    {
      "developerName": "SD_SeIpAd",
      "value": "10.10.10.10"
    }
  ]
}
```
