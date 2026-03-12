---
title: "Example: Spreading Time Label"
domain: retail-api
topic: example-spreading-time-label
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.270Z
estimatedTokens: 43
keywords: [Spreading, Time, Label, integration, metadata, JSON, datasource, AccountAndPromotionMeasures, spreaded]
---

# Example: Spreading Time Label

> This example provides details on the integration metadata JSON with datasource
  AccountAndPromotionMeasures (time label spreaded).

# Example: Spreading Time Label

This example provides details on the integration metadata JSON with datasource AccountAndPromotionMeasures (time label spreaded).

```

```

## Code Examples

```
{
  "datasources": [
    {
      "name": "AccountAndPromotionMeasures"
    }
  ],
  "dimensions": {
    "accountdimension": {
      "attributes": [
        {
          "label": "ExternalId",
          "name": "externalid"
        },
        {
          "label": "Name",
          "name": "name"
        },
        {
          "label": "AccountNUmber",
          "name": "accountnumber"
        }
      ],
      "key": "externalid",
      "level": ""
    },
    "productdimension": {
      "attributes": [
        {
          "label": "Description",
          "name": "description"
        },
        {
          "label": "ExternalId",
          "name": "externalid"
        },
        {
          "label": "Category",
          "name": "category"
        }
      ],
      "key": "externalid",
      "level": "Product"
    },
    "timedimension": {
      "includetotal": false,
      "splitweeks": false,
      "periodtype": "custom"
    },
    "kpidimension": {
      "measures": [
        {
          "name": "ProPlanIncrVolume",
          "label": "Incremental Volume"
        },
        {
          "name": "PlanTotalVolumeResult",
          "label": "Planned Baseline"
        }
      ]
    },
    "promotiondimension": {
      "attributes": [
        {
          "label": "id",
          "name": "id"
        },
        {
          "label": "accountid",
          "name": "accountid"
        },
        {
          "label": "accountplanrelevant",
          "name": "accountplanrelevant"
        }
      ],
      "key": "id",
      "level": ""
    }
  },
  "exportsettings": {
    "columns": [
      "accountdimension.externalid",
      "productdimension.externalid",
      "productdimension.category",
      "productdimension.description",
      "kpidimension.label",
      "kpidimension.measurecode",
      "...timedimension.label"
    ],
    "csvseparator": ","
  },
  "exportfilters": {
    "conditions": [
      {
        "operator": "includes",
        "value": [
          "Kroger_Atlanta"
        ],
        "attribute": "externalid",
        "dimension": "accountdimension",
        "name": "cond1"
      }
    ]
  }
}
```
