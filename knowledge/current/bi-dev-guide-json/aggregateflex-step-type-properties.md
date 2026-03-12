---
title: "aggregateflex Step Type
            Properties"
domain: bi-dev-guide-json
topic: aggregateflex-step-type-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:02.299Z
estimatedTokens: 2656
keywords: [aggregateflex, Step, perform, aggregate, queries, Analytics, dataset, query, summarizes, rows, returning, row, per, grouping, total]
---

# aggregateflex Step Type
            Properties

> Use the aggregateflex step type to perform
        aggregate queries on a Analytics dataset. An aggregate query summarizes rows, like
        returning one row per grouping. For example, this step type can return the total amount per
        sales rep.

# aggregateflex Step Type Properties

Use the aggregateflex step type to perform aggregate queries on a Analytics dataset. An aggregate query summarizes rows, like returning one row per grouping. For example, this step type can return the total amount per sales rep.

| Field Name | Description |
| --- | --- |
| datasets | An array of datasets used by this step. Specify the alias of each dataset. If the pigql attribute references a dataset that’s not specified here, the dashboard doesn’t render. |
| broadcastFacet | Controls whether the step’s selections are broadcasted as facets. Faceting is when a selection in a widget filters other steps in the dashboard. Default is true. |
| receiveFacetSource | Controls whether the step in the receiving query listens for broadcasted facets and applies them as filters. The mode can be “all”, “none”, “include”, or “exclude”. Use steps to list which steps to include or exclude. Default is all. |
| isGlobal | This applies to global filters created before Winter ’18 only. Newer global filters, those created in the global filter panel widget, don’t require a step. Default is false. You can apply this property only on steps that are connected to a global filter widget—all other steps ignore this property. A global filter filters other steps in the dashboard that have useGlobal set to true and reference the same dataset. |
| label | Step label, which is primarily used for display in the dashboard designer user interface. |
| query | The query used to retrieve results from a dataset. It must contain at least one grouping and can be in SAQL or compact form. Use a query in SAQL form to customize the query in a way that can’t be done using compact form.For compact form (2.0), the query can contain the following properties.sourcesThe array of sources where data comes from. For more information, see sources Properties.sourceFiltersThe filters applied to sources. When you use this object, the sources name is the steps key. the For more information, see filters Properties.aggregateFiltersThe array of filters applied on aggregate columns, which are fields where an aggregate function, such as average or sum, is applied to a measure column. Aggregate columns are defined in columns under sources. For more information, see filters Properties.ordersThe array of sort orders applied to data in a pivot table. An order can contain the following properties:nameThe column or group name used to apply the sort order.ascendingThe sort order applied to the data. Indicates whether to order the data in ascending order (true) or not (false).filtersThe filters used to sort a measure column in a pivot table and is applied on a dimension value in the pivoted group. For more information about sorting data in a pivot table, see Organize and Summarize Data in a Pivot Table.nullsThe sort order applied to null values in the data. To sort null values last, set nullsto lastTo sort null values first, set nullsto first.rowTotalsThe array of dimension groups to which the values of each row are rolled up. To calculate rowTotals, you must also include columnGroups for the data.columnTotalsThe array of dimension groups to which the values of each column are rolled up. If the query is a grain query, that is, all the columns are non-aggregate columns, or if the query is not grouped by any dimension columns, to calculate totals, set columnTotals to all .columnGroupsThe pivoted dimension group, which is the last-defined group. If the defined group is a compound date, such as Year-Month for order date, then include each date grain in columnGroups. For example, ["OrderDate_Year", "OrderDate_Month"].limitThe maximum number of results that the step can return. When you create an aggregateflex step, by default, CRM Analytics sets limit to 2,000. To return more results, set the limit attribute accordingly. The higher you increase the limit, the longer the query takes. When a limit isn’t set, Analytics returns up to 10,000 results. For more information, see filters Properties.Compact Form 2.0 Query Example"query": {   "sources": [     {         "columns": [           {             "field": ["sum", "Amount"],             "name": "A"           }         ],         "groups": [             "Product_Container",             "Order_priority"         ],         "filters": [           [             "Profit",             [16000],             "<",          ]         ],         "name": "SuperStoreSales"     },     {         "columns": [           {             "formula": "A*2",             "name": "B"           }         ],         "groups": [],         "filters": []       ]     },   ],   "sourceFilters": {     "SuperStoreSales" {         "filters": [           [             "Sales",             [               1,               100000             ],             ">=<="           ],           [             "Customer_Segment",             [               "Consumer",               "Corporate",             ],             "in"           ]         ]     }   },   "aggregateFilters": [     [         "A",         [10],         ">"     ]   ],   "orders": [     {         "name": "Product_Container",         "ascending": true,         "filters": [],         "nulls": "last"     },     {         "name": "Order_Priority",         "ascending": true,         "filters": [],         "nulls": "last"     }   ],   "rowTotals": ["Product_Container"],   "columnTotals": [     "Product_Container",     "Order_Priority"   ],   "columnGroups": ["Order_Priority"],   "limit": 2000 }For compact form (1.0), the query can contain the following properties.filtersThe filters to apply to the data. For more information, see filters Properties.groupsThe dimension to group by.limitThe maximum number of results that the step can return. When you create an aggregateflex step, by default, CRM Analytics sets limit to 2,000. To return more results, set the limit attribute accordingly. The higher you increase the limit, the longer the query takes. When a limit isn’t set, Analytics returns up to 10,000 results.NoteLimit only impacts the number of records returned for display. The limit doesn’t impact calculations across all records in the dataset. For instance, a query groups by Account Name and there are one million Account Names in a dataset. When the limit is 20, Analytics returns 20 records for display. But the summary row provides a total for the one million records.measuresThe measures returned by the query.NoteIf you provide an aggregate function for a measure, then the measure value must be a string, not an array.orderSort order (ascending or descending) of the first specified measure. To order the results in ascending order, set ascending to true. To order the results in descending order, set ascending to false. If you don’t want to impose a specific order, remove the entire "order" parameter.Compact-form (1.0) Query Example"query": {   "filters": [     [       "Account.Industry",       [         "Agriculture",         "Apparel",         "Banking",         "Biotechnology",         "Consulting",         "Education",         "Electronics",         "Energy",         "Engineering",         "Finance",         "Healthcare",         "Insurance",         "Manufacturing",         "Media",         "Retail",         "Technology",         "Telecommunications",         "Transportation",         "Utilities"       ],       "in"     ]   ],   "groups": [ "Account.Industry" ],   "measures": [     [       "avg",       "Amount"     ]   ],   "order": [     [       -1,       { "ascending": false }     ]   ] }For SAQL form, the query can contain the following propertiespigqlSpecify the SAQL query to retrieve data from a dataset. When you specify a SAQL query, you must specify the filters, limits, and ordering inside the pigql attribute. CRM Analytics ignores the following attributes if they are set under the query attribute: filters, limit, and order.measuresDefines the fields included as measures. When using a SAQL-form query, you must include each measure in this parameter and in the pigql parameter. You can change the UI label of a measure by setting the display option. "count", "*", null, {     "display": "% of total flights" }groupsDefines the dimension fields to group by. When using a SAQL-form query, you must specify the group-by dimension in this parameter and in the group property in the pigql parameter.SAQL-form Query Example"query": {   "pigql": "q = load "ServiceOpportunity3";              q = filter q by 'Account.Industry' in                  ["Agriculture", "Apparel", "Banking", "Biotechnology",                   "Consulting", "Education", "Electronics", "Energy",                   "Engineering", "Finance", "Healthcare", "Insurance",                   "Manufacturing", "Media", "Retail", "Technology",                   "Telecommunications", "Transportation", "Utilities"];              q = group q by 'Account.Industry';              q = foreach q generate 'Account.Industry' as 'Account.Industry',                                     count() as 'count';              q = order q by 'count' desc;              q = limit q 1000;",   "measures": [     [       "count",       "*",       "count"     ]   ],   "groups": [ "Account.Industry" ],   "measuresMap": {} }For more information about SAQL queries, see the Analytics SAQL Developer Guide |
| selectMode | Determines the selection interaction. The options for charts, tables, lists, and toggle selectors are: none, single, singlerequired, multi and multirequired.NoteselectMode doesn’t apply to number, values table, date, range, and global filter widgets. |
| start | The initial selections that are applied to the step when the dashboard first opens. |
| type | Step type. Set to aggregateflex.NoteIf you bind a step property for an aggregateflex step, you must use the correct bindings syntax. For more information about bindings, see the Analytics Bindings Developer Guide. |
| useGlobal | Indicates whether to apply global filters to this step (true) or not (false). If the step is in SAQL form, you must also set autoFilter to true to apply the global filters. By default, the global filter widget filters compact-form steps only. |
| visualizationParameters | Visualization details about the step. For more information, see visualizationParameters Properties. |

