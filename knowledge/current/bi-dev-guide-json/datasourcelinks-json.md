---
title: "dataSourceLinks JSON"
domain: bi-dev-guide-json
topic: datasourcelinks-json
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:02.208Z
estimatedTokens: 167
keywords: [dataSourceLinks, JSON, data, sources, configured, dashboard]
---

# dataSourceLinks JSON

> The dataSourceLinks section defines all data
		sources configured for the dashboard.

# dataSourceLinks JSON

The dataSourceLinks section defines all data sources configured for the dashboard.

For more information about connected data sources, see [Configure Cross-Dataset Faceting with Connected Data Sources](https://help.salesforce.com/articleView?id=bi_dashboard_data_source_connections.htm&language=en_US).

## Example

```

```

-   **[dataSourceLinks Properties](atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_dataSourceLinksProperties.htm)**
    The dataSourceLinks key defines all data source connections for the dashboard. It contains a separate node for each connection. Each connection has properties about each data source.

## Code Examples

```
"dataSourceLinks": [
    {
        "fields": [
            {
                "dataSourceName": "ServiceOpportunity3",
                "dataSourceType": "saql",
                "fieldName": "AccountId"
            },
            {
                "dataSourceName": "account",
                "dataSourceType": "saql",
                "fieldName": "Id"
            }
        ],
        "label": "ServiceOpportunities Dataset to Account Dataset: Account ID",
        "name": "Link_970"
    },
    {
        "fields": [
            {
                "dataSourceName": "ServiceOpportunity3",
                "dataSourceType": "saql",
                "fieldName": "StageName"
            },
            {
                "dataSourceName": "Static_Opp_Stage_1",
                "dataSourceType": "static",
                "fieldName": "value"
            }
        ],
        "label": "Static Opp Stage to ServiceOpportunities Dataset",
        "name": "Link_953"
    }
]
```

## Related Topics

- dataSourceLinks Properties (atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_dataSourceLinksProperties.htm)
