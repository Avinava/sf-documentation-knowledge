---
title: "Save a Dashboard with a Custom Lightning Web Component (Beta)"
domain: api-analytics
topic: save-a-dashboard-with-a-custom-lightning-web-component-beta
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:58.429Z
estimatedTokens: 191
keywords: [Save, Dashboard, Custom, Lightning, Web, Component, Beta, sending, PATCH, Results, resource]
---

# Save a Dashboard with a Custom Lightning Web Component (Beta)

> You can save a dashboard with a custom Lightning web component by sending a PATCH
    request to the Dashboard Results resource.

# Save a Dashboard with a Custom Lightning Web Component (Beta)

You can save a dashboard with a custom Lightning web component by sending a PATCH request to the Dashboard Results resource.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_analytics)

#### Note

This feature is a pilot or beta service that is subject to the Beta Services Terms at [Agreements - Salesforce.com](https://www.salesforce.com/company/legal/) or a written Unified Pilot Agreement if executed by Customer, and applicable terms in the [Product Terms Directory](https://ptd.salesforce.com/). Use of this pilot or beta service is at the Customer’s sole discretion.

Example Usage

```

```

Example Request Body

```

```

Example Response Body

```

```

## Code Examples

```
/services/data/v31.0/analytics/dashboards/01ZD00000007S89MAE
```

```
{
    "components": [{
        "header": "",
        "properties": {
            "content": {
                "componentParameters": "{"componentApiName":"c:kpiDashboard","properties":"{\\"maxCards\\":1,\\"showProgressBars\\":true,\\"showSummary\\":false}"}"
            },
            "visualizationType": "LightningWebComponent"
        },
        "type": "Dashboard",
        "componentData": 0
    }]
}
```

```
components" : [{
    "chartTheme" : null,
    "componentData" : null,
    "footer" : null,
    "header" : null,
    "id" : "01aSG0000088inFYAQ",
    "lastModifiedDate" : "2025-12-18T05:03:56Z",
    "properties" : {
        "content" : {
            "componentParameters" : "{"componentApiName":"c:kpiDashboard","properties":"{\\"maxCards\\":1,\\"showProgressBars\\":true,\\"showSummary\\":false}"}"
        },
        "visualizationType" : "LightningWebComponent"
    },
    "reportId" : null,
    "title" : null,
    "type" : "Dashboard"
}]
```
