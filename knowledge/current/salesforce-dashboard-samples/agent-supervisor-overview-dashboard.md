---
title: "Agent Supervisor Overview Dashboard"
domain: salesforce-dashboard-samples
topic: agent-supervisor-overview-dashboard
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:41.242Z
estimatedTokens: 416
keywords: [Agent, Supervisor, Dashboard, similar, Service, Executive, focuses, line, managers, kind, visibility, team, level, identifies, agent-level]
---

# Agent Supervisor Overview Dashboard

> This dashboard is similar to the Service Executive Overview Dashboard, but focuses on the line managers. It provides the same kind
of visibility at the team level, and also identifies important agent-level
metrics.

# Agent Supervisor Overview Dashboard

This dashboard is similar to the Service Executive Overview Dashboard, but focuses on the line managers. It provides the same kind of visibility at the team level, and also identifies important agent-level metrics.

![Screenshot of the Agent Supervisor Overview Dashboard](/docs/resources/img/en-us/260.0?doc_id=images%2Fservice_aso_dashboard.png&folder=salesforce_dashboard_samples)

## Highlights and Tips

Most components are self-explanatory. Here are a few highlights and tips from this dashboard.

-   **Set the right scope.** The Show filter for the source reports for all components is set to All cases.
-   **Choose key dates.** Make sure to set the right date range for your source reports and dashboard components. Do you want to see top agents for the month? For the quarter?
-   **Use headers, titles, and footers strategically.** Notice in this dashboard that no headers or footers are used—only titles. When you post a dashboard component snapshot to a Chatter feed, titles are shown, but headers and footers aren't.
-   **Limit the data.** Use the Maximum Values Displayed field to limit the number of records to show. This is especially useful for tables and horizontal bar charts. Use limited tables to create leaderboards of your top-performing agents.
-   **Choose drill-down behavior.** By setting the Drill Down to option, you control where users are sent when they click the component. Notice that the option is set to Record Detail Page for the *Top Cases by Age (Days)* component. Users can click case numbers or account names to go directly to those record detail pages instead of the source report.
