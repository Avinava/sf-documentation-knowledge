---
title: "saql Step Type
        Properties"
domain: bi-dev-guide-json
topic: saql-step-type-properties
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.322Z
estimatedTokens: 1082
keywords: [saql, Step, special, cases, querying, Analytics, dataset, write, custom, query, derived, specify, dimensions, groupings, bind]
---

# saql Step Type
        Properties

> Use the saql step type for special cases when
        querying a Analytics dataset. With this step type, you can write a custom SAQL query to
        create derived fields in a values table. You can specify dimensions without groupings. Also,
        you can bind the dataset name or entire query. For example, you can bind this step type to a
        static step that provides different SAQL queries or datasets based on a
        selection.

# saql Step Type Properties

Use the saql step type for special cases when querying a Analytics dataset. With this step type, you can write a custom SAQL query to create derived fields in a values table. You can specify dimensions without groupings. Also, you can bind the dataset name or entire query. For example, you can bind this step type to a static step that provides different SAQL queries or datasets based on a selection.

| Field Name | Description |
| --- | --- |
| type | Step type. Set to saql. |
| label | Step label, which is primarily used for display in the dashboard designer user interface. |
| query | The SAQL query used to retrieve results. For more information about SAQL queries, see Analytics SAQL Developer Guide.When you create a saql-type step, by default, no limit is set in the query. When a limit isn’t set, a step can return up to 10,000 results. To return more results, set the limit attribute accordingly. The higher you increase the limit, the longer the query takes.NoteLimit only impacts the number of records returned for display. The limit doesn’t impact calculations across all records in the dataset. For instance, a query groups by Account Name and there are one million Account Names in a dataset. When the limit is 20, Analytics returns 20 records for display. But the summary row provides a total for the one million records.You can bind a saql step type to dynamically set the dataset used in the query or change the entire query based on a selection in another step. For example, you can create a toggle based on a static step that allows the dashboard viewer to select a query. Each toggle option contains a valid SAQL query. Each query can be based on different datasets. (See the JSON example at the end of this section.) |
| broadcastFacet | Controls whether the step’s selections are broadcasted as facets. Faceting is when a selection in a widget filters other steps in the dashboard. Default is true. |
| receiveFacetSource | Controls whether the step in the receiving query listens for broadcasted facets and applies them as filters. The mode can be “all”, “none”, “include”, or “exclude”. Use steps to list which steps to include or exclude. Default is all. |
| useGlobal | Indicates whether to apply global filters to this step (true) or not (false). If the step is in SAQL form, you must also set autoFilter to true to apply the global filters. By default, the global filter widget filters compact-form steps only. |
| selectMode | Determines the selection interaction. The options for charts are: none, single, and singlerequired. The options for list, range, and toggle selectors are: single, singlerequired, multi, and multirequired.NoteselectMode doesn’t apply to number, values table, compare table, date, and global filter widgets. |
| start | The initial selections that are applied to the step when the dashboard first opens.NoteA widget with a saql-type step can return up to 10,000 results, by default. If Analytics doesn’t find the initial value in those results, it ignores this setting.Single-selection example:"start": [ "06 - Proposal/Price Quote" ]Multi-selection example:"start": [     "06 - Proposal/Price Quote",     "01 - Prospecting" ] |
| strings | Flags the specified fields as non-grouping dimensions. For example, you can flag a field as a dimension for a values table in which no groupings are allowed. If you use a binding to determine the field, specify the binding here as well. |
| numbers | Flags the specified fields as measures. If you use a binding to determine the field, specify the binding here as well. |
| groups | Flags the specified fields as groupings. For example, you can flag a field as a grouping for a pivot table or chart. If you use a binding to determine the field, specify the binding here as well. |

## saql Step

```

```

## saql Step with a Bound Query

```

```

The static\_1 step looks like this:

```

```

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=bi_dev_guide_json)

#### Tip

Every dataset referenced in a binding of a saql step must be referenced by another step in the dashboard. If not, Analytics removes the dataset from the datasets attribute in the dashboard JSON. As a result, widgets based on the saql step display an error because it can’t find the dataset.

## Code Examples

```
"start": [
    "06 - Proposal/Price Quote",
    "01 - Prospecting"
]
```

```
"steps": {
            "Amount_1": {
                "type": "saql",
                "query": "q = load "DTC_Opportunity_SAMPLE";
q = group q by 'Account_Name';
q = foreach q generate 'Account_Name' as 'Account_Name', count() as 'count';
q = order q by 'Account_Name' desc;
q = limit q 1000;",
                "useGlobal": true,
                "numbers": [],
                "groups": [],
                "strings": [],
                "visualizationParameters": {
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
                        "showActionMenu": true
                    }
                },
                "label": "Amount_1",
                "selectMode": "single",
                "broadcastFacet": true,
                "receiveFacetSource": {
                    "mode": "all",
                    "steps": []
                }
            }
        },
```

```
"query": "{{cell(static_1.selection, 0, "query").asString()"
```

```
values: [
{query: "q = load "opp"; ..."}
{query: "q = load "account"; ..."}
]
```
