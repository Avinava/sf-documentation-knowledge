---
title: "Salesforce Reports and Dashboards API via Apex"
domain: apex-guide
topic: salesforce-reports-and-dashboards-api-via-apex
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:43:46.240Z
keywords: [Salesforce, Reports, Dashboards, API, via, Apex, See]
---

# Salesforce Reports and Dashboards API via Apex

# Salesforce Reports and Dashboards API via Apex

The Salesforce Reports and Dashboards API via Apex gives you programmatic access to your report data as defined in the report builder.

The API enables you to integrate report data into any web or mobile application, inside or outside the Salesforce platform. For example, you might use the API to trigger a Chatter post with a snapshot of top-performing reps each quarter.

The Salesforce Reports and Dashboards API via Apex revolutionizes the way that you access and visualize your data. You can:

-   Integrate report data into custom objects.
-   Integrate report data into rich visualizations to animate the data.
-   Build custom dashboards.
-   Automate reporting tasks.

At a high level, the API resources enable you to query and filter report data. You can:

-   Run tabular, summary, or matrix reports synchronously or asynchronously.
-   Filter for specific data on the fly.
-   Query report data and metadata.

-   **[Requirements and Limitations](atlas.en-us.apexcode.meta/apexcode/apex_analytics_limitations.htm)**  
    The Salesforce Reports and Dashboards API via Apex is available for organizations that have API enabled.
-   **[Run Reports](atlas.en-us.apexcode.meta/apexcode/apex_analytics_run_reports.htm)**  
    You can run a report synchronously or asynchronously through the Salesforce Reports and Dashboards API via Apex.
-   **[List Asynchronous Runs of a Report](atlas.en-us.apexcode.meta/apexcode/apex_analytics_list_async_runs.htm)**  
    You can retrieve up to 2,000 instances of a report that you ran asynchronously.
-   **[Get Report Metadata](atlas.en-us.apexcode.meta/apexcode/apex_analytics_report_metadata.htm)**  
    You can retrieve report metadata to get information about a report and its report type.
-   **[Get Report Data](atlas.en-us.apexcode.meta/apexcode/apex_analytics_report_data.htm)**  
    You can use the ReportResults class to get the fact map, which contains data that’s associated with a report.
-   **[Filter Reports](atlas.en-us.apexcode.meta/apexcode/apex_analytics_filter_reports.htm)**  
    To get specific results on the fly, you can filter reports through the API.
-   **[Decode the Fact Map](atlas.en-us.apexcode.meta/apexcode/apex_analytics_fact_map.htm)**  
    The fact map contains the summary and record-level data values for a report.
-   **[Test Reports](atlas.en-us.apexcode.meta/apexcode/apex_analytics_test_reports.htm)**  
    Like all Apex code, Salesforce Reports and Dashboards API via Apex code requires test coverage.

#### See Also

-   [*Apex Reference Guide*: Reports Namespace](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_namespace_Reports.htm "Apex Reference Guide: Reports Namespace - HTML (New Window)")