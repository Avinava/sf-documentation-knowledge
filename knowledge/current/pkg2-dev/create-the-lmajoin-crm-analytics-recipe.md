---
title: "Create the LMAJoin CRM Analytics Recipe"
domain: pkg2-dev
topic: create-the-lmajoin-crm-analytics-recipe
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:25.864Z
estimatedTokens: 971
keywords: [LMAJoin, CRM, Analytics, Recipe, License, Management, App, LMA, data]
---

# Create the LMAJoin CRM Analytics Recipe

> Create a CRM Analytics recipe that contains your License Management App (LMA)
  data.

# Create the LMAJoin CRM Analytics Recipe

Create a CRM Analytics recipe that contains your License Management App (LMA) data.

| Available in: both Salesforce Classic and Lightning Experience |
| --- |
| Available in: Enterprise, Performance, Unlimited, and Developer Editions |


In your org in Analytics Studio in CRM Analytics:

1.  Click **Data Manager**.
2.  In Dataflows & Recipes on the Recipes tab, click **Create Recipe**.
3.  Click **Add Input Data**.
4.  Select **sfLma\_\_License\_\_c**, and select all columns.
5.  Create a transform named License with these specifications.
    -   Custom Formula: string(Id)
    -   Output Type: **Text**
    -   Length: 255
    -   Default Value: blank
    -   Show Results In: **New Column (and Keep Original)**
    -   Column Label: LicenseRecordId
6.  Add a join to Lead with these specifications.
    -   Select Input Data to Join: **Lead**
    -   Columns to Select: **Company**, **First Name**, **Id**, **Last Name**
    -   Join Type: **Lookup**
    -   Join Keys: **License: Record ID = Lead ID**
    -   API Name Prefix for Right Columns: Lead
7.  Add a join to Account with these specifications.
    -   Select Input Data to Join: **Account**
    -   Columns to Select: **Name**
    -   Join Type: **Lookup**
    -   Join Keys: **Account Name = Account Name**
    -   API Name Prefix for Right Columns: Account
8.  Add a join to sfLma\_\_Package\_\_c with these specifications.
    -   Select Input Data to Join: **sfLma\_\_Package\_\_c**
    -   Columns to Select: All fields
    -   Join Type: **Lookup**
    -   Join Keys: **Package = Record ID**
    -   API Name Prefix for Right Columns: Package
9.  Create a transform between the join and sfLma\_\_Package\_\_c with these specifications.
    -   Custom Formula: substr(sfLma\_\_Package\_ID\_\_c, 1, 15)
    -   Output Type: **Text**
    -   Length: 255
    -   Default Value: none
    -   Show Results in: **New Column (and Keep Original)**
    -   Column Label: PackageID15
10.  Create another join with these specifications.
     -   Select Input Data to Join: **sfLma\_\_Package\_Verzion\_\_c**
     -   Columns to Select: All fields
     -   Join Type: **Lookup**
     -   Join Keys: **Package Version = Record ID**
     -   API Name Prefix for Right Columns: PackageVersion
11.  Create an output with these specifications.
     -   Write To: **Dataset**
     -   Dataset Display Label: LMAJoin
     -   App Location: **PartnerIntelligence**
     -   Sharing Source: default
     -   Security Predicate: **Apply row-level security to the target dataset by adding a predicate filter condition**
12.  Click **Apply**.
13.  Click **Save**.
14.  Save your recipe as LMAJoin.
15.  Click **Save and Run**.
16.  To monitor the status of your job, click **Go to Data Monitor**.

## Example

When complete, your LMAJoin CRM Analytics recipe looks like this.

![The LMAJoin CRM Analytics recipe displaying nodes, transforms, joins, and output](/docs/resources/img/en-us/260.0?doc_id=appexchange%2Fimages%2Fapp_analytics_cookbook%2Fapp_analytics_cookbook_tcrm_lmajoin.png&folder=pkg2_dev)

1.  [Monitor Your LMAJoin CRM Analytics Recipe](atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_cookbook_tcrm_lmajoin_monitor.htm)
    CRM Analytics recipes can take a while to complete. Use these steps to monitor the status of your LMAJoin recipe.
2.  [Run the LMAJoin CRM Analytics Recipe](atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_cookbook_tcrm_lmajoin_schedule.htm)
    To create a reusable dataset, schedule your LMAJoin CRM Analytics recipe to run on a regular basis. We recommend daily at midnight.

-   [← Previous](atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_cookbook_tcrm_lma_data.htm "Connect to Your License Management App Data")
-   [Next →](atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_cookbook_tcrm_da_prepare.htm "Create Your App Analytics Dataset")

## Related Topics

- Monitor Your LMAJoin CRM Analytics Recipe (atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_cookbook_tcrm_lmajoin_monitor.htm)
- Run the LMAJoin CRM Analytics Recipe (atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_cookbook_tcrm_lmajoin_schedule.htm)
- ← Previous (atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_cookbook_tcrm_lma_data.htm)
- Next → (atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_cookbook_tcrm_da_prepare.htm)
