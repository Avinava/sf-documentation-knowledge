---
title: "Filter By Date"
domain: bi-dev-guide-saql
topic: filter-by-date
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.569Z
estimatedTokens: 536
keywords: [Filter, Date, results, DateTime, DateOnly, Filters, include, exact, dates, specific, ranges, relative]
---

# Filter By Date

> You can filter results by DateTime and DateOnly fields. Filters can include exact dates, specific date
    ranges, or relative date ranges.

# Filter By Date

You can filter results by DateTime and DateOnly fields. Filters can include exact dates, specific date ranges, or relative date ranges.

| Type of Filter | Example |
| --- | --- |
| exact date range | q = filter q by year('CloseDate')=='2018'; |
| specific date range | q = filter q by year('CloseDate') in [2017..2018]; |
| relative date range | q = filter q by CloseDate in ["last 2 years"]; q = filter CloseDate in ["current fiscal_year".."current day"]; q = filter CloseDate in ["2 fiscal_years ago".."current day"]; |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_saql)

#### Note

Filter with binary comparison operators \==, !=, <, \>, <=, and \>= only after your query’s foreach statement, post-projection. For example, include the filter q = filter q by CloseDate >= "2014-01-01" post-projection. If you include it pre-projection, the query throws an error. The inability to include filters that use these comparison operators pre-projection is a limitation of the beta release.

You can filter pre- and post-projection with the IN comparison operator. The like and matches operators are not supported for time zone-enabled DateTime and DateOnly fields.

You can use these relative date keywords:

-   current day
-   n day(s) ago
-   n day(s) ahead
-   current week
-   n week(s) ago
-   n week(s) ahead
-   current month
-   n month(s) ago
-   n month(s) ahead
-   current quarter
-   n quarter(s) ago
-   n quarter(s) ahead
-   current fiscal\_quarter
-   n fiscal\_quarter(s) ago
-   n fiscal\_quarter(s) ahead
-   current year
-   n year(s) ago
-   n year(s) ahead
-   current fiscal\_year
-   n fiscal\_year(s) ago
-   n fiscal\_year(s) ago

#### See Also

-   [filter](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_filter.htm "Selects rows from a dataset based on a filter predicate.")

-   [Comparison Operators](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_operators_comparison.htm "Use comparison operators to compare values of the same type. For example, you can compare strings with strings and numbers with numbers.")

## Code Examples

```
q = filter q by CloseDate in ["last 2 years"];
q = filter CloseDate in ["current fiscal_year".."current day"];
q = filter CloseDate in ["2 fiscal_years ago".."current day"];
```

## Related Topics

- filter (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_filter.htm)
- Comparison Operators (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_operators_comparison.htm)
