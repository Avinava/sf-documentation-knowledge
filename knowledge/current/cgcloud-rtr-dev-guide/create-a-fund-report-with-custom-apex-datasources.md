---
title: "Create a Fund Report with Custom Apex Datasources"
domain: cgcloud-rtr-dev-guide
topic: create-a-fund-report-with-custom-apex-datasources
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:09.450Z
estimatedTokens: 293
keywords: [Fund, Report, Custom, Apex, Datasources, data, that's, reports, Hyperforce, server, interfaced, via, regular, sources, AccountMonthlyMeasures]
---

# Create a Fund Report with Custom Apex Datasources

> The data that's required for the reports is available on a Hyperforce server and is
    interfaced via regular data sources such as AccountMonthlyMeasures or
    AccountWeeklyMeasures.

# Create a Fund Report with Custom Apex Datasources

The data that's required for the reports is available on a Hyperforce server and is interfaced via regular data sources such as AccountMonthlyMeasures or AccountWeeklyMeasures.

If you want to integrate KPI values that's obtained from other sources such as a Salesforce attribute, use Real Time Report (RTR) to add a custom datasource. A custom datasource is an Apex endpoint that delivers KPI values to the report.

RTR offers you these custom data sources:

-   RTRSalesforceMonthlyMeasures: Used to integrate monthly values for KPIs.
-   RTRSalesforceWeeklyMeasures: Used to integrate weekly values for KPIs.

Depending on your report, you can use either weekly or monthly custom data sources to fetch KPIs for that time level. Ensure that you also implement an Apex endpoint that corresponds to these data sources that can deliver these KPIs in the corresponding time granularity (week or month).

**Snippet to Define Custom Datasources**

```

```

In addition to defining the datasource in the report configuration, ensure that you also create a base Apex class (based on your use case) and a logic Apex class.

## Code Examples

```
"datasources": [
      {
      "name": "AccountMonthlyMeasures"
      },
      {
      "name": "RTRSalesforceMonthlyMeasures"
      }
      ],
```
