---
title: "CRM Analytics Dashboard JSON Example"
domain: bi-dev-guide-json
topic: crm-analytics-dashboard-json-example
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.341Z
estimatedTokens: 257
keywords: [CRM, Analytics, Dashboard, JSON, multiple, levels, Review, sample, provided, basic, structure]
---

# CRM Analytics Dashboard JSON Example

> The JSON for each CRM Analytics dashboard contains multiple levels of properties.
        Review the sample JSON provided in this section to learn about the basic JSON structure of a
        dashboard.

# CRM Analytics Dashboard JSON Example

The JSON for each CRM Analytics dashboard contains multiple levels of properties. Review the sample JSON provided in this section to learn about the basic JSON structure of a dashboard.

## Example

The sample JSON defines this dashboard.

![Sample dashboard created in dashboard designer.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_dashboard_wave_designer_dashboard_sample.png&folder=bi_dev_guide_json)

The Account Analysis dashboard consists of the following objects.

-   Layouts:
    -   Default, which has pages:
        -   Page 1
        -   Page 2
    -   Mobile
-   Widgets:
    -   Values table table\_1 based on step lens\_1 (Not shown in the screenshot because it exists only on Page 2.)
    -   Global filter panel filterpanel\_1
    -   Link link\_1
    -   Horizontal Bar Chart chart\_1 based on step Amount\_by\_Acct\_Owner\_1
-   Steps:
    -   Amount\_by\_Acct\_Owner\_1
    -   Account\_Owner\_Name\_1
    -   lens\_1
-   Dataset 0FbB000000017QxKAI

```

```

## Code Examples

