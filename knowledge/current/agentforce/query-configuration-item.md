---
title: "Query Configuration Item"
domain: agentforce
topic: query-configuration-item
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:15.259Z
estimatedTokens: 939
keywords: [Query, Configuration, Item, configuration, item, its, unique, identifier., operation, detailed, information, single, item., Request, Response, CnfgItemTypeDef, DiscoveryInformation, LastDiscoveredBySource, Note]
---

# Query Configuration Item

> Query a configuration item by its unique identifier. This operation
      returns detailed information for a single configuration item.

# Query Configuration Item

Query a configuration item by its unique identifier. This operation returns detailed information for a single configuration item.

## Request

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| id | Integer | The unique identifier of the configuration item to retrieve. | Required | 66.0 |

## Response

JSON example

```

```

Properties

| Field | Type | Description | Available Version |
| --- | --- | --- | --- |
| id | Integer | The unique integer identifier of the configuration item. | 66.0 |
| name | String | The descriptive name of the Configuration Item. | 66.0 |
| createdOn | String | The date and time the record was created. | 66.0 |
| cnfgItemTypeDef | CnfgItemTypeDef | The configuration item type definition. | 66.0 |
| discoveryInformation | DiscoveryInformation | Information about sources that have discovered this configuration item and when. | 66.0 |
| lastModifiedOn | String | The date and time the record was last updated. | 66.0 |
| Attribute (by developer name) | String | Any configuration item attribute you request in the query is returned with its developer name as the key (for example, SD_OpSy—Operating system). The response includes only the attributes you request. | 66.0 |

## CnfgItemTypeDef

Configuration item type definition returned when requested in the query.

| Field | Type | Description | Available Version |
| --- | --- | --- | --- |
| component | Boolean | Indicates whether the configuration item type is a component type. | 66.0 |
| developerName | String | The developer name of the configuration item type. To retrieve the list of available CI type developer names programmatically, query the CnfgItemTypeDef object. | 66.0 |
| name | String | The display name of the configuration item type. | 66.0 |

## DiscoveryInformation

Contains information about sources that have discovered this configuration item, along with the date and time of discovery.

| Field | Type | Description | Available Version |
| --- | --- | --- | --- |
| createdBySource | String | The source that created the configuration item. | 66.0 |
| firstDiscoveredBy | String | The source that first discovered the configuration item. | 66.0 |
| firstDiscoveredOn | Integer | The date and time when the configuration item was first discovered (milliseconds since epoch). | 66.0 |
| lastDiscoveredBy | String | The source that last discovered the configuration item. | 66.0 |
| lastDiscoveredOn | Integer | The date and time when the configuration item was last discovered (milliseconds since epoch). | 66.0 |
| lastDiscoveredBySource | Array of LastDiscoveredBySource | List of discovery events with date and source. | 66.0 |

## LastDiscoveredBySource

Each element in the lastDiscoveredBySource array contains the following fields.

| Field | Type | Description | Available Version |
| --- | --- | --- | --- |
| date | Integer | The date and time when the configuration item was last discovered by this source (milliseconds since epoch). | 66.0 |
| source | String | The source that performed the discovery. | 66.0 |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=agentforce_it_service_dev_guide)

#### Note

When using the ciById operation, you can request any available attribute to be included in the response. The attributes you can include:

-   Standard Attributes: Many attributes are available out-of-the-box.
-   Custom Attributes: You can create and include custom attributes using the sObject API.

Add any attribute using its Developer Name (for example, SD\_AsNa—Asset Name) to specify exactly which information you want to receive for your Configuration Items (CIs).

## Code Examples

```
query CiById {
  ciById(id: 345672) {
    id
    cnfgItemTypeDef {
      component
      developerName
      name
    }
    discoveryInformation {
      createdBySource
      firstDiscoveredBy
      firstDiscoveredOn
      lastDiscoveredBy
      lastDiscoveredOn
      lastDiscoveredBySource {
        date
        source
      }
    }
  }
}
```

```
{
  "data": {
    "ciById": {
      "id": 6460947,
      "cnfgItemTypeDef": {
        "component": false,
        "developerName": "SD_AwEcIn",
        "name": "AWS EC2 Instance"
      },
      "discoveryInformation": {
        "createdBySource": "Aws",
        "firstDiscoveredBy": "Aws",
        "firstDiscoveredOn": 1765929600000,
        "lastDiscoveredBy": "Aws",
        "lastDiscoveredOn": 1765929600000,
        "lastDiscoveredBySource": [
          {
            "date": 1765929600000,
            "source": "Aws"
          }
        ]
      }
    }
  }
}
```

## Related Topics

- CnfgItemTypeDef (atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/tooling_api_objects_cnfgitemtypedef.htm)
