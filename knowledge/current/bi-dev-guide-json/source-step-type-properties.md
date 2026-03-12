---
title: "source Step Type
            Properties"
domain: bi-dev-guide-json
topic: source-step-type-properties
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.286Z
estimatedTokens: 338
keywords: [source, Step, sources, add, columns, groups, filters, formulas, query, Grain, groupings, formula, column, referencing, multiple]
---

# source Step Type
            Properties

> Use the sources property to add columns, groups,
            filters, and formulas to a step query.

# source Step Type Properties

Use the sources property to add columns, groups, filters, and formulas to a step query.

| Field Name | Description |
| --- | --- |
| columns | The columns for the source. For more information, see columns Properties. |
| groups | The dimensions to group the data in the source. |
| filters | The filters applied to the columns in the source. For more information, see filters Properties |
| name | The name of the data source. If the query has formula columns, they’re added as the last source without the name property. |
| cogroupType | When there are multiple data sources with different name properties, this parameter is used to define which records are included in the blended data for this query. Valid values for cogroupType are left, right inner full. For left and right blends, the initial dataset or blend is considered the left one. For more information on data blending, see Explore Multiple Datasets with a Single Query. |

## Grain Query

```

```

## Query without groupings

When a query isn’t grouped by a dimension, set groups to \["all"\]

```

```

## Query with groupings

```

```

## Query with formula column

```

```

## Query with columns referencing formulas

Formula columns are defined in a separate source without a name property.

```

```

## Query with multiple data sources

```

```

## Code Examples

```
"sources": [
    {
        "columns": [
          {
            "field": "Customer_Name",
            "name": "Customer_Name"
          },
          {
            "field": "Customer_Segment",
            "name": "Customer_Segment"
          },
          {
            "field": "Product_Name",
            "name": "Product_Name"
          },
          {
            "field": "City",
            "name": "City"
          },
          {
            "field": "Order_ID",
            "name": "Order_ID"
          },
        ],
        "groups": [],
        "filters": [],
        "name": "SuperStoreSales"
    }
]
```

```
"sources": [
    {
        "columns": [
          {
            "field": ["sum", "Amount"]
            "name": "A"
          },
        ],
        "groups": ["all"],
        "filters": [],
        "name": "SuperStoreSales"
    }
]
```

```
"sources": [
    {
        "columns": [
          {
            "field": ["sum", "Amount"]
            "name": "A"
          },
        ],
        "groups": ["Customer_Segment", "Order_priority"],
        "filters": [],
        "name": "SuperStoreSales"
    }
]
```

```
"sources": [
    {
        "columns": [
          {
            "field": ["sum", "Amount"]
            "name": "A"
          },
          {
            "formula": "case 
when starts_with('Product_Container', "Small|") then null
else count()
end
",
            "name": "B"
          }
        ],
        "filters": [],
        "groups": [
            "Order_Priority",
            "Product_Container"
        ],
        "name": "SuperStoreSales"
    }
]
```

```
"sources": [
    {
        "columns": [
          {
            "field": ["sum", "Amount"]
            "name": "A"
          }
        ],
        "groups": ["Customer_Segment", "Order_Priority"],
        "filters": [],
        "name": "SuperStoreSales"
    },
    {
        "columns": [
          {
            "forumula": "A*2",
            "name": "B"
          },
          {
            "forumula": "B/100",",
            "name": "C"
           }
         ]
    }
]
```

## Related Topics

- columns Properties (atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_steps_columns.htm)
- filters Properties (atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_steps_filters.htm)
