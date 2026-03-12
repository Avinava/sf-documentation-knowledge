---
title: "Create a Daily Unique Users Recipe"
domain: pkg2-dev
topic: create-a-daily-unique-users-recipe
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:25.815Z
estimatedTokens: 202
keywords: [Daily, Unique, Users, Recipe, produces, count, day]
---

# Create a Daily Unique Users Recipe

> This recipe produces a unique count of users by day.

# Create a Daily Unique Users Recipe

This recipe produces a unique count of users by day.

In your org in Analytics Studio in CRM Analytics:

1.  In All items on the Datasets tab, select your DailyAggregation dataset.
2.  Under Bar Length, click **Count of Rows**.
3.  Click **Unique**.
4.  Select **user\_id\_token**.
5.  Select **Charts**.
6.  Click **Column**.
7.  Under Bars, click **+** and search for timestamp\_DMY.
8.  Select **Year-Month-Day**.
9.  Click **Save**.
10.  Name your lens Daily Unique Users.
11.  Select your PartnerIntelligence app.
12.  Click **Save**.

## Example

![A sample Daily Unique Users CRM Analytics lens](/docs/resources/img/en-us/260.0?doc_id=appexchange%2Fimages%2Fapp_analytics_cookbook%2Fapp_analytics_cookbook_recipe_csm_dailyuu.png&folder=pkg2_dev)

SAQL:

```

```

## Code Examples

```
q = load "DailyAggregation";
q = group q by ('timestamp_derived_DAY_formula_Year', 'timestamp_derived_DAY_formula_Month', 'timestamp_derived_DAY_formula_Day');
q = foreach q generate 'timestamp_derived_DAY_formula_Year' + "~~~" + 'timestamp_derived_DAY_formula_Month' + "~~~" + 'timestamp_derived_DAY_formula_Day' as 'timestamp_derived_DAY_formula_Year~~~timestamp_derived_DAY_formula_Month~~~timestamp_derived_DAY_formula_Day', unique('user_id_token') as 'unique_user_id_token';
q = order q by 'timestamp_derived_DAY_formula_Year~~~timestamp_derived_DAY_formula_Month~~~timestamp_derived_DAY_formula_Day' asc;
q = limit q 2000;
```