## aggregateflex Step

```

```

-   **[steps Properties for Compact Form and SAQL Form](atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_steps_form.htm)**
    The properties and JSON syntax in the query node of an aggregateflex step type vary based on whether the step is in compact form or SAQL form.

## Code Examples

```
"query": {
  "sources": [
    {
        "columns": [
          {
            "field": ["sum", "Amount"],
            "name": "A"
          }
        ],
        "groups": [
            "Product_Container",
            "Order_priority"
        ],
        "filters": [
          [
            "Profit",
            [16000],
            "<",
         ]
        ],
        "name": "SuperStoreSales"
    },
    {
        "columns": [
          {
            "formula": "A*2",
            "name": "B"
          }
        ],
        "groups": [],
        "filters": []
      ]
    },
  ],
  "sourceFilters": {
    "SuperStoreSales" {
        "filters": [
          [
            "Sales",
            [
              1,
              100000
            ],
            ">=<="
          ],
          [
            "Customer_Segment",
            [
              "Consumer",
              "Corporate",
            ],
            "in"
          ]
        ]
    }
  },
  "aggregateFilters": [
    [
        "A",
        [10],
        ">"
    ]
  ],
  "orders": [
    {
        "name": "Product_Container",
        "ascending": true,
        "filters": [],
        "nulls": "last"
    },
    {
        "name": "Order_Priority",
        "ascending": true,
        "filters": [],
        "nulls": "last"
    }
  ],
  "rowTotals": ["Product_Container"],
  "columnTotals": [
    "Product_Container",
    "Order_Priority"
  ],
  "columnGroups": ["Order_Priority"],
  "limit": 2000
}
```