```
{
    "label": "Account Analysis",
    "mobileDisabled": false,
    "state": {
        "dataSourceLinks": [],
        "filters": [
            {
                "dataset": {
                    "id": "0FbB000000017QxKAI",
                    "name": "opportunity",
                    "url": "/services/data/v41.0/wave/datasets/0FbB000000017QxKAI"
                },
                "fields": [
                    "Account.Owner.Name"
                ],
                "label": "Account.Owner.Name",
                "locked": false,
                "operator": "in",
                "value": [
                    "Annie Kelly",
                    "Bill Johnson",
                    "Chan Lao",
                    "Ellen Bruxton",
                    "Erin Baker",
                    "Frank Tom",
                    "Jason Hunt",
                    "Jennifer McCarthy",
                    "Leslie Pham",
                    "Michelle Nguyen",
                    "Nathan Sinha",
                    "Norman Truman",
                    "Priya Anand",
                    "Rob Wilkens",
                    "Sam Gunderson",
                    "Valerie Thom",
                    "Walker Chan",
                    "Wang Lee"
                ]
            },
            {
                "dataset": {
                    "id": "0FbB000000017QxKAI",
                    "name": "opportunity",
                    "url": "/services/data/v41.0/wave/datasets/0FbB000000017QxKAI"
                },
                "fields": [
                    "Close Date"
                ],
                "label": "Close Date",
                "locked": false,
                "operator": ">=<=",
                "value": [
                    [
                        1451635200000,
                        1564642800000
                    ]
                ]
            }
        ],
        "gridLayouts": [
            {
                "name": "Default",
                "numColumns": 9,
                "pages": [
                    {
                        "label": "Page 1",
                        "name": "41f040d6-48a6-4dc7-9166-eb985df7e9d8",
                        "widgets": [
                            {
                                "colspan": 9,
                                "column": 0,
                                "name": "filterpanel_1",
                                "row": 0,
                                "rowspan": 3,
                                "widgetStyle": {
                                    "borderEdges": []
                                }
                            },
                            {
                                "colspan": 9,
                                "column": 0,
                                "name": "chart_1",
                                "row": 3,
                                "rowspan": 5,
                                "widgetStyle": {
                                    "borderEdges": []
                                }
                            },
                            {
                                "colspan": 2,
                                "column": 0,
                                "name": "link_1",
                                "row": 8,
                                "rowspan": 1,
                                "widgetStyle": {
                                    "borderEdges": []
                                }
                            }
                        ]
                    },
                    {
                        "label": "Page 2",
                        "name": "ac750443-1729-47fb-8d60-a35703076bf7",
                        "widgets": [
                            {
                                "colspan": 9,
                                "column": 0,
                                "name": "filterpanel_1",
                                "row": 0,
                                "rowspan": 3,
                                "widgetStyle": {
                                    "borderEdges": []
                                }
                            },
                            {
                                "colspan": 9,
                                "column": 0,
                                "name": "table_1",
                                "row": 3,
                                "rowspan": 7,
                                "widgetStyle": {
                                    "borderEdges": []
                                }
                            }
                        ]
                    }
                ],
                "rowHeight": "normal",
                "selectors": [],
                "style": {
                    "alignmentX": "left",
                    "alignmentY": "top",
                    "backgroundColor": "#44A2F5",
                    "cellSpacingX": 4,
                    "cellSpacingY": 4,
                    "fit": "original",
                    "gutterColor": "#A3B8CC"
                },
                "version": 1
            },
            {
                "name": "Mobile",
                "numColumns": 2,
                "pages": [
                    {
                        "label": "Page 1",
                        "name": "41f040d6-48a6-4dc7-9166-eb985df7e9d8",
                        "widgets": [
                            {
                                "colspan": 2,
                                "column": 0,
                                "name": "filterpanel_1",
                                "row": 0,
                                "rowspan": 2,
                                "widgetStyle": {
                                    "borderEdges": []
                                }
                            },
                            {
                                "colspan": 2,
                                "column": 0,
                                "name": "chart_1",
                                "row": 2,
                                "rowspan": 10,
                                "widgetStyle": {
                                    "borderEdges": []
                                }
                            }
                        ]
                    }
                ],
                "rowHeight": "normal",
                "selectors": [
                    "maxWidth(599)"
                ],
                "style": {
                    "alignmentX": "left",
                    "alignmentY": "top",
                    "backgroundColor": "#2EC2BA",
                    "cellSpacingX": 4,
                    "cellSpacingY": 4,
                    "fit": "original",
                    "gutterColor": "#091A3E"
                },
                "version": 1
            }
        ],
        "layouts": [],
        "steps": {
            "Amount_by_Acct_Owner_1": {
                "broadcastFacet": true,
                "datasets": [
                    {
                        "id": "0FbB000000017QxKAI",
                        "label": "Opportunities",
                        "name": "opportunity",
                        "url": "/services/data/v41.0/wave/datasets/0FbB000000017QxKAI"
                    }
                ],
                "isGlobal": false,
                "label": "Amount by Acct Owner",
                "query": {
                    "measures": [
                        [
                            "count",
                            "*"
                        ]
                    ],
                    "groups": [
                        "Account.Owner.Name"
                    ],
                    "order": [
                        [
                            "count",
                            {
                                "ascending": false
                            }
                        ]
                    ]
                },
                "receiveFacet": true,
                "selectMode": "multi",
                "type": "aggregateflex",
                "useGlobal": true,
                "visualizationParameters": {
                    "options": {},
                    "parameters": {
                        "autoFitMode": "none",
                        "showValues": true,
                        "bins": {
                            "breakpoints": {
                                "high": 100,
                                "low": 0
                            },
                            "bands": {
                                "high": {
                                    "color": "#008000",
                                    "label": ""
                                },
                                "low": {
                                    "color": "#B22222",
                                    "label": ""
                                },
                                "medium": {
                                    "color": "#ffa500",
                                    "label": ""
                                }
                            }
                        },
                        "legend": {
                            "showHeader": true,
                            "show": true,
                            "customSize": "auto",
                            "position": "right-top",
                            "inside": false
                        },
                        "axisMode": "multi",
                        "tooltip": {
                            "showBinLabel": true,
                            "measures": "",
                            "showPercentage": false,
                            "showDimensions": true,
                            "showMeasures": true,
                            "customizeTooltip": false,
                            "dimensions": ""
                        },
                        "visualizationType": "hbar",
                        "title": {
                            "fontSize": 14,
                            "subtitleFontSize": 11,
                            "label": "",
                            "align": "center",
                            "subtitleLabel": ""
                        },
                        "binValues": false,
                        "trellis": {
                            "flipLabels": false,
                            "showGridLines": true,
                            "size": [
                                100,
                                100
                            ],
                            "enable": false,
                            "type": "x",
                            "chartsPerLine": 4
                        },
                        "measureAxis2": {
                            "sqrtScale": false,
                            "showTitle": true,
                            "showAxis": true,
                            "title": "",
                            "customDomain": {
                                "showDomain": false
                            }
                        },
                        "measureAxis1": {
                            "sqrtScale": false,
                            "showTitle": true,
                            "showAxis": true,
                            "title": "",
                            "customDomain": {
                                "showDomain": false
                            }
                        },
                        "theme": "wave",
                        "dimensionAxis": {
                            "showTitle": true,
                            "customSize": "auto",
                            "showAxis": true,
                            "title": "",
                            "icons": {
                                "useIcons": false,
                                "iconProps": {
                                    "fit": "cover",
                                    "column": "",
                                    "type": "round"
                                }
                            }
                        }
                    },
                    "type": "chart",
                    "visualizationType": "hbar"
                }
            },
            "Account_Owner_Name_1": {
                "broadcastFacet": true,
                "datasets": [
                    {
                        "id": "0FbB000000017QxKAI",
                        "label": "Opportunities",
                        "name": "opportunity",
                        "url": "/services/data/v41.0/wave/datasets/0FbB000000017QxKAI"
                    }
                ],
                "isGlobal": false,
                "query": {
                    "measures": [
                        [
                            "count",
                            "*"
                        ],
                        [
                            "avg",
                            "Amount"
                        ]
                    ],
                    "groups": [
                        "Account.Owner.Name"
                    ],
                    "order": [
                        [
                            "count",
                            {
                                "ascending": false
                            }
                        ]
                    ]
                },
                "receiveFacet": true,
                "selectMode": "single",
                "type": "aggregateflex",
                "useGlobal": true,
                "visualizationParameters": {
                    "parameters": {
                        "autoFitMode": "none",
                        "showPoints": false,
                        "legend": {
                            "showHeader": true,
                            "show": true,
                            "customSize": "auto",
                            "position": "right-top",
                            "inside": false
                        },
                        "axisMode": "multi",
                        "tooltip": {
                            "showBinLabel": true,
                            "measures": "",
                            "showPercentage": false,
                            "showDimensions": true,
                            "showMeasures": true,
                            "customizeTooltip": false,
                            "dimensions": ""
                        },
                        "visualizationType": "line",
                        "dashLine": {
                            "measures": "",
                            "showDashLine": false
                        },
                        "title": {
                            "fontSize": 14,
                            "subtitleFontSize": 11,
                            "label": "",
                            "align": "center",
                            "subtitleLabel": ""
                        },
                        "trellis": {
                            "flipLabels": false,
                            "showGridLines": true,
                            "size": [
                                100,
                                100
                            ],
                            "enable": false,
                            "type": "x",
                            "chartsPerLine": 4
                        },
                        "fillArea": true,
                        "showZero": true,
                        "measureAxis2": {
                            "sqrtScale": false,
                            "showTitle": true,
                            "showAxis": true,
                            "title": "",
                            "customDomain": {
                                "showDomain": false
                            }
                        },
                        "measureAxis1": {
                            "sqrtScale": false,
                            "showTitle": true,
                            "showAxis": true,
                            "title": "",
                            "customDomain": {
                                "showDomain": false
                            }
                        },
                        "theme": "wave",
                        "dimensionAxis": {
                            "showTitle": true,
                            "customSize": "auto",
                            "showAxis": true,
                            "title": "",
                            "icons": {
                                "useIcons": false,
                                "iconProps": {
                                    "fit": "cover",
                                    "column": "",
                                    "type": "round"
                                }
                            }
                        },
                        "drawArea": {
                            "measure": "",
                            "showDrawArea": false,
                            "bounding1": "",
                            "bounding2": ""
                        }
                    },
                    "type": "chart",
                    "options": {}
                }
            },
            "lens_1": {
                "datasets": [
                    {
                        "id": "0FbB000000017QxKAI",
                        "label": "Opportunities",
                        "name": "opportunity",
                        "url": "/services/data/v41.0/wave/datasets/0FbB000000017QxKAI"
                    }
                ],
                "isFacet": true,
                "isGlobal": false,
                "label": "lens_1",
                "query": {
                    "values": [
                        "Name",
                        "Owner.Name",
                        "StageName",
                        "Amount",
                        "CloseDate",
                        "ForecastCategoryName",
                        "Account.Owner.Name"
                    ]
                },
                "selectMode": "none",
                "type": "grain",
                "useGlobal": true,
                "visualizationParameters": {
                    "options": {},
                    "parameters": {
                        "borderColor": "#e0e5ee",
                        "borderWidth": 1,
                        "cell": {
                            "backgroundColor": "#ffffff",
                            "fontColor": "#16325c",
                            "fontSize": 12
                        },
                        "columns": [],
                        "customBulkActions": [],
                        "header": {
                            "backgroundColor": "#f4f6f9",
                            "fontColor": "#16325c",
                            "fontSize": 12
                        },
                        "innerMajorBorderColor": "#a8b7c7",
                        "innerMinorBorderColor": "#e0e5ee",
                        "maxColumnWidth": 300,
                        "minColumnWidth": 40,
                        "mode": "variable",
                        "numberOfLines": 1,
                        "totals": true,
                        "verticalPadding": 8
                    },
                    "type": "table",
                    "visualizationType": "valuestable"
                }
            }
        },
        "widgetStyle": {
            "backgroundColor": "#FFFFFF",
            "borderColor": "#E6ECF2",
            "borderEdges": [],
            "borderRadius": 0,
            "borderWidth": 1
        },
        "widgets": {
            "table_1": {
                "parameters": {
                    "columnProperties": {
                         "Amount": {
                           "type": "bar",
                           "parameters": {}
                          }
                    }
                    "borderColor": "#e0e5ee",
                    "borderWidth": 1,
                    "cell": {
                        "backgroundColor": "#ffffff",
                        "fontColor": "#16325c",
                        "fontSize": 12
                    },
                    "columns": [],
                    "customBulkActions": [],
                    "exploreLink": true,
                    "header": {
                        "backgroundColor": "#f4f6f9",
                        "fontColor": "#16325c",
                        "fontSize": 12
                    },
                    "innerMajorBorderColor": "#a8b7c7",
                    "innerMinorBorderColor": "#e0e5ee",
                    "maxColumnWidth": 300,
                    "minColumnWidth": 40,
                    "mode": "variable",
                    "numberOfLines": 1,
                    "showRowIndexColumn": true,
                    "step": "lens_1",
                    "totals": true,
                    "verticalPadding": 8,
                    "evenRowColor": null,
                    "oddRowColor": null
                },
                "type": "table"
            },
            "filterpanel_1": {
                "parameters": {
                    "filterItemOptions": {
                        "backgroundColor": "#FFFFFF",
                        "borderColor": "#E6ECF2",
                        "borderRadius": 4,
                        "propertyColor": "#54698D",
                        "valueColor": "#16325C",
                        "borderWidth": 1
                    },
                    "itemsPerRow": 2,
                    "title": {
                        "separatorColor": "#E6ECF2",
                        "text": {
                            "align": "left",
                            "color": "#091A3E",
                            "fontSize": 16,
                            "label": "Filters"
                        },
                        "visible": true
                    }
                },
                "type": "filterpanel"
            },
            "link_1": {
                "parameters": {
                    "destinationLink": {
                        "name": "ac750443-1729-47fb-8d60-a35703076bf7"
                    },
                    "destinationType": "page",
                    "fontSize": 12,
                    "includeState": false,
                    "text": "Opp Details",
                    "textAlignment": "center",
                    "textColor": "#44A2F5"
                },
                "type": "link"
            },
            "chart_1": {
                "parameters": {
                    "autoFitMode": "none",
                    "showValues": true,
                    "bins": {
                        "breakpoints": {
                            "high": 100,
                            "low": 0
                        },
                        "bands": {
                            "high": {
                                "color": "#008000",
                                "label": ""
                            },
                            "low": {
                                "color": "#B22222",
                                "label": ""
                            },
                            "medium": {
                                "color": "#ffa500",
                                "label": ""
                            }
                        }
                    },
                    "legend": {
                        "showHeader": true,
                        "show": true,
                        "customSize": "auto",
                        "position": "right-top",
                        "inside": false
                    },
                    "axisMode": "multi",
                    "tooltip": {
                        "showBinLabel": true,
                        "measures": "",
                        "showPercentage": false,
                        "showDimensions": true,
                        "showMeasures": true,
                        "customizeTooltip": false,
                        "dimensions": ""
                    },
                    "visualizationType": "hbar",
                    "exploreLink": true,
                    "title": {
                        "fontSize": 14,
                        "subtitleFontSize": 11,
                        "label": "",
                        "align": "center",
                        "subtitleLabel": ""
                    },
                    "binValues": false,
                    "trellis": {
                        "flipLabels": false,
                        "showGridLines": true,
                        "size": [
                            100,
                            100
                        ],
                        "enable": false,
                        "type": "x",
                        "chartsPerLine": 4
                    },
                    "measureAxis2": {
                        "sqrtScale": false,
                        "showTitle": true,
                        "showAxis": true,
                        "title": "",
                        "customDomain": {
                            "showDomain": false
                        }
                    },
                    "measureAxis1": {
                        "sqrtScale": false,
                        "showTitle": true,
                        "showAxis": true,
                        "title": "",
                        "customDomain": {
                            "showDomain": false
                        }
                    },
                    "theme": "wave",
                    "step": "Amount_by_Acct_Owner_1",
                    "dimensionAxis": {
                        "showTitle": true,
                        "customSize": "auto",
                        "showAxis": true,
                        "title": "",
                        "icons": {
                            "useIcons": false,
                            "iconProps": {
                                "fit": "cover",
                                "column": "",
                                "type": "round"
                            }
                        }
                    }
                },
                "type": "chart"
            }
        }
    },
    "datasets": [
        {
            "id": "0FbB000000017QxKAI",
            "label": "Opportunities",
            "name": "opportunity",
            "url": "/services/data/v41.0/wave/datasets/0FbB000000017QxKAI"
        }
    ]
}
```
