---
title: "gridLayouts JSON"
domain: bi-dev-guide-json
topic: gridlayouts-json
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:02.251Z
estimatedTokens: 213
keywords: [gridLayouts, JSON, layouts, built, dashboard]
---

# gridLayouts JSON

> The gridLayouts section defines all layouts built
    for the dashboard.

# gridLayouts JSON

The gridLayouts section defines all layouts built for the dashboard.

For more information about layouts for CRM Analytics dashboards, see [Generate Unique Dashboard Layouts for Different Devices](https://help.salesforce.com/apex/HTViewHelpDoc?id=bi_dashboard_layout_select_flex.htm&language=en_US "HTML (New Window)"). .

## Example

```

```

-   **[gridLayouts Properties](atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_gridlayoutProperties.htm)**
    The gridLayouts key defines all layouts for the dashboard. It contains a separate node for each layout. Each layout has properties that provide information about the devices that can use the layout and the placement of each widget in the layout. It also contains dashboard properties, like cell spacing in the grid and the dashboard’s background color or image.

## Code Examples

```
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
]
```

## Related Topics

- gridLayouts Properties (atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_gridlayoutProperties.htm)