```
"query": {
  "filters": [
    [
      "Account.Industry",
      [
        "Agriculture",
        "Apparel",
        "Banking",
        "Biotechnology",
        "Consulting",
        "Education",
        "Electronics",
        "Energy",
        "Engineering",
        "Finance",
        "Healthcare",
        "Insurance",
        "Manufacturing",
        "Media",
        "Retail",
        "Technology",
        "Telecommunications",
        "Transportation",
        "Utilities"
      ],
      "in"
    ]
  ],
  "groups": [ "Account.Industry" ],
  "measures": [
    [
      "avg",
      "Amount"
    ]
  ],
  "order": [
    [
      -1,
      { "ascending": false }
    ]
  ]
}
```

```
"count", "*", null, {
    "display": "% of total flights"
}
```

```
"query": {
  "pigql": "q = load "ServiceOpportunity3";

            q = filter q by 'Account.Industry' in 
                ["Agriculture", "Apparel", "Banking", "Biotechnology", 
                 "Consulting", "Education", "Electronics", "Energy", 
                 "Engineering", "Finance", "Healthcare", "Insurance", 
                 "Manufacturing", "Media", "Retail", "Technology", 
                 "Telecommunications", "Transportation", "Utilities"];

            q = group q by 'Account.Industry';

            q = foreach q generate 'Account.Industry' as 'Account.Industry', 
                                   count() as 'count';

            q = order q by 'count' desc;

            q = limit q 1000;",
  "measures": [
    [
      "count",
      "*",
      "count"
    ]
  ],
  "groups": [ "Account.Industry" ],
  "measuresMap": {}
}
```

