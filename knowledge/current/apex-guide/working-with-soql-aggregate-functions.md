---
title: "Working with SOQL Aggregate Functions"
domain: apex-guide
topic: working-with-soql-aggregate-functions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:34.541Z
estimatedTokens: 641
keywords: [Working, SOQL, Aggregate, Functions, functions, such, SUM, MAX, allow, roll, summarize, data, query., Note]
---

# Working with SOQL Aggregate Functions

> Aggregate functions in SOQL, such as SUM() and MAX(), allow you to roll up and summarize your data in a query.

# Working with SOQL Aggregate Functions

Aggregate functions in SOQL, such as SUM() and MAX(), allow you to roll up and summarize your data in a query.

For more information on aggregate functions, see Aggregate Functions in the [Salesforce SOQL and SOSL Reference Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_agg_functions.htm "HTML (New Window)").

You can use aggregate functions without using a GROUP BY clause. For example, you could use the AVG() aggregate function to find the average Amount for all your opportunities.

```

```

Note that any query that includes an aggregate function returns its results in an array of AggregateResult objects. AggregateResult is a read-only sObject and is only used for query results.

Aggregate functions become a more powerful tool to generate reports when you use them with a GROUP BY clause. For example, you could find the average Amount for all your opportunities by campaign.

```

```

Any aggregated field in a SELECT list that does not have an alias automatically gets an implied alias with a format expri, where i denotes the order of the aggregated fields with no explicit aliases. The value of i starts at 0 and increments for every aggregated field with no explicit alias. For more information, see Using Aliases with GROUP BY in the [Salesforce SOQL and SOSL Reference Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.soql_sosl.meta/soql_sosl/ "HTML (New Window)").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Queries that include aggregate functions are still subject to the limit on total number of query rows. All aggregate functions other than COUNT() or COUNT(fieldname) include each row used by the aggregation as a query row for the purposes of limit tracking.

For COUNT() or COUNT(fieldname) queries, limits are counted as one query row, unless the query contains a GROUP BY clause, in which case one query row per grouping is consumed.

For information about the limits that apply to queries with for loop, see [SOQL For Loops](atlas.en-us.apexcode.meta/apexcode/langCon_apex_loops_for_SOQL.htm "SOQL for loops iterate over all of the sObject records returned by a SOQL query.").

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_foreign_key.htm "Understanding Foreign Key and Parent-Child Relationship SOQL Queries")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_VLSQ.htm "Working with Very Large SOQL Queries")

## Code Examples

```
AggregateResult[] groupedResults
  = [SELECT AVG(Amount)aver FROM Opportunity];
Object avgAmount = groupedResults[0].get('aver');
```

```apex
AggregateResult[] groupedResults
  = [SELECT CampaignId, AVG(Amount)
      FROM Opportunity
      GROUP BY CampaignId];
for (AggregateResult ar : groupedResults)  {
    System.debug('Campaign ID' + ar.get('CampaignId'));
    System.debug('Average amount' + ar.get('expr0'));
}
```

## Related Topics

- SOQL For Loops (atlas.en-us.apexcode.meta/apexcode/langCon_apex_loops_for_SOQL.htm)
- ← Previous (atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_foreign_key.htm)
- Next → (atlas.en-us.apexcode.meta/apexcode/langCon_apex_SOQL_VLSQ.htm)
