---
title: "filters JSON"
domain: bi-dev-guide-json
topic: filters-json
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:02.213Z
estimatedTokens: 139
keywords: [filters, JSON, added, filter, panel, widget, dashboard, designer]
---

# filters JSON

> The filters section defines the global filters
        added to a global filter panel widget, which is available in the dashboard
        designer.

# filters JSON

The filters section defines the global filters added to a global filter panel widget, which is available in the dashboard designer.

## Global Filters

```

```

-   **[filters Properties](atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_filters_parameters.htm)**
    The filters key defines all global filters included in the dashboard. It contains a separate node, with configurable properties, for each global filter. Global filters apply to all layouts, but you can specify whether each widget applies the global filters.

## Code Examples

```
"filters": [
    {
        "label": "Account.Type",
        "fields": [
            "Account.Type"
        ],
        "operator": "in",
        "locked": false,
        "dataset": {
            "name": "opportunity"
        },
        "value": [
            "Customer"
        ]
    },
    {
        "label": "ForecastCategory",
        "fields": [
            "ForecastCategory"
        ],
        "operator": "in",
        "locked": true,
        "dataset": {
            "name": "opportunity"
        },
        "value": [
            "BestCase"
        ]
    }
],
```

## Related Topics

- filters Properties (atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_filters_parameters.htm)
