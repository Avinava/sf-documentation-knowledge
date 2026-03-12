---
title: "Marketing Executive Dashboard"
domain: salesforce-dashboard-samples
topic: marketing-executive-dashboard
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:41.229Z
estimatedTokens: 509
keywords: [Marketing, Executive, Dashboard, executives, directors, VPs, they, creating, efficient, campaigns, generating, converting, leads, Highlights, Tips]
---

# Marketing Executive Dashboard

> Marketing executives, such as directors and VPs, can use this dashboard
to find out if they are creating efficient campaigns and generating
and converting leads.

# Marketing Executive Dashboard

Marketing executives, such as directors and VPs, can use this dashboard to find out if they are creating efficient campaigns and generating and converting leads.

![Screenshot of the Marketing Executive Dashboard](/docs/resources/img/en-us/260.0?doc_id=images%2Fsales_and_marketing_med.png&folder=salesforce_dashboard_samples)

## Highlights and Tips

Most components are self-explanatory. Here are a few highlights and tips from this dashboard.

-   **Set the right scope.** The Show filter for the source reports for *Campaigns by ROI*, *Actual ROI by Campaign Type*, and *Top Marketing Channels by Campaign* are set to show My active campaigns. All components that have to do with leads are set to show My team's leads.
-   **Choose key dates.** Make sure to set the right date range for your source reports and dashboard components. Do you want to see data from the last 13 months? The current quarter?
-   **Show combination charts.** To show combination charts, like *Campaigns by ROI*, select the Use chart as defined in source report checkbox when editing the component.
-   **Use headers, titles, and footers strategically.** Notice in this dashboard that no component titles are used—only headers and footers. You can use headers to group components as well, like the metric components under *Lead Conversion Summary (MTD)*. When you post a dashboard component snapshot to a Chatter feed, titles are shown, but headers and footers aren't.
-   **Limit the data.** Use the Maximum Values Displayed field to limit the number of records to show. This is especially useful for tables and horizontal bar charts.
-   **Choose drill-down behavior.** By setting the Drill Down to option, you control where users are sent when they click the component. The default drill option is to send users to the source report, such as for *Converted Leads by Month*. Select Filtered Source Report to let users click individual groups, X-axis values, or legend entries to see a report that includes just that data.
