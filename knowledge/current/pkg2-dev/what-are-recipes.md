---
title: "What Are Recipes?"
domain: pkg2-dev
topic: what-are-recipes
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:25.874Z
estimatedTokens: 448
keywords: [Recipes, AppExchange, App, Analytics, Developer, Cookbook, uses, two, distinct, CRM, foundational, work, creating, build, recipe]
---

# What Are Recipes?

> The AppExchange App Analytics Developer Cookbook uses two distinct types of recipes: CRM
  Analytics recipes and App Analytics recipes. The CRM Analytics recipes are foundational work that
  you must complete before creating App Analytics recipes. App Analytics recipes build on your CRM
  Analytics recipe analytics environment and result in key performance indicators
  (KPIs).

# What Are Recipes?

The AppExchange App Analytics Developer Cookbook uses two distinct types of recipes: CRM Analytics recipes and App Analytics recipes. The CRM Analytics recipes are foundational work that you must complete before creating App Analytics recipes. App Analytics recipes build on your CRM Analytics recipe analytics environment and result in key performance indicators (KPIs).

| Available in: both Salesforce Classic and Lightning Experience |
| --- |
| Available in: Enterprise, Performance, Unlimited, and Developer Editions |


You can use any reporting tool to create KPIs, but we recommend our analytics powerhouse, CRM Analytics. With CRM Analytics, you can easily integrate your License Management App (LMA) data with your App Analytics data using datasets and CRM Analytics recipes.

## CRM Analytics Recipes

If you’re familiar with CRM Analytics, you’re familiar with dataflows and CRM Analytics recipes. Dataflows are great for combining data from multiple sources, while CRM Analytics recipes are great for performing transformations on a single dataset. To set up your App Analytics recipe environment, create CRM Analytics recipes that combine a country code dataset, your LMA data, and your App Analytics data. These CRM Analytics recipes are required to create App Analytics recipes.

## App Analytics Recipes

App Analytics recipes are CRM Analytics lens formulas with SAQL code provided. Each App Analytics recipe results in a KPI that you can use to visualize your data on a dashboard. Some examples include Daily and Monthly Active Users, and Custom Object Reads Per Day. Complete your CRM Analytics recipes before starting with App Analytics recipes.

-   [Next →](atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_cookbook_prework.htm "Before You Begin")

## Related Topics

- Next → (atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_cookbook_prework.htm)
