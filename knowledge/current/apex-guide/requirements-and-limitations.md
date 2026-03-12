---
title: "Requirements and Limitations"
domain: apex-guide
topic: requirements-and-limitations
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:32.175Z
estimatedTokens: 729
keywords: [Requirements, Limitations, Salesforce, Reports, Dashboards, API, via, Apex, organizations, enabled., Note]
---

# Requirements and Limitations

> The Salesforce Reports and Dashboards API via Apex is available for organizations that
  have API enabled.

# Requirements and Limitations

The Salesforce Reports and Dashboards API via Apex is available for organizations that have API enabled.

The following restrictions apply to the Reports and Dashboards API via Apex, in addition to general API limits.

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

In addition, the following restrictions apply to the Reports and Dashboards API via Apex.

-   Asynchronous report calls are not allowed in batch Apex.
-   Report calls are not allowed in Apex triggers.
-   There is no Apex method to list recently run reports.
-   The number of report rows processed during a synchronous report run count towards the governor limit that restricts the total number of rows retrieved by SOQL queries to 50,000 rows per transaction. This limit is not imposed when reports are run asynchronously.
-   In Apex tests, report runs always ignore the SeeAllData annotation, regardless of whether the annotation is set to true or false. This means that report results will include pre-existing data that the test didn’t create. There is no way to disable the SeeAllData annotation for a report execution. To limit results, use a filter on the report.
-   In Apex tests, asynchronous report runs will execute only after the test is stopped using the Test.stopTest method.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

All limits that apply to reports created in the report builder also apply to the API. For more information, see “Analytics Limits” in the Salesforce online help.
