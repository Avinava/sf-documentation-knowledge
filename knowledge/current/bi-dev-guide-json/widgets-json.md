---
title: "widgets JSON"
domain: bi-dev-guide-json
topic: widgets-json
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:02.344Z
estimatedTokens: 144
keywords: [widgets, JSON, appear, dashboard, widget]
---

# widgets JSON

> The widgets section defines the widgets that
        appear in the dashboard. Each widget has a name.

# widgets JSON

The widgets section defines the widgets that appear in the dashboard. Each widget has a name.

## Example

```

```

-   **[widget Properties](atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_widgets_parameters.htm)**
    The widgets key defines all widgets that are available in the dashboard. It contains a separate node for each widget. Each widget appears in all layouts to which it’s added. The properties available for each widget depend on the widget type. For example, a chart widget has the legend property, but a text widget doesn’t.

## Code Examples

```
"widgets": {
	"text_1": {
		"parameters": {
			"fontSize": 20,
			"text": "Grouping",
			"textAlignment": "center",
			"textColor": "#091A3E"
		},
		"type": "text"
	},
	"pillbox_1": {
		"parameters": {
			"compact": false,
			"exploreLink": false,
			"step": "StaticSAQLMinRanges"
		},
		"type": "pillbox"
	},
	"chart_1": {
		"parameters": {
			"autoFitMode": "fit",
			"showValues": true,
			"legend": {
				"showHeader": true,
				"show": true,
				"position": "right-top",
				"inside": false
			},
			"axisMode": "multi",
			"visualizationType": "hbar",
			"exploreLink": true,
			"title": {
				"label": "",
				"align": "center",
				"subtitleLabel": ""
			},
			"trellis": {
				"enable": false,
				"type": "x",
				"chartsPerLine": 4
			},
			"measureAxis2": {
				"showTitle": true,
				"showAxis": true,
				"title": ""
			},
			"measureAxis1": {
				"showTitle": true,
				"showAxis": true,
				"title": ""
			},
			"theme": "wave",
			"step": "Account_BillingCount_1",
			"dimensionAxis": {
				"showTitle": true,
				"showAxis": true,
				"title": ""
			}
		},
		"type": "chart"
	}
}
```

## Related Topics

- widget Properties (atlas.en-us.bi_dev_guide_json.meta/bi_dev_guide_json/bi_dbjson_widgets_parameters.htm)
