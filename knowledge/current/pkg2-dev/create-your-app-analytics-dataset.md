---
title: "Create Your App Analytics Dataset"
domain: pkg2-dev
topic: create-your-app-analytics-dataset
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:25.839Z
estimatedTokens: 309
keywords: [App, Analytics, Dataset, RawPackageLogFile, RawPackageLogFile.csv, file]
---

# Create Your App Analytics Dataset

> Create a RawPackageLogFile App Analytics dataset using your
   RawPackageLogFile.csv file.

# Create Your App Analytics Dataset

Create a RawPackageLogFile App Analytics dataset using your RawPackageLogFile.csv file.

| Available in: both Salesforce Classic and Lightning Experience |
| --- |
| Available in: Enterprise, Performance, Unlimited, and Developer Editions |


In your org in Analytics Studio in CRM Analytics:

1.  Click **Create** and select **Dataset**.
2.  Click **CSV File** and select your RawPackageLogFile.csv file.
3.  Click **Next**.
4.  Name your dataset RawPackageLogFile and select your **PartnerIntelligence** app.
5.  Click **Next**.
6.  For **event\_count**, **num\_fields**, **num\_soql\_queries**, **operation\_count**, and **rows\_processed** fields, change the field type from **Dimension** to **Measure** and add these specifications.
    -   Default value: 0
    -   Scale: 0
    -   Precision: 18
7.  Search for **timestamp\_derived** and make sure that its field type is **Date**.
8.  Click **Upload File**.

-   [← Previous](atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_cookbook_tcrm_lmajoin.htm "Create the LMAJoin CRM Analytics Recipe")
-   [Next →](atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_cookbook_tcrm_da_recipe_detail.htm "Create Your DailyAggregation CRM Analytics Recipe")

## Related Topics

- ← Previous (atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_cookbook_tcrm_lmajoin.htm)
- Next → (atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_cookbook_tcrm_da_recipe_detail.htm)
