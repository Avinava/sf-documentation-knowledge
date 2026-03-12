---
title: "grain Step Type
        Properties"
domain: bi-dev-guide-json
topic: grain-step-type-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:02.313Z
estimatedTokens: 807
keywords: [grain, Step, tables, groupings, dataset, display, columns]
---

# grain Step Type
        Properties

> Use the grain step type for a values table.
        Values tables have no groupings, just a list of dataset fields to display as columns in the
        table.

# grain Step Type Properties

Use the grain step type for a values table. Values tables have no groupings, just a list of dataset fields to display as columns in the table.

| Field Name | Description |
| --- | --- |
| datasets | An array of datasets used by this step. Specify the alias of each dataset. If the pigql attribute references a dataset that’s not specified here, the dashboard doesn’t render.NoteA grain step can only have one dataset. |
| isFacet | Enables this step to facet and be faceted by other steps. Faceting is when a selection in a widget filters other steps in the dashboard. |
| isGlobal | This applies to global filters created before Winter ’18 only. Newer global filters, those created in the global filter panel widget, don’t require a step. Default is false. You can apply this property only on steps that are connected to a global filter widget—all other steps ignore this property. A global filter filters other steps in the dashboard that have useGlobal set to true and reference the same dataset. |
| label | Step label, which is primarily used for display in the dashboard designer user interface. |
| query | The query used to retrieve results from a dataset. The query can be in compact form only and can contain the following properties:filtersThe filter conditions to apply to the data.valuesList of dataset fields to show as table columns.limitThe maximum number of results that the step can return. When you create a grain step, by default, Analytics sets limit to 100. To return more results, set the limit attribute accordingly. The higher you increase the limit, the longer the query takes. When a limit isn’t set, CRM Analytics returns up to 10,000 results.NoteLimit only impacts the number of records returned for display. The limit doesn’t impact calculations across all records in the dataset. For instance, a query groups by Account Name and there are one million Account Names in a dataset. When the limit is 20, CRM Analytics returns 20 records for display. But the summary row provides a total for the one million records."steps": {     "lens_1": {         "type": "grain",         "visualizationParameters": {             "visualizationType": "valuestable",             "options": {}         },         "query": {             "values": [                 "Case.IsEscalated",                 "AccountId",                 "StageName",                 "ForecastCategory",                 "IsClosed",                 "Amount"             ],             "limit": 500         },         "isFacet": true,         "useGlobal": true,         "isGlobal": false,         "label": "",         "datasets": [             {                 "name": "ServiceOpportunity16",                 "url": "/services/data/v39.0/wave/datasets/0FbB00000000kOSKAY",                 "id": "0FbB00000000kOSKAY"             }         ]     } },For more information SAQL queries, see the Analytics SAQL Developer Guide . |
| type | Step type. Set to grain. |
| useGlobal | Indicates whether to apply global filters to this step (true) or not (false). |
| visualizationParameters | Visualization details about the step. For more information, see visualizationParameters Properties. |

## grain Step

```

```

## Code Examples

```
"steps": {
    "lens_1": {
        "type": "grain",
        "visualizationParameters": {
            "visualizationType": "valuestable",
            "options": {}
        },
        "query": {
            "values": [
                "Case.IsEscalated",
                "AccountId",
                "StageName",
                "ForecastCategory",
                "IsClosed",
                "Amount"
            ],
            "limit": 500
        },
        "isFacet": true,
        "useGlobal": true,
        "isGlobal": false,
        "label": "",
        "datasets": [
            {
                "name": "ServiceOpportunity16",
                "url": "/services/data/v39.0/wave/datasets/0FbB00000000kOSKAY",
                "id": "0FbB00000000kOSKAY"
            }
        ]
    }
},
```

```
"lens_1": {
  "type": "grain",
  "visualizationParameters": {
    "visualizationType": "valuestable",
    "options": {
      "totals": true
    }  
  },
  "query": {
    "filters": [
      [
        "Amount",
          [[
            1000000,
            7780844
          ]],
       ">=<="
      ]
    ],
    "values": [
      "AccountId",
      "ForecastCategory",
      "CloseDate",
      "Amount",
      "Account.Name",
      "StageName"
    ]
  },
  "isFacet": true,
  "useGlobal": true,
  "isGlobal": false,
  "label": "",
  "datasets": [
    {
      "name": "ServiceOpportunity3",
      "url": "/services/data/v39.0/wave/datasets/0FbR0000000012uKAA",
      "id": "0FbR0000000012uKAA"
    }
  ]
}
```

## Related Topics

- visualizationParameters Properties (atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_steps_visualizationParameters_properties.htm)
