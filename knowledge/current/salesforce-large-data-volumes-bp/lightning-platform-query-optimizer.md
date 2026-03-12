---
title: "Lightning Platform Query Optimizer"
domain: salesforce-large-data-volumes-bp
topic: lightning-platform-query-optimizer
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:42.015Z
estimatedTokens: 1703
keywords: [Lightning, Platform, Query, Optimizer, Salesforce, multitenant, architecture, uses, underlying, database, way, system’s, can’t, effectively, optimize]
---

# Lightning Platform Query Optimizer

> The Salesforce multitenant architecture uses the underlying database in such a way that
  the database system’s optimizer can’t effectively optimize search queries. The Lightning Platform query optimizer helps the database’s optimizer
  produce effective  queries by providing efficient data access in Salesforce.

# Lightning Platform Query Optimizer

The Salesforce multitenant architecture uses the underlying database in such a way that the database system’s optimizer can’t effectively optimize search queries. The Lightning Platform query optimizer helps the database’s optimizer produce effective queries by providing efficient data access in Salesforce.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=salesforce_large_data_volumes_bp)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

The Lightning Platform query optimizer works on automatically generated queries that handle reports, list views, and SOQL queries. The optimizer also handles other queries that rely on these generated queries.

Specifically, the optimizer:

-   Determines the best index from which to drive the query, if possible, based on filters in the query
-   Determines the best table from which to drive the query, if no good index is available
-   Determines how to order the remaining tables to minimize cost
-   Injects custom foreign key value tables that are required to create efficient join paths
-   Influences the execution plan for the remaining joins, including sharing joins, to minimize database input and output (I/O)
-   Updates statistics

## Creating Efficient Queries

When you’re working with large volumes of data, it’s important to build efficient SOQL queries, reports, and list views, which all depend on selectivity and indexes. The Lightning Platform query optimizer determines filter condition selectivity for a SOQL query, report, or list view. With some simple SOQL queries, you can easily get the necessary statistics to determine whether a specific filter condition is selective. After you index a selective field, your queries with related filter conditions can execute more efficiently and your users can be more productive.

Review the following practical considerations for gauging the selectivity of your filter conditions.

## Determine the Selectivity of Your Filter Condition

To better understand selectivity, let’s use an example. You build a SOQL query, report, or list view for the Opportunity object, one of the largest objects in your org. You have a filter condition, for example, a WHERE clause that fetches only the rows you want from the object. Is your filter condition selective enough for the optimizer to use an available index?

With a simple SOQL query, you can quickly get the statistics that help you figure out whether a value in a given field is selective.

## Use SOQL to Determine the Selectivity of a Filter Condition

Consider a query that uses a basic, unary WHERE clause condition.

```

```

Using the query tool of your choice, for example the Developer Console Query Editor, execute the following query to get some statistics related to your filter condition’s selectivity. The following is a sample query for the Stagename field:

```

```

The result set shows you the distribution of records for each value of the Stagename picklist field, including the total number of records in the object. You now have the statistics necessary to determine the selectivity for a filter condition involving the Stagename field.

## Determine the Selectivity of More Complex Filter Conditions

Using GROUP BY ROLLUP in a query similar to the previous example makes it easy to get the necessary statistics to evaluate the selectivity of various conditions.

Here’s an example of a query with a more complex filter condition. This query uses a date field (CloseDate) along with the AND operator:

```

```

You already know the statistics for the Stagename field from the previous query. To get the same statistics for the CloseDate field, grouped by week for each year, use the following query.

```

```

The query returns statistics about the distribution of Opportunity records across every week of every year by CloseDate.

For filter conditions that combine two or more conditions (using AND), the query optimizer considers the overall filter condition selective when the filter targets less than:

-   Twice the selectivity thresholds for each filter
-   The selectivity thresholds for the intersection of those fields

For the third example in this topic, this means:

-   Status = ‘Closed Won’ is selective (49,899 < 150,000)
-   CloseDate = THIS\_WEEK is selective (~3000 < 150,000)

Overall, the filter condition is selective, for both of these reasons.

If one of the filter conditions is nonselective, for example, Status=’Closed Won’ corresponds to 250,000 records, two possibilities can make the overall filter condition selective.

-   Each filter condition corresponds to less than 300,000 records (twice the selectivity thresholds for each filter)
-   The intersection of Status=’Closed Won’ AND CloseDate = THIS\_WEEK is less than 150,000 records.

The filter condition in the example is less than 300,000 records, so the overall condition is selective.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=salesforce_large_data_volumes_bp)

#### Tip

With the OR operator, each filter must meet the threshold individually.

## Understand the Impact of Deleted Records on Selectivity

When gathering selectivity statistics, you can incorporate or exclude deleted records using the Boolean field, IsDeleted. This field is available in every standard and custom object.

The previous query that uses the ROLLUP function collects data for all Opportunity records. It doesn’t matter whether IsDeleted is true or false. To collect the selectivity statistics for Opportunity.StageName and explicitly exclude deleted records, try the following query.

```

```

**Make Sure Fields Have Indexes**

Before putting a query, report, or list view into production, confirm that a given filter condition is selective. However, the fields that make the condition selective must have indexes to be effective. Without the necessary indexes, the query optimizer must perform a full scan to fetch the target rows. The index can help make your query execute faster and improve the productivity of your org’s users.

The [Database Query & Search Optimization Cheat Sheet](https://resources.docs.salesforce.com/194/0/en-us/sfdc/pdf/salesforce_query_search_optimization_developer_cheatsheet.pdf) lists the standard fields that have an index by default, including Id, Name, OwnerId, CreatedDate, SystemModstamp, and RecordType, as well as all master-detail and lookup fields.

If your filter condition involves a custom field, work with Customer Support to create a custom index on the field your filter uses. Not all fields can have an index, such as non-deterministic formula fields.

## Code Examples

```
SELECT Id, Name FROM Opportunity
WHERE Stagename = 'Closed Won'
```

```
SELECT Stagename, COUNT(id) FROM Opportunity
GROUP BY ROLLUP (Stagename)
```

```
SELECT Id, Name FROM Opportunity
WHERE Stagename = 'Closed Won'
AND CloseDate = THIS_WEEK
```

```
SELECT WEEK_IN_YEAR(CloseDate), CALENDAR_YEAR(CloseDate), COUNT(id)
FROM Opportunity
GROUP BY ROLLUP(WEEK_IN_YEAR(CloseDate),CALENDAR_YEAR(CloseDate))
ORDER BY CALENDAR_YEAR(CloseDate), WEEK_IN_YEAR(CloseDate)
```

```
SELECT Stagename, COUNT(id) FROM Opportunity WHERE IsDeleted=false GROUP BY Stagename
```
