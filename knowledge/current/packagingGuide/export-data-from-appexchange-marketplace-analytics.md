---
title: "Export Data from AppExchange Marketplace Analytics"
domain: packagingGuide
topic: export-data-from-appexchange-marketplace-analytics
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:20.996Z
estimatedTokens: 453
keywords: [Export, Data, AppExchange, Marketplace, Analytics, explore, Salesforce, another, tool, exported, comma-separated, csv, filters, applied, across]
---

# Export Data from AppExchange Marketplace Analytics

> To explore your AppExchange Marketplace Analytics data using Salesforce or another
    tool, export it. Data is exported in comma-separated value (.csv) format with your global
    filters
    applied. You can export
    all data across all traffic sources, activity types, and lead types. Custom time periods are
    supported for data from the previous two years. This is relative to the current date.

# Export Data from AppExchange Marketplace Analytics

To explore your AppExchange Marketplace Analytics data using Salesforce or another tool, export it. Data is exported in comma-separated value (.csv) format with your global filters applied. You can export all data across all traffic sources, activity types, and lead types. Custom time periods are supported for data from the previous two years. This is relative to the current date.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=packagingGuide)

#### Note

Export isn’t available for Co-Marketing Insights visualizations.


| User Permissions Needed |
| --- |
| To view Marketplace Analytics: | Manage Listings |

1.  Log in to the [Salesforce Partner Community](https://partners.salesforce.com/pdx/s/).
2.  Click **Publishing** to navigate to the Partner Console.
3.  Click **Home** | **Analytics**.
4.  Select a listing and a time period.
5.  Click **Download Files**.

When you export the data, Marketplace Analytics creates 6 CSV files. Data filtering by activity metrics, view by time scale, lead types, and traffic sources isn’t available.

| FILE | CONTENTS |
| --- | --- |
| Activity Sources | A count of all activities grouped by source and activity for all sources for the selected global time period. |
| Activity Source Timeline | Activities for all sources grouped by day for the selected global time period filter. |
| Chat Engagement | All activities of all types, grouped by day and type for the selected global time period. |
| Customer Engagement | All activities grouped by day for the selected global time period. |
| Lead Events | A count of all lead types for the selected global time period. |
| Lead Events Timeline | All lead types grouped by day and lead type for the selected global time period. |