```
"steps": {
            "Account_Owner_1": {
                "type": "aggregateflex",
                "query": {
                    "measures": [
                        [
                            "avg",
                            "Amount"
                        ]
                    ],
                    "groups": [
                        "Account_Owner"
                    ],
                    "order": [
                        [
                            "avg_Amount",
                            {
                                "ascending": false
                            }
                        ]
                    ]
                },
                "visualizationParameters": {
                    "options": {},
                    "type": "chart",
                    "parameters": {
                        "visualizationType": "hbar",
                        "autoFitMode": "keepLabels",
                        "theme": "wave",
                        "title": {
                            "label": "",
                            "fontSize": 14,
                            "subtitleLabel": "",
                            "subtitleFontSize": 11,
                            "align": "center"
                        },
                        "showValues": true,
                        "axisMode": "multi",
                        "binValues": false,
                        "bins": {
                            "breakpoints": {
                                "low": 0,
                                "high": 100
                            },
                            "bands": {
                                "low": {
                                    "label": "",
                                    "color": "#B22222"
                                },
                                "medium": {
                                    "label": "",
                                    "color": "#ffa500"
                                },
                                "high": {
                                    "label": "",
                                    "color": "#008000"
                                }
                            }
                        },
                        "dimensionAxis": {
                            "showAxis": true,
                            "showTitle": true,
                            "title": "",
                            "customSize": "auto",
                            "icons": {
                                "useIcons": false,
                                "iconProps": {
                                    "column": "",
                                    "fit": "cover",
                                    "type": "round"
                                }
                            }
                        },
                        "measureAxis1": {
                            "sqrtScale": false,
                            "showAxis": true,
                            "customDomain": {
                                "showDomain": false
                            },
                            "showTitle": true,
                            "title": ""
                        },
                        "measureAxis2": {
                            "sqrtScale": false,
                            "showAxis": true,
                            "customDomain": {
                                "showDomain": false
                            },
                            "showTitle": true,
                            "title": ""
                        },
                        "legend": {
                            "show": true,
                            "showHeader": true,
                            "inside": false,
                            "descOrder": false,
                            "position": "right-top",
                            "customSize": "auto"
                        },
                        "tooltip": {
                            "customizeTooltip": false,
                            "showDimensions": true,
                            "dimensions": "",
                            "showMeasures": true,
                            "measures": "",
                            "showPercentage": true,
                            "showNullValues": true,
                            "showBinLabel": true
                        },
                        "trellis": {
                            "enable": false,
                            "showGridLines": true,
                            "flipLabels": false,
                            "type": "x",
                            "chartsPerLine": 4,
                            "size": [
                                100,
                                100
                            ]
                        },
                        "applyConditionalFormatting": true,
                        "showActionMenu": true,
                        "columnMap": {
                            "trellis": [],
                            "plots": [
                                "avg_Amount"
                            ],
                            "dimensionAxis": [
                                "Account_Owner"
                            ]
                        }
                    }
                },
                "datasets": [
                    {
                        "id": "0FbB00000000xHDKAY",
                        "name": "DTC_Opportunity_SAMPLE",
                        "label": "DTC Opportunity",
                        "url": "/services/data/v48.0/wave/datasets/0FbB00000000xHDKAY"
                    }
                ],
                "useGlobal": true,
                "isGlobal": false,
                "label": "Account_Owner_1",
                "broadcastFacet": true,
                "receiveFacetSource": {
                    "mode": "all",
                    "steps": []
                },
                "selectMode": "single"
            }
        }
```

## Related Topics

- sources Properties (atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_steps_sources.htm)
- filters Properties (atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_steps_filters.htm)
- visualizationParameters Properties (atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_steps_visualizationParameters_properties.htm)
- steps Properties for Compact Form and SAQL Form (atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_steps_form.htm)
