---
title: "apex Step Type
        Properties"
domain: bi-dev-guide-json
topic: apex-step-type-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:02.308Z
estimatedTokens: 1402
keywords: [apex, Step, include, custom, functionality, dashboard, access, Salesforce, platform, features, aren’t, inherently, Analytics, pull, data]
---

# apex Step Type
        Properties

> Use to include custom Apex functionality in a dashboard to access Salesforce platform
        features that aren’t inherently supported in Analytics. For example, pull in data using
        any API, manipulate data using your Apex classes, or apply simple case statements or complex
        machine learning. You can even harness AppExchange for things like integrating Twitter with
        Analytics—all in a way that is familiar.

# apex Step Type Properties

Use to include custom Apex functionality in a dashboard to access Salesforce platform features that aren’t inherently supported in Analytics. For example, pull in data using any API, manipulate data using your Apex classes, or apply simple case statements or complex machine learning. You can even harness AppExchange for things like integrating Twitter with Analytics—all in a way that is familiar.

To set up an apex step, create an Apex class that returns data in a shape that Analytics can consume. And then define the step with the apex step type in the dashboard JSON. The step calls the Apex REST endpoint to return the data from the Apex controller class.

Like a soql step, the Apex controller can return tabular data. Unlike saql and soql step types, the apex step type doesn’t define the "strings", "numbers", and "groups" arrays. The Apex class response must declare these column types.

When you define an apex step, you can use a selection or results binding on the body parameter in the step JSON. You can also reference this step type in a results binding. This step type doesn’t support faceting. If you run a Analytics REST API query using an apex step, the query runs as the logged-in user. Each REST API query counts against the org’s API limits.

Note the following limitations with apex steps:

-   If you include dashboards in a package, apex steps aren’t included. You must migrate the Apex classes separately.
-   The Android mobile app doesn’t support this type of step.

| Field Name | Description |
| --- | --- |
| type | Step type. Set to apex. |
| label | Step label, which is primarily used for display in the dashboard designer user interface. |
| query | Query that returns the results. Can consist of the following parameters:bodyOptional. Blob containing the input parameters needed by the Apex controller class.pathRequired. Specifies the class path and name of the Apex controller class. |

## apex Step

```

```

## Example

You want to display real-time stock data from a website in your dashboard. You want to fetch the data from an external API and add logic to determine the time of day for each stock price. Here’s the goal for this dashboard.

![The toggle in the dashboard allows you to choose a company, which filters the results in the table and chart, and changes the displayed stock symbol.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_dashboards_stock_data_dashboard.png&folder=bi_dev_guide_json)

To create this dashboard, complete the following steps:

1.  Create the Apex controller class that gets the data from the stock website.
2.  Add the stock website to the allowed sites in Salesforce.
3.  Create the apex step in addition to the other dashboard widgets.

## Create the Apex Class

Define the Apex controller class and methods that return the stock price for different companies over time.

1.  From setup, enter Apex Classes in the Quick Find box, and select **Apex Classes**.
2.  Click **New**.

    ![You can create new Apex classes from this page.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_dashboards_apex_classes_new.png&folder=bi_dev_guide_json)

3.  Add the following code.

    ```

    ```

