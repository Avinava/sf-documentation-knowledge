---
title: "SQL vs SAQL"
domain: bi-dev-guide-sql
topic: sql-vs-saql
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:07.322Z
estimatedTokens: 569
keywords: [SQL, SAQL, CRM, Analytics, Salesforce, Query, Language, languages, intended, Here's, their, different, behaviors, limitations]
---

# SQL vs SAQL

> SQL for CRM Analytics and Salesforce Analytics Query Language
    (SAQL) are
    both query languages intended for use with CRM Analytics. Here's a guide to their different
    behaviors and limitations.

# SQL vs SAQL

SQL for CRM Analytics and Salesforce Analytics Query Language (SAQL) are both query languages intended for use with CRM Analytics. Here's a guide to their different behaviors and limitations.

You can only write SQL queries against datasets.

SQL for CRM Analytics doesn't offer support for these features available in SAQL.

-   Random sampling
-   Cogrouping
-   SAQL functions string\_to\_number() and toString(). Type casting is unavailable in SQL for CRM Analytics.
-   Relative date filtering, for example, Closed\_Date in \["2 years ago".."1 day ago"\]
-   Date functions such as day\_in\_week(), date\_diff(), now(), date\_to\_epoch(), and date\_to\_string()tc

SQL and SAQL have the following differences in behavior.

-   In a grouped query, SQL returns a group for null values in a grouped query by default.
-   In SQL, counting all records in an empty dataset returns 0. In SAQL, it returns an empty response.
-   In SQL, the GROUPING() function can take multiple arguments. In SAQL, it takes one argument only.
-   SAQL’s DateOnly type corresponds with SQL for CRM Analytics’s Date type.
-   SAQL’s DateTime and Date types correspond with SQL’s Timestamp type.
-   In SQL, the Date and Timestamp types are treated as dates. In SAQL, when timezone is enabled, the DateOnly and DateTime types are treated as dates. When timezone isn’t enabled, the DateOnly and DateTime types are treated as strings.
-   When columns in a SELECT statement have the same data types, but different aliases, UNION ALL in SQL returns the results in a single column. In SAQL, union returns all of the columns.
-   If your values query (one without a grouping) includes aggregated and non-aggregated fields, SQL throws an error. SAQL handles such queries differently by taking the value of individual rows.

    In this example, City is a non-aggregated field. Count and sum\_Profit are aggregated fields.

    This SQL query throws an error.

    ```

    ```

    The corresponding SAQL query yields the sum of Profit for each City.

    ```

    ```


#### See Also

-   [*Analytics SAQL Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_intro.htm "Analytics SAQL Developer Guide - HTML (New Window)")

## Code Examples

```
SELECT City AS "City", COUNT(*) AS "Count", sum(Profit) AS "sum_Profit" 
FROM "Superstore"
LIMIT 100;
```

```
q = load "Superstore";
q = foreach q generate 'City' as 'City', count() as 'count', sum('Profit') as 'sum_Profit';
```
