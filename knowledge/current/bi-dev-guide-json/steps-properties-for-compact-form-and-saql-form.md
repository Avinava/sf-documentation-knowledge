---
title: "steps Properties for Compact
            Form and SAQL Form"
domain: bi-dev-guide-json
topic: steps-properties-for-compact-form-and-saql-form
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.278Z
estimatedTokens: 407
keywords: [steps, Compact, Form, SAQL, JSON, query, node, aggregateflex, step, vary, whether, Compact-Form, SAQL-Form]
---

# steps Properties for Compact
            Form and SAQL Form

> The properties and JSON syntax in the query node
        of an aggregateflex step type vary based on whether the
        step is in compact form or SAQL form.

# steps Properties for Compact Form and SAQL Form

The properties and JSON syntax in the query node of an aggregateflex step type vary based on whether the step is in compact form or SAQL form.

These examples display the aggregateflexstep type in compact form and in SAQL form. For an explanation of the aggregateflex step type and its properties, see [aggregateflex Step Type Properties](atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_steps_types_aggregateflex.htm "Use the aggregateflex step type to perform aggregate queries on a Analytics dataset. An aggregate query summarizes rows, like returning one row per grouping. For example, this step type can return the total amount per sales rep.")

## Compact-Form aggregateflex Step

```

```

## SAQL-Form aggregateflex Step

When the step is in SAQL form, notice how each group and measure are defined in the groups and measures properties, respectively, and also in the pigql property. Other parts of the query—like filters, limits, and order—only need to be defined one time in the pigql property. You specify the compact form elements of "groups" and "measures" so that the associated chart widget can render the correct projections.

In the following sample step, notice that the 'sum\_Amount' and 'sum\_quantity' projections in the pigql property are referenced in "measures" as \[\[ "count", "\*", "sum\_Amount" \], \[ "count", "\*", "sum\_quantity" \]\]. Measure projections in the pigql property always include the aggregation, underscore (\_), and the name of the measure ('sum\_Amount') so that they can be referenced in the compact form.

```

```

## Code Examples

```
"steps": {
            "all_Amount_1": {
                "type": "aggregateflex",
                "query": {
                    "measures": [
                        [
                            "avg",
                            "Amount"
                        ]
                    ],
                    "groups": [
                        "Account_Name"
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
                                "Account_Name"
                            ]
                        }
                    }
                },
                "datasets": [
                    {
                        "id": "0Fb6g000000HTE1CAO",
                        "name": "DTC_Opportunity_SAMPLE",
                        "label": "DTC Opportunity",
                        "url": "/services/data/v48.0/wave/datasets/0Fb6g000000HTE1CAO"
                    }
                ],
                "useGlobal": true,
                "isGlobal": false,
                "label": "all_Amount_1",
                "broadcastFacet": true,
                "receiveFacetSource": {
                    "mode": "all",
                    "steps": []
                },
                "selectMode": "single"
            },
```

```
"steps": {
    "Product_StageName_2": {
        "type": "aggregateflex",
        "visualizationParameters": {
            "options": {}
        },
        "query": {
            "pigql": "q = load "Flexy_Sales";

                      q = group q by ('Product', 'StageName');

                      q = foreach q generate 'Product' as 'Product', 
                                             'StageName' as 'StageName', 
                                             sum('Amount') as 'sum_Amount', 
                                             sum('quantity') as 'sum_quantity';

                      q = filter q by 'sum_Amount' >= 14550720 && 'sum_Amount' <= 58807698;

                      q = order q by 'sum_Amount' desc;
q = limit q 10000;",
            "measures": [
                [
                    "count",
                    "*",
                    "sum_Amount"
                ],
                [
                    "count",
                    "*",
                    "sum_quantity"
                ]
            ],
            "groups": [
                "Product",
                "StageName"
            ]
        },
        "broadcastFacet": true,
        "receiveFacetSource": {
            "mode": "all",
            "steps": []
        },
        "useGlobal": true,
        "isGlobal": false,
        "datasets": [{
            "name": "Flexy_Sales",
            "url": "/services/data/v38.0/wave/datasets/0FbB00000000q5gKAA",
            "id": "0FbB00000000q5gKAA"
        }]
    }
}
```

## Related Topics

- aggregateflex Step Type Properties (atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_steps_types_aggregateflex.htm)
