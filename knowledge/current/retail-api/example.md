---
title: "Example"
domain: retail-api
topic: example
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:37.263Z
estimatedTokens: 34
keywords: [integration, metadata, JSON, data, source, sample, configuration, product, part, level, sObjects, exported, along, KPIs]
---

# Example

> This sample integration metadata configuration specifies product data at the product
      part level, and defines the fields from the sObjects to be exported along with the
      KPIs.

# Example

This sample integration metadata configuration specifies product data at the product part level, and defines the fields from the sObjects to be exported along with the KPIs.

**PromotionMeasuresWithBOMComponents**

```

```

## Code Examples

```
{
  "datasources": [
    {
      "name": "PromotionAndTacticMeasures"
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
          "label": "Incremental Volume",
          "name": "ProPlanIncrVolume"
        },
        {
          "label": "Tactic Spend",
          "name": "PlanTotalPromoCosts"
        },
        {
          "label": "Lump Sum",
          "name": "FixedAmountLumpSum"
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
          "label": "datefrom",
          "name": "datefrom"
        },
        {
          "label": "templateName",
          "name": "templateName"
        },
        {
          "label": "accountid",
          "name": "accountid"
        },
        {
          "label": "accountplanrelevant",
          "name": "accountplanrelevant"
        },
        {
          "label": "accountexternalid",
          "name": "accountexternalid"
        }
      ],
      "key": "id",
      "level": ""
    },
    "tacticdimension": {
      "attributes": [
        {
          "name": "lifttype",
          "label": "lifttype"
        },
        {
          "name": "name",
          "label": "name"
        },
        {
          "name": "liftvalue",
          "label": "liftvalue"
        },
        {
          "name": "compensationmodel",
          "label": "compensationmodel"
        }
      ],
      "key": "name",
      "level": ""
    }
  },
  "exportsettings": {
    "columns": [
      "accountdimension.externalid",
      "promotiondimension.id",
      "promotiondimension.datefrom",
      "promotiondimension.templateName",
      "tacticdimension.name",
      "tacticdimension.compensationmodel",
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

```
{
   "datasources":[
      {
         "name":"PromotionAndTacticMeasuresWithBOMComponents"
      }
   ],
   "dimensions":{
      "accountdimension":{
         "attributes":[
            {
               "label":"ExternalId",
               "name":"externalid"
            },
            {
               "label":"Name",
               "name":"name"
            },
            {
               "label":"AccountNUmber",
               "name":"accountnumber"
            }
         ],
         "key":"externalid",
         "level":""
      },
      "productdimension":{
         "attributes":[
            {
               "label":"Description",
               "name":"description"
            },
            {
               "label":"ExternalId",
               "name":"externalid"
            },
            {
               "label":"Category",
               "name":"category"
            }
         ],
         "key":"externalid",
         "level":"Product"
      },
      "timedimension":{
         "includetotal":false,
         "splitweeks":false,
         "periodtype":"custom"
      },
      "productpartdimension":{
         "attributes":[
            {
               "label":"id",
               "name":"id"
            },
            {
               "label":"quantity",
               "name":"quantity"
            },
            {
               "label":"externalid",
               "name":"externalid"
            }
         ],
         "key":"id",
         "level":""
      },
      "kpidimension":{
         "measures":[
            {
               "label":"Incremental Volume",
               "name":"ProPlanIncrVolume"
            },
            {
               "label":"Tactic Spend",
               "name":"PlanTotalPromoCosts"
            },
            {
               "label":"Lump Sum",
               "name":"FixedAmountLumpSum"
            }
         ]
      },
      "promotiondimension":{
         "attributes":[
            {
               "label":"id",
               "name":"id"
            },
            {
               "label":"datefrom",
               "name":"datefrom"
            },
            {
               "label":"templateName",
               "name":"templateName"
            },
            {
               "label":"accountid",
               "name":"accountid"
            },
            {
               "label":"accountplanrelevant",
               "name":"accountplanrelevant"
            },
            {
               "label":"accountexternalid",
               "name":"accountexternalid"
            }
         ],
         "key":"id",
         "level":""
      },
      "tacticdimension":{
         "attributes":[
            {
               "name":"lifttype",
               "label":"lifttype"
            },
            {
               "name":"name",
               "label":"name"
            },
            {
               "name":"liftvalue",
               "label":"liftvalue"
            },
            {
               "name":"compensationmodel",
               "label":"compensationmodel"
            }
         ],
         "key":"name",
         "level":""
      }
   },
   "exportsettings":{
      "columns":[
         "accountdimension.externalid",
         "promotiondimension.id",
         "promotiondimension.datefrom",
         "promotiondimension.templateName",
         "tacticdimension.name",
         "tacticdimension.compensationmodel",
         "productdimension.externalid",
         "productdimension.category",
         "productdimension.description",
         "productpartdimension.id",
         "productpartdimension.externalid",
         "kpidimension.label",
         "kpidimension.measurecode",
         "timedimension.label"
      ],
      "csvseparator":","
   },
   "exportfilters":{
      "conditions":[
         {
            "operator":"includes",
            "value":[
               "Kroger_Atlanta"
            ],
            "attribute":"externalid",
            "dimension":"accountdimension",
            "name":"cond1"
         }
      ]
   }
}
```

```
{
  "datasources": [
    {
      "name": "PromotionMeasures"
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
          "label": "datefrom",
          "name": "datefrom"
        },
        {
          "label": "templateName",
          "name": "templateName"
        },
        {
          "label": "accountid",
          "name": "accountid"
        },
        {
          "label": "accountplanrelevant",
          "name": "accountplanrelevant"
        },
        {
          "label": "accountexternalid",
          "name": "accountexternalid"
        }
      ],
      "key": "id",
      "level": ""
    }
  },
  "exportsettings": {
    "columns": [
      "accountdimension.externalid",
      "promotiondimension.id",
      "promotiondimension.datefrom",
      "promotiondimension.templateName",
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

```
{
   "datasources":[
      {
         "name":"PromotionMeasuresWithBOMComponents"
      }
   ],
   "dimensions":{
      "accountdimension":{
         "attributes":[
            {
               "label":"ExternalId",
               "name":"externalid"
            },
            {
               "label":"Name",
               "name":"name"
            },
            {
               "label":"AccountNUmber",
               "name":"accountnumber"
            }
         ],
         "key":"externalid",
         "level":""
      },
      "productdimension":{
         "attributes":[
            {
               "label":"Description",
               "name":"description"
            },
            {
               "label":"ExternalId",
               "name":"externalid"
            },
            {
               "label":"Category",
               "name":"category"
            }
         ],
         "key":"externalid",
         "level":"Product"
      },
      "timedimension":{
         "includetotal":false,
         "splitweeks":false,
         "periodtype":"custom"
      },
      "kpidimension":{
         "measures":[
            {
               "name":"BOMPlanIncrVolAll",
               "label":"Planned Incremental Volume"
            }
         ]
      },
      "promotiondimension":{
         "attributes":[
            {
               "label":"id",
               "name":"id"
            },
            {
               "label":"datefrom",
               "name":"datefrom"
            },
            {
               "label":"templateName",
               "name":"templateName"
            },
            {
               "label":"accountid",
               "name":"accountid"
            },
            {
               "label":"accountplanrelevant",
               "name":"accountplanrelevant"
            },
            {
               "label":"accountexternalid",
               "name":"accountexternalid"
            }
         ],
         "key":"id",
         "level":""
      }
   },
   "productpartdimension":{
      "attributes":[
         {
            "label":"id",
            "name":"id"
         },
         {
            "label":"quantity",
            "name":"quantity"
         },
         {
            "label":"externalid",
            "name":"externalid"
         }
      ],
      "key":"id",
      "level":""
   },
   "exportsettings":{
      "columns":[
         "accountdimension.externalid",
         "promotiondimension.id",
         "promotiondimension.datefrom",
         "promotiondimension.templateName",
         "productdimension.externalid",
         "productdimension.category",
         "productdimension.description",
         "productpartdimension.id",
         "productpartdimension.externalid",
         "productpartdimension.quantity",
         "kpidimension.label",
         "kpidimension.measurecode",
         "timedimension.label"
      ],
      "csvseparator":","
   },
   "exportfilters":{
      "conditions":[
         {
            "operator":"includes",
            "value":[
               "Kroger_Atlanta"
            ],
            "attribute":"externalid",
            "dimension":"accountdimension",
            "name":"cond1"
         }
      ]
   }
}
```
