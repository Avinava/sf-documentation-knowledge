---
title: "Create a Custom Object Creates Per Day Recipe"
domain: pkg2-dev
topic: create-a-custom-object-creates-per-day-recipe
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:25.801Z
estimatedTokens: 281
keywords: [Custom, Creates, Per, Day, Recipe, produces, unique, count, how, times, created]
---

# Create a Custom Object Creates Per Day Recipe

> This recipe produces a unique count of how many times per day a custom object was
  created.

# Create a Custom Object Creates Per Day Recipe

This recipe produces a unique count of how many times per day a custom object was created.

In your org in Analytics Studio in CRM Analytics:

1.  In All items on the Datasets tab, select your DailyAggregation dataset.
2.  Select **Charts**.
3.  Click **Column** and leave Bar Length as **Count of Rows**.
4.  Under Bars, click **+** and search for **timestamp\_DMY**.
5.  Select **Year-Month-Day**.
6.  Click **Filters**.
7.  Click **+**.
8.  Select **custom\_entity\_type** equals **CustomObject**.
9.  Click **Apply**.
10.  Click **+**.
11.  Select **operation\_type** Equals **INSERT**.
12.  Click **Apply**.
13.  Click **Data**.
14.  Under Trellis, click **+**.
15.  Select **custom\_entity**.
16.  Click **Save**.
17.  Name your lens Custom Object Creates Per Day.
18.  Select your PartnerIntelligence app.
19.  Click **Save**.

## Example

![A sample Custom Object Creates Per Day CRM Analytics lens](/docs/resources/img/en-us/260.0?doc_id=appexchange%2Fimages%2Fapp_analytics_cookbook%2Fapp_analytics_cookbook_recipe_cou_creates.png&folder=pkg2_dev)

SAQL:

```

```

## Code Examples

```
q = load "DailyAggregation";
q = filter q by 'custom_entity_type' == "CustomObject";
q = filter q by 'operation_type' == "INSERT";
q = group q by ('timestamp_derived_DAY_formula_Year', 'timestamp_derived_DAY_formula_Month', 'timestamp_derived_DAY_formula_Day', 'custom_entity');
q = foreach q generate 'timestamp_derived_DAY_formula_Year' + "~~~" + 'timestamp_derived_DAY_formula_Month' + "~~~" + 'timestamp_derived_DAY_formula_Day' as 'timestamp_derived_DAY_formula_Year~~~timestamp_derived_DAY_formula_Month~~~timestamp_derived_DAY_formula_Day', 'custom_entity' as 'custom_entity', count() as 'count';
q = order q by ('timestamp_derived_DAY_formula_Year~~~timestamp_derived_DAY_formula_Month~~~timestamp_derived_DAY_formula_Day' asc, 'custom_entity' asc);
q = limit q 2000;
```
