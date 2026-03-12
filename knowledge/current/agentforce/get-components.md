---
title: "Get Components"
domain: agentforce
topic: get-components
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:15.268Z
estimatedTokens: 550
keywords: [Get, Components, Retrieve, child, components, specific, configuration, item, its, unique, identifier., Request, Response, CIComponent, Note]
---

# Get Components

> Retrieve child components of a specific type for a configuration
      item by its unique identifier.

# Get Components

Retrieve child components of a specific type for a configuration item by its unique identifier.

## Request

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| ciId | Integer | The unique integer identifier of the parent configuration item whose child components you want to retrieve. | Required | 66.0 |
| componentCiType | String | The developer name of the configuration item type definition for the component type to return. | Required | 66.0 |
| pageNumber | Integer | The page number of the results to return. Use with pageSize for pagination. | Required | 66.0 |
| pageSize | Integer | The maximum number of component configuration item records to return per page. | Required | 66.0 |

## Response

JSON example

```

```

Properties

| Field | Type | Description | Available Version |
| --- | --- | --- | --- |
| ciId | Integer | The unique integer identifier of the parent configuration item that was queried. | 66.0 |
| records | CIComponent | An array of component configuration item objects for the current page. | 66.0 |

## CIComponent

Each element in the records array is a component configuration item object. You can request the id field and any configuration item attributes by their developer name in the query.

JSON example

```

```

Properties

| Field | Type | Description | Available Version |
| --- | --- | --- | --- |
| id | Integer | The unique integer identifier of the component configuration item. | 66.0 |
| Attributes (by developer name) | String | Configuration item attribute you request in the records is returned with its developer name. | 66. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=agentforce_it_service_dev_guide)

#### Note

You can request any available configuration item attribute in the records selection by using its developer name (for example, SD\_AsNa, SD\_OpSy). The response includes only the fields you request. Learn more [CI Types and Attributes](atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/graphql_api_agentic_it_service_canonical.htm#CI_Types_Attributes).

## Code Examples

```
query GetComponentsByCIId {
   getComponentsByCIId(
       ciId: 6460949
       componentCiType: "SD_NeAd"
       pageNumber: null
       pageSize: null
   ) {
       ciId
       records {
           id
           SD_AsNa
           SD_AsId
           SD_CiOwGr
       }
   }
}
```

```
{
   "data": {
       "getComponentsByCIId": {
           "ciId": "6460949",
           "records": [
               {
                   "id": 6899801,
                   "SD_AsNa": "New Component",
                   "SD_AsId": "AST6899801",
                   "SD_CiOwGr": null
               },
               {
                   "id": 6460950,
                   "SD_AsNa": "eni-0a13f4fe4dede3844",
                   "SD_AsId": "AST6460950",
                   "SD_CiOwGr": null
               }
           ]
       }
   }
}
```

```
{
  "id": 6899801,
  "SD_AsNa": "New Component",
  "SD_AsId": "AST6899801",
  "SD_CiOwGr": null
}
```

## Related Topics

- CI Types and Attributes (atlas.en-us.agentforce_it_service_dev_guide.meta/agentforce_it_service_dev_guide/graphql_api_agentic_it_service_canonical.htm)
