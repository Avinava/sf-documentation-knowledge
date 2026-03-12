---
title: "Directory Item Collection"
domain: bi-dev-guide-rest
topic: directory-item-collection
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.302Z
estimatedTokens: 483
keywords: [Directory, Item, Collection, items]
---

# Directory Item Collection

> A collection of directory items.

# Directory Item Collection

A collection of directory items.

JSON example

```

```

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| auto​-install​-requests | String | URL of the auto-install requests resource for the organization. | Small, 50.0 | 50.0 |
| dashboards | String | URL of the dashboards resource for the organization. | Small, 36.0 | 36.0 |
| data​Connector​Types | String | URL of the dataConnectorTypes resource for the organization. | Small, 39.0 | 39.0 |
| data​Connectors | String | URL of the dataConnectors resource for the organization. | Small, 39.0 | 39.0 |
| dataflow​jobs | String | URL of the dataflowjobs resource for the organization. | Small, 42.0 | 42.0 |
| datasets | String | URL of the datasets resource for the organization. | Small, 36.0 | 36.0 |
| folders | String | URL of the folders resource for the organization. | Small, 36.0 | 36.0 |
| limits | String | URL of the limits resource for the organization | Small, 51.0 | 51.0 |
| lenses | String | URL of the lenses resource for the organization. | Small, 36.0 | 36.0 |
| query | String | URL of the query resource for the organization. | Small, 36.0 | 36.0 |
| recipes | String | URL of the recipes resource for the organization. | Small, 38.0 | 38.0 |
| replicated​Datasets | String | URL of the replicatedDatasets resource for the organization. | Small, 37.0 | 37.0 |
| schedules | String | URL of the watchlist schedules resource for the organization. | Small, 48.0 | 48.0 |
| templates | String | URL of the templates resource for the organization. | Small, 36.0 | 36.0 |
| trended​reports | String | URL of the trendedreports resource for the organization. | Small, 37.0 | 37.0 |

#### See Also

-   [Wave Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_wave.htm "Lists the top-level resources available for Analytics.")

## Code Examples

```
{
    "auto-install-requests" : "/services/data/v54.0/wave/auto-install-requests",
    "dashboards" : "/services/data/v54.0/wave/dashboards",
    "dataConnectorTypes" : "/services/data/v54.0/wave/dataConnectorTypes",
    "dataConnectors" : "/services/data/v54.0/wave/dataConnectors",
    "dataflowjobs" : "/services/data/v54.0/wave/dataflowjobs",
    "datasets" : "/services/data/v54.0/wave/datasets",
    "folders" : "/services/data/v54.0/wave/folders",
    "limits" : "/services/data/v54.0/wave/limits",
    "lenses" : "/services/data/v54.0/wave/lenses",
    "query" : "/services/data/v54.0/wave/query",
    "recipes" : "/services/data/v54.0/wave/recipes",
    "replicatedDatasets" : "/services/data/v54.0/wave/replicatedDatasets",
    "schedules" : "/services/data/v54.0/wave/watchlist/schedules",
    "templates" : "/services/data/v54.0/wave/templates",
    "trendedreports" : "/services/data/v54.0/wave/trendedreports"
}
```

## Related Topics

- Wave Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_wave.htm)
