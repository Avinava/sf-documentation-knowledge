---
title: "Service KPIs Dashboard"
domain: salesforce-dashboard-samples
topic: service-kpis-dashboard
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:41.245Z
estimatedTokens: 384
keywords: [Service, KPIs, Dashboard, targeted, executives, insight, trends, helps, staffing, training, decisions, monitor, performance, against, key]
---

# Service KPIs Dashboard

> This dashboard is targeted at service executives and provides insight
into important trends, which helps them make staffing and training
decisions. Executives can also monitor performance against set key
performance indicators (KPIs), which helps them refine organization
goals based on past performa

# Service KPIs Dashboard

This dashboard is targeted at service executives and provides insight into important trends, which helps them make staffing and training decisions. Executives can also monitor performance against set key performance indicators (KPIs), which helps them refine organization goals based on past performance.

![Screenshot of the Service Key Performance Indicators Dashboard](/docs/resources/img/en-us/260.0?doc_id=images%2Fservice_kpi_dashboard.png&folder=salesforce_dashboard_samples)

## Highlights and Tips

Most components are self-explanatory. Here are a few highlights and tips from this dashboard.

-   **Aim for the right targets.** Trends are charted against goals, which can be set up using custom summary formulas on the source report.
-   **Choose key dates.** Make sure to set the right date range for your source reports and dashboard components. Here, “all time” means the current and previous years. Choose the range that makes sense for your organization.
-   **Choose drill-down behavior.** By setting the Drill Down to option, you control where users are sent when they click the component. The default drill option is to send users to the source report, such as for *Cases Closed MTD*. Notice that *Case Distribution by Support Channels* is set to Filtered Source Report, so users can click the green bar under “Phone,” for example, to see the report filtered for just that channel and status.
-   **Show totals.** For donut charts and gauges, select Show Total to display it on the component.
