---
title: "Customer Success Recipes"
domain: pkg2-dev
topic: customer-success-recipes
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:25.819Z
estimatedTokens: 476
keywords: [Customer, Success, Recipes, relationship-focused, ensuring, customers, achieve, their, desired, outcomes, managed, packages]
---

# Customer Success Recipes

> Customer success is a relationship-focused method of ensuring that your customers
  achieve their desired outcomes while using your managed packages.

# Customer Success Recipes

Customer success is a relationship-focused method of ensuring that your customers achieve their desired outcomes while using your managed packages.

| Available in: both Salesforce Classic and Lightning Experience |
| --- |
| Available in: Enterprise, Performance, Unlimited, and Developer Editions |


To measure customer success, you can create metrics that help you understand:

-   Overall managed package usage
-   Depth of managed package usage
-   Growth
-   Length of time as a customer
-   Number of renewals
-   Number of upsells
-   Overall relationship

As you learn more about your customers and how they use your managed packages, your list of customer success metrics expands.

To analyze user behavior, we rely on user-related and CRUD (create, read, update, and delete) App Analytics data fields to calculate metrics. All user behavior calculations rely on how a unique user is defined.

-   An individual that has used your managed package and its components
-   Measured for a specified time period, such as a day, month, or year

An active user can be defined as: A user who has logged some type of package usage, such as CRUD activity, page views, or Lightning interactions, during a specified time period.

Segment the unique and active users by time period, such as day, month, or quarter.

-   **[Create a Daily Unique Users Recipe](atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_cookbook_recipe_csm_dailyuu.htm)**
    This recipe produces a unique count of users by day.
-   **[Create a Weekly Unique Users Recipe](atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_cookbook_recipe_csm_weeklyuu.htm)**
    This recipe produces a unique count of users by week.
-   **[Create a Monthly Unique Users Recipe](atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_cookbook_recipe_csm_monthlyuu.htm)**
    This recipe produces a unique count of users by month.

## Related Topics

- Create a Daily Unique Users Recipe (atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_cookbook_recipe_csm_dailyuu.htm)
- Create a Weekly Unique Users Recipe (atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_cookbook_recipe_csm_weeklyuu.htm)
- Create a Monthly Unique Users Recipe (atlas.en-us.pkg2_dev.meta/pkg2_dev/app_analytics_cookbook_recipe_csm_monthlyuu.htm)
