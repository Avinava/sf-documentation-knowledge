---
title: "Download Package Usage Logs, Package Usage Summaries, and Subscriber Snapshots"
domain: pkg2-dev
topic: download-package-usage-logs-package-usage-summaries-and-subscriber-snapshots
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:25.920Z
estimatedTokens: 779
keywords: [Download, Package, Usage, Logs, Summaries, Subscriber, Snapshots, monthly, AppAnalyticsQueryRequest, downloadable, comma-separated, csv, files]
---

# Download Package Usage Logs, Package Usage Summaries, and Subscriber Snapshots

> To request package usage logs, monthly package usage summaries, and subscriber
        snapshots, use the AppAnalyticsQueryRequest object. Usage logs, usage summaries, and
        subscriber snapshots are downloadable comma-separated value (.csv) files.

# Download Package Usage Logs, Package Usage Summaries, and Subscriber Snapshots

To request package usage logs, monthly package usage summaries, and subscriber snapshots, use the AppAnalyticsQueryRequest object. Usage logs, usage summaries, and subscriber snapshots are downloadable comma-separated value (.csv) files.

To enable App Analytics on your second-generation (2GP) managed packages, follow these [instructions](https://developer.salesforce.com/docs/atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_enable2gp.htm "HTML (New Window)"). To enable App Analytics on your first-generation (1GP) managed packages, follow these [instructions](https://developer.salesforce.com/docs/atlas.en-us.pkg1_dev.meta/pkg1_dev/app_analytics_enable1gp.htm "HTML (New Window)").

Then determine which team members need create, read, update, and delete (CRUD) access to the AppAnalyticsQueryRequest object, and consider [creating a permission set](https://help.salesforce.com/articleView?id=perm_sets_create.htm&language=en_US "HTML (New Window)") for them. By default, admins have the permissions required to request package usage logs and usage summaries using the AppAnalyticsQueryRequest object.

In a 24-hour period, you can download up to 20 GB of AppExchange App Analytics data.

Package usage summary data is available to download for 10 years from the summary file log date. Package usage log data is available to download for 45 days from the date that the log event occurred. Subscriber snapshot data is available to download for 45 days from the snapshot date.

The usage data that AppExchange App Analytics collects depends on the org type and data type.

| Data Type | Data is Collected on... | Data isn’t Collected on... |
| --- | --- | --- |
| PackageUsageLog | Production, sandbox, and trial orgs | Scratch orgs |
| PackageUsageSummary | Production orgs | Sandbox, scratch, and trial orgs |
| SubscriberSnapshot | Production org and trial orgs | Sandbox and scratch orgs |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg2_dev)

#### Note

AppExchange App Analytics is subject to certain usage restrictions as described in [AppExchange Program Policies](https://www.salesforce.com/content/dam/web/en_us/www/documents/legal/Agreements/alliance-agreements-and-terms/salesforce-partner-program-policies.pdf "HTML (New Window)").

1.  Log in to the License Management Org (LMO) that the package is registered to.
2.  From the LMO, complete the required fields in the [AppAnalyticsQueryRequest](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_appanalyticsqueryrequest.htm "HTML (New Window)") object.
3.  Retrieve the App Analytics Query Request object created in the API request. The DownloadURL field populates after the request is completed.
4.  Click the URL in the DownloadURL field in the App Analytics Query Request object, and download the .csv file.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg2_dev)

    #### Note

    The download URL expires after 60 minutes.
