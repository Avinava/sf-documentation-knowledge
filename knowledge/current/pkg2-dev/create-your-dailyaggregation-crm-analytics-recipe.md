---
title: "Create Your DailyAggregation CRM Analytics Recipe"
domain: pkg2-dev
topic: create-your-dailyaggregation-crm-analytics-recipe
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:25.848Z
estimatedTokens: 1230
keywords: [DailyAggregation, CRM, Analytics, Recipe, join, raw, package, log, file, data, License, Management, App, LMA, produces]
---

# Create Your DailyAggregation CRM Analytics Recipe

> You join your raw package log file data with your License Management 
  App (LMA) data to create the DailyAggregation CRM Analytics recipe. The recipe 
  produces a dataset called DailyAggregation that you use to create App Analytics 
  recipes.

# Create Your DailyAggregation CRM Analytics Recipe

You join your raw package log file data with your License Management App (LMA) data to create the DailyAggregation CRM Analytics recipe. The recipe produces a dataset called DailyAggregation that you use to create App Analytics recipes.

| Available in: both Salesforce Classic and Lightning Experience |
| --- |
| Available in: Enterprise, Performance, Unlimited, and Developer Editions |


In your org in Analytics Studio in CRM Analytics:

1.  Click **Data Manager**.
2.  Click **Dataflows & Recipes**.
3.  On the Recipes tab, click **Create Recipe**.
4.  Click **Add Input Data**.
5.  Select **RawPackageLogFile**.
6.  Select all the columns.
7.  Create an aggregate with these specifications.

    | Field | Aggregate By |
    | --- | --- |
    | event_count | Sum |
    | login_key | Unique |
    | num_fields | Sum |
    | num_soql_queries | Sum |
    | operation_count | Sum |
    | rows_processed | Sum |
    | session_key | Unique |

8.  In the aggregate, in Group Rows, click **+**, and select **timestamp\_derived**.
    1.  Select **Year**, **Month**, and **Day**.
    2.  Click **Add**.
9.  In the aggregate, in Group Rows, create a group for each of these fields.
    -   **api\_type**
    -   **api\_version**
    -   **app\_name**
    -   **class\_name**
    -   **cloned\_from\_organization**
    -   **custom\_entity**
    -   **custom\_entity\_type**
    -   **entry\_point**
    -   **event**
    -   **event\_subscriber**
    -   **http\_method**
    -   **http\_status\_code**
    -   **log\_record\_type**
    -   **managed\_package\_namespace**
    -   **method\_name**
    -   **operation\_type**
    -   **organization\_country\_code**
10.  Create a transform named Create DMY Field with this formula.to\_date(concat(timestamp\_derived\_DAY,"/",timestamp\_derived\_MONTH,"/",timestamp\_derived\_YEAR),"dd/MM/yyyy"))
11.  Join your RawPackageLogFile dataset to your LMAData dataset using this information.
     -   Select Input Data to Join: **LMAData**
     -   Columns to Select: All fields
     -   Join Type: **Lookup**
     -   Join Keys: **organization\_id = Subscriber Org ID** and **package\_id = PackageID15**
     -   API Name Prefix for Right Columns: LMAData
12.  Join your country-codes dataset to your LMAData dataset using this information.
     -   Select Input Data to Join: **country-codes**
     -   Columns to Select: All fields
     -   Join Type: **Lookup**
     -   Join Keys: **user\_country\_code = ISO3166-1-Alpha-2**
     -   API Name Prefix for Right Columns: UserCountry
13.  Create a transform named Feature Name.
     1.  Create as many CRM Analytics buckets as you need for your features, such as Inventory, Orders, and a catch-all bucket called Other.
     2.  ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pkg2_dev)

         #### Note

         A CRM Analytics bucket represents a category that you use to group your data. For example, say your app contains multiple features, such as an inventory tracking feature and an order processing feature. Create a CRM Analytics bucket for each feature. Each bucket contains the custom objects, pages, Lightning components, and Apex classes that pertain to that feature. You can use these buckets to create Feature Adoption App Analytics recipes

         Add your custom entities to the appropriate bucket.
14.  Select **Output** and use these settings.
     -   Write To: **Dataset**
     -   Dataset Display Label: DailyAggregation
     -   App Location: **PartnerIntelligence**
     -   Sharing Source: default
     -   Security Predicate: **Apply row-level security to the target dataset by adding a predicate filter condition**
     -   Name: Create Daily Aggregation Dataset
15.  Click **Apply**.
16.  Click **Save**.
17.  Name your recipe DailyAggregation.
18.  Click **Save and Run**.

## Example

When complete, your DailyAggregation recipe looks like this.

![The DailyAggregation CRM Analytics recipe with LMAData,        country-codes, RawPackageLogFile datasets, aggregations, and transformations](/docs/resources/img/en-us/260.0?doc_id=appexchange%2Fimages%2Fapp_analytics_cookbook%2Fapp_analytics_cookbook_tcrm_da_recipe.png&folder=pkg2_dev)

1.  [Monitor the DailyAggregation CRM Analytics Recipe](atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_cookbook_tcrm_da_monitor.htm)
    CRM Analytics recipes can take a while to complete. Use these steps to monitor the status of your DailyAggregation recipe.
2.  [Run the DailyAggregation CRM Analytics Recipe](atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_cookbook_tcrm_da_schedule.htm)
    To create a reusable dataset, schedule your DailyAggregation CRM Analytics recipe to run on a regular basis. We recommend daily at midnight.

-   [← Previous](atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_cookbook_tcrm_da_prepare.htm "Create Your App Analytics Dataset")

## Related Topics

- Monitor the DailyAggregation CRM Analytics Recipe (atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_cookbook_tcrm_da_monitor.htm)
- Run the DailyAggregation CRM Analytics Recipe (atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_cookbook_tcrm_da_schedule.htm)
- ← Previous (atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_cookbook_tcrm_da_prepare.htm)
