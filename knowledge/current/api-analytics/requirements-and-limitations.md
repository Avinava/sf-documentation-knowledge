---
title: "Requirements and Limitations"
domain: api-analytics
topic: requirements-and-limitations
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:58.923Z
estimatedTokens: 790
keywords: [Requirements, Limitations, Reports, Dashboards, REST, API, any, organization, enabled, establish, authenticated, session, OAuth, order, access]
---

# Requirements and Limitations

> The Reports and Dashboards REST API is available for any organization that has API enabled.
         You must establish an authenticated session using OAuth in order to access the Reports and
         Dashboards REST API. When working with this API, consider these restrictions in addition to
       

# Requirements and Limitations

The Reports and Dashboards REST API is available for any organization that has API enabled. You must establish an authenticated session using OAuth in order to access the Reports and Dashboards REST API. When working with this API, consider these restrictions in addition to general API limits.

To use the Analytics Download API, your org must have a CRM Analytics license. In addition, your org needs both Slack for Salesforce and CRM Analytics for Slack enabled. For more information, see [Enable Salesforce for Slack Integrations](https://help.salesforce.com/s/articleView?id=slack.slack_apps_enable.htm&type=5&language=en_US).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_analytics)

#### Note

Responses and requests are in JSON. While using the Reports and Dashboards REST API with a POST request body, you must use content-type: application/json. If you don’t use this content type, then you could get unexpected results.

Reports Limits

-   Cross filters, standard report filters, and filtering by row limit are unavailable when filtering data.
-   Historical tracking reports are only supported for matrix reports.
-   Subscriptions aren't supported for historical tracking reports.
-   The API can process only reports that contain up to 100 fields selected as columns.
-   A list of up to 200 recently viewed reports can be returned.
-   Your org can request up to 500 synchronous report runs per hour.
-   The API supports up to 20 synchronous report run requests at a time.
-   A list of up to 2,000 instances of a report that was run asynchronously can be returned.
-   The API supports up to 200 requests at a time to get results of asynchronous report runs.
-   Your organization can request up to 1,200 asynchronous requests per hour.
-   Asynchronous report run results are available within a 24-hour rolling period.
-   The API returns up to the first 2,000 report rows. You can narrow results using filters.
-   You can add up to 20 custom field filters when you run a report.
-   If a report is run on a standard or custom object as an automated process user from an Apex test class, only the required custom fields are returned. Non-required custom fields aren’t shown in the results.
-   -   Your org can request up to 200 dashboard refreshes per hour.
    -   Your org can request results for up to 5,000 dashboards per hour.

Dashboards Limits

-   Your org can request up to 200 dashboard refreshes per hour.
-   Your org can request results for up to 5,000 dashboards per hour.

Analytics Notification Limits

-   Each user can subscribe to up to 5 reports.
-   Each user can create up to 5 Analytics notifications.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_analytics)

#### Note

All limits that apply to reports created in the report builder also apply to the API, as do limits for dashboards created in the dashboard builder. For more information, see “Salesforce Reports and Dashboards Limits” in Salesforce Help.

Analytics Download Limits

-   Each user can make 3 concurrent requests to download Analytics assets.
