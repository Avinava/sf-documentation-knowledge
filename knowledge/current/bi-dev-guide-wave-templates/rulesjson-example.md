---
title: "rules.json Example"
domain: bi-dev-guide-wave-templates
topic: rulesjson-example
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.630Z
estimatedTokens: 96
keywords: [rules.json, Refer, file]
---

# rules.json Example

> Refer to this example of the rules.json
  file.

# rules.json Example

Refer to this example of the rules.json file.

## Example

```

```

The corresponding dashboardOne.json file that uses the above rules files looks like:

```

```

When the rules are applied to the dashboard, the chart\_1 widget will have a chartType of “pie” and the “pos” will be updated to w=501, y=41, h=121, and x=51. The chart\_2 widget will be removed.

## Code Examples

```
{  
   "constants":[  
      {  
         "name":"ChartType",
         "value":"pie"            
      }       
   ],
   "rules":[  
      {  
         "name":"rule1",
         "appliesTo":[  
            "type":"dashboard",
            "name":"dashboardOne",

         ],
         "actions":[  
            {  
               "action":"put",
               "description":"Put a section back in, but with different attributes",
               "path":"$.state.widgets.chart_1",
               "key":"pos",
               "value":{  
                  "w":"501",
                  "y":"41",
                  "h":"121",
                  "x":"51"
               }
            },
            {  
               "action":"delete",
               "description":"Delete a section",
               "path":"$.state.widgets.chart_2"
            }
         ]
      }
   ]
```

```
{
    "_type": "dashboardTemplate",
    "name": "Dashboard From Template With Rules",
    "edgemarts": {
        "${Variables.Dataset1.datasetAlias}": {
            "_type": "edgemart",
            "_uid": "${Variables.Dataset1.datasetId}"
        },
        "${Variables.Dataset2.datasetAlias}": {
            "_type": "edgemart",
            "_uid": "${Variables.Dataset2.datasetId}"
        }
    },
    "folder": {
        "_type": "folder",
        "_uid": "${App.Folder.Id}"
    },
    "tags": [

    ],
    "state": {
        "widgets": {
            "chart_1": {
                "params": {
                    "chartType": "${Constants.ChartType}",
                    "minColumnWidth": 30,
                    "maxColumnWidth": 200,
                    "legend": false,
                    "selectMode": "single",
                    "sqrt": false,
                    "legendHideHeader": false,
                    "legendWidth": 145,
                    "step": "step_1"
                },
                "type": "ChartWidget",
                "pos": {
                    "w": "500",
                    "y": 60,
                    "h": "120",
                    "x": 40
                }
            },
            "chart_2": {
                "params": {
                    "chartType": "${Constants.ChartType}",
                    "minColumnWidth": 30,
                    "maxColumnWidth": 200,
                    "legend": false,
                    "selectMode": "single",
                    "sqrt": false,
                    "legendHideHeader": false,
                    "legendWidth": 145,
                    "step": "step_2"
                },
                "type": "ChartWidget",data
                "pos": {
                    "w": "500",
                    "y": 190,
                    "h": "120",
                    "x": 40
                }
            }
        },
        "steps": {
            "step_1": {
                "isFacet": true,
                "start": null,
                "query": {
                    "measures": [
                        [
                            "count",
                            "*"
                        ]
                    ]
                },
                "selectMode": "single",
                "useGlobal": true,
                "em": "${Variables.Dataset1.datasetId}",
                "type": "aggregate",
                "isGlobal": false
            },
            "step_2": {
                "isFacet": true,
                "start": null,
                "query": {
                    "measures": [
                        [
                            "count",
                            "*"
                        ]
                    ]
                },
                "selectMode": "single",
                "useGlobal": true,
                "em": "${Variables.Dataset2.datasetId}",
                "type": "aggregate",
                "isGlobal": false
            }
        },
        "type": "hbar"
    }
}
```