4.  Add two more Apex classes for ApexStepRequest and ApexStepResponse to support the Apex stocks class.

    The code for these classes, along with the stock step code, can be found in this public [AnalyticsApexSteps](https://github.com/forcedotcom/AnalyticsApexSteps) GitHub repo, in the /force-app/main/apex/common directory. This GitHub repo also contains other Apex step examples.

5.  Click **Save**.

    ![The StocksRestControl apex class appears.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_dashboards_apex_class_StocksRestController.png&folder=bi_dev_guide_json)


## Allow the External Website

To enable Apex to query external REST endpoints, allow the website in Salesforce.

1.  From setup, enter Remote in the Quick Find box, and select **Remote Site Settings**.
2.  Click **New Remote Site**.

    ![The page shows all sites that are allowed.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_dashboards_apex_remote_site_settings.png&folder=bi_dev_guide_json)

3.  Enter the remote site name and URL.

    ![The page shows the remote site name, URL, and description.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_dashboards_apex_remote_site_add.png&folder=bi_dev_guide_json)

4.  Click **Save**.

## Create the Apex Step

Manually define the apex step in the dashboard JSON to get the stock results from the Apex class that you previously created.

In the dashboard JSON, add the following apex step.

```

```

The apex step query contains the following parameters.

body

The binding retrieves the stock symbol when a company is selected in the toggle widget.![The Salesforce option is selected in the toggle widget, which filters the table and chart widgets and displays the stock symbol in the text widget.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_dashboards_apex_example_toggle_widget.png&folder=bi_dev_guide_json)

path

Specifies the REST API resource path to the Apex controller, as specified in the urlMapping of the RestResource annotation on the Apex controller.

The dashboard shows four widgets. The toggle widget is based on a static step that maps predefined company names to stock symbols. The table widget and line chart use the apex step to retrieve the results. The text widget uses a binding to concatenate “Selected symbol:” and the stock symbol of the selected company in the toggle widget.

Here’s the final dashboard JSON.

```

```

## Code Examples

```
"GetStockData": {
    "query": {   
        "body": {
            "symbol": "CRM"
        },
        "path": "stocks"
    },
    "type": "apex"
}
```

```apex
@RestResource(urlMapping='/stocks')
global with sharing class StocksRestController {

    @HttpPost  
    global static String stocks() {
        ApexStepRequest stepRequest = new ApexStepRequest(new ApexStepRequest.Parameter[]{
            new ApexStepRequest.Parameter('symbol', ApexStepRequest.ParameterType.STRING_PARAM)
        });

        // fetch some stock data
        HttpRequest request = new HttpRequest();
        Http http = new Http();
        // make sure this domain is whitelisted in the proxy
        request.setEndpoint('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&interval=5min&apikey=1QRP8ATD7134OVMA&symbol='
            // default to CRM
            + stepRequest.getStringParam('symbol', 'CRM')
        );
        request.setMethod('GET');
       
        try {
            HTTPResponse response = http.send(request);
            JSONParser parser = JSON.createParser(response.getBody());
           
            List<Map<String, Object>> returnItems = new List<Map<String, Object>>();
            while (parser.nextToken() != null) {
                if (parser.getCurrentToken() == JSONToken.START_OBJECT && parser.getCurrentName() != null && parser.getCurrentName().startsWith('20')) {
                    String dateLabel = parser.getCurrentName();
                    parser.nextToken();
                    parser.nextToken();
                    System.debug(parser.getText());
                   
                    Map<String, Object> curRow = new Map<String, Object>();
                    curRow.put('date', dateLabel);
                    curRow.put('value', Double.valueOf(parser.getText()));
                    returnItems.add(curRow);
                }
            }
                               
            return JSON.serialize(new ApexStepResponse(returnItems));
        } catch(Exception exp) {
            System.debug('exception '+exp);
        }

       
        return '';
    }

}
```

```
"StockData": {
    "query": {
        "body": {
            "symbol": "{{cell(CompaniesList_1.selection, 0, "value").asString()}}"
        },
        "path": "stocks"
    },
    "type": "apex"
}
```

```
{
    "label": "Stock Quotes",
    "mobileDisabled": false,
    "state": {
        "dataSourceLinks": [],
        "filters": [],
        "gridLayouts": [
            {
                "name": "Default",
                "numColumns": 12,
                "pages": [
                    {
                        "label": "Untitled",
                        "name": "b177a6e6-8ab6-4914-af36-09c7fa23e0c8",
                        "widgets": [
                            {
                                "colspan": 6,
                                "column": 0,
                                "name": "pillbox_1",
                                "row": 0,
                                "rowspan": 1,
                                "widgetStyle": {
                                    "borderEdges": []
                                }
                            },
                            {
                                "colspan": 5,
                                "column": 7,
                                "name": "text_1",
                                "row": 0,
                                "rowspan": 1,
                                "widgetStyle": {
                                    "borderEdges": []
                                }
                            },
                            {
                                "colspan": 6,
                                "column": 0,
                                "name": "table_1",
                                "row": 1,
                                "rowspan": 7,
                                "widgetStyle": {
                                    "borderEdges": []
                                }
                            },
                            {
                                "colspan": 6,
                                "column": 6,
                                "name": "chart_1",
                                "row": 1,
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
                    "backgroundColor": "#F2F6FA",
                    "cellSpacingX": 8,
                    "cellSpacingY": 8,
                    "fit": "original",
                    "gutterColor": "#C5D3E0"
                },
                "version": 1
            }
        ],
        "layouts": [],
        "steps": {
            "CompaniesList_1": {
                "datasets": [],
                "dimensions": [],
                "groups": [],
                "label": "CompaniesList",
                "numbers": [],
                "selectMode": "singlerequired",
                "strings": [],
                "type": "staticflex",
                "values": [
                    {
                        "display": "Salesforce",
                        "value": "CRM"
                    },
                    {
                        "display": "Apple",
                        "value": "AAPL"
                    },
                    {
                        "display": "Oracle",
                        "value": "ORCL"
                    },
                    {
                        "display": "Twitter",
                        "value": "TWTR"
                    },
                    {
                        "display": "Facebook",
                        "value": "FB"
                    }
                ],
                "broadcastFacet": true
            },
            "StockData": {
                "query": {
                    "body": {
                        "symbol": "{{cell(CompaniesList_1.selection, 0, "value").asString()}}"
                    },
                    "path": "stocks"
                },
                "type": "apex"
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
                    "borderColor": "#e0e5ee",
                    "borderWidth": 1,
                    "cell": {
                        "backgroundColor": "#ffffff",
                        "fontColor": "#16325c",
                        "fontSize": 12
                    },
                    "columns": [],
                    "customBulkActions": [],
                    "exploreLink": false,
                    "header": {
                        "backgroundColor": "#f4f6f9",
                        "fontColor": "#16325c",
                        "fontSize": 12
                    },
                    "innerMajorBorderColor": "#a8b7c7",
                    "innerMinorBorderColor": "#e0e5ee",
                    "mode": "fittocontainer",
                    "numberOfLines": 1,
                    "step": "StockData",
                    "verticalPadding": 8,
                    "evenRowColor": null,
                    "oddRowColor": null
                },
                "type": "table"
            },
            "pillbox_1": {
                "parameters": {
                    "compact": false,
                    "exploreLink": false,
                    "step": "CompaniesList_1"
                },
                "type": "pillbox"
            },
            "text_1": {
                "parameters": {
                    "fontSize": 20,
                    "text": "Selected symbol: {{ cell(CompaniesList_1.selection, 0, "value").asString() }}",
                    "textAlignment": "center",
                    "textColor": "#091A3E"
                },
                "type": "text"
            },
            "chart_1": {
                "parameters": {
                    "autoFitMode": "keepLabels",
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
                    "exploreLink": false,
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
                    "step": "StockData",
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
                "type": "chart"
            }
        }
    },
    "datasets": []
}
```
