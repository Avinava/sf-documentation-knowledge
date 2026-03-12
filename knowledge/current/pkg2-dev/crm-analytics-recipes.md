---
title: "CRM Analytics Recipes"
domain: pkg2-dev
topic: crm-analytics-recipes
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:25.854Z
estimatedTokens: 648
keywords: [CRM, Analytics, Recipes, org, AppExchange, App, building, environment, country-codes, dataset, two, produce, subscriber, info, aggregate]
---

# CRM Analytics Recipes

> Set up your org to create AppExchange App Analytics recipes by building your CRM
  Analytics environment. You first create a country-codes dataset. Then you create two CRM Analytics
  recipes to produce a dataset of your subscriber info, and an aggregate dataset of all of your
  daily data.

# CRM Analytics Recipes

Set up your org to create AppExchange App Analytics recipes by building your CRM Analytics environment. You first create a country-codes dataset. Then you create two CRM Analytics recipes to produce a dataset of your subscriber info, and an aggregate dataset of all of your daily data.

| Available in: both Salesforce Classic and Lightning Experience |
| --- |
| Available in: Enterprise, Performance, Unlimited, and Developer Editions |


-   The first CRM Analytics recipe, LMAJoin, combines package and license data from your LMA with your accounts and leads. It produces a dataset of your subscribers.
-   The second CRM Analytics recipe, DailyAggregation, joins the LMAJoin dataset with your App Analytics data. It produces the DailyAggregation dataset. All your App Analytics recipes are built on top of your DailyAggregation dataset.

1.  [Create the Country-Codes Dataset](atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_cookbook_tcrm_country_codes.htm)
    To create visualizations of your country-based data in map format, you normalize the LMA country-code data to CRM Analytics country-code format.
2.  [Connect to Your License Management App Data](atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_cookbook_tcrm_lma_data.htm)
    Create an SFDC\_Local connection to your License Management App (LMA) data.
3.  [Create the LMAJoin CRM Analytics Recipe](atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_cookbook_tcrm_lmajoin.htm)
    Create a CRM Analytics recipe that contains your License Management App (LMA) data.
4.  [Create Your App Analytics Dataset](atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_cookbook_tcrm_da_prepare.htm)
    Create a RawPackageLogFile App Analytics dataset using your RawPackageLogFile.csv file.
5.  [Create Your DailyAggregation CRM Analytics Recipe](atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_cookbook_tcrm_da_recipe_detail.htm)
    You join your raw package log file data with your License Management App (LMA) data to create the DailyAggregation CRM Analytics recipe. The recipe produces a dataset called DailyAggregation that you use to create App Analytics recipes.

-   [← Previous](atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_cookbook_prework.htm "Before You Begin")
-   [Next →](atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_cookbook_recipe_intro.htm "App Analytics Recipes")

#### See Also

-   [Explore Data and Take Action with CRM Analytics](https://help.salesforce.com/articleView?id=analytics.bi.htm&type=5&language=en_US "Explore Data and Take Action with CRM Analytics - HTML (New Window)")

## Related Topics

- Create the Country-Codes Dataset (atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_cookbook_tcrm_country_codes.htm)
- Connect to Your License Management App Data (atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_cookbook_tcrm_lma_data.htm)
- Create the LMAJoin CRM Analytics Recipe (atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_cookbook_tcrm_lmajoin.htm)
- Create Your App Analytics Dataset (atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_cookbook_tcrm_da_prepare.htm)
- Create Your DailyAggregation CRM Analytics Recipe (atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_cookbook_tcrm_da_recipe_detail.htm)
- ← Previous (atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_cookbook_prework.htm)
- Next → (atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_cookbook_recipe_intro.htm)
