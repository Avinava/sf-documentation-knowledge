---
title: "SAQL Null Measures and Dimensions"
domain: bi-dev-guide-saql
topic: saql-null-measures-and-dimensions
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:06.641Z
estimatedTokens: 428
keywords: [SAQL, Measures, Dimensions, CRM, Analytics, measure, handling, add, numeric, columns, datasets, grouped, queries]
---

# SAQL Null Measures and Dimensions

> With CRM Analytics, you can use null measure handling to add null as the default value
    for numeric columns in datasets. Use null dimensions to return grouped null values from your
    SAQL queries.

# SAQL Null Measures and Dimensions

With CRM Analytics, you can use null measure handling to add null as the default value for numeric columns in datasets. Use null dimensions to return grouped null values from your SAQL queries.

## Measures

With null measure handling, you can specify null as the default value for numeric columns in recipes, dataflows, and CSV uploads. When another default value isn’t specified for a numeric column, null measure handling allows CRM Analytics to replace a blank value with a null value. Null support in measures doesn’t require extra indexing.

To enable this setting, from Setup, in the Quick Find box, enter Analytics, select **Settings**, and then select **Allow null measure handling in datasets**. If CRM Analytics was initially set up in your org after the Spring ’17 release, this setting is enabled by default and you can’t disable it.

## Dimensions

You can include null dimensions in your datasets. When a record’s dimension or date field is left blank, it appears as a hyphen in explorer and dashboard designer charts and tables. Previously, SAQL queries were limited to non-null values. For non-grouping queries we return null keys regardless of whether the setting is enabled. This feature is distinct from the null handling for measures preference.

To enable this setting, from Setup, in the Quick Find box, enter Analytics, select **Settings**, and then select **Include null values in CRM Analytics queries**. Then, refresh your datasets. To return grouped null values in your queries, select the null handling for dimensions preference in Setup.

Here’s an example of using the SAQL group-by function with the null handling preference enabled.

```

```

## Code Examples

```
q = load "Superstore";
        q = group q by 'Sub_Category';
        q = foreach q generate 'Sub_Category' as 'Sub_Category', count() as 'count';
        q = order q by 'Sub_Category' asc nulls first;
        q = limit q 2000;
```
