---
title: "daysBetween()"
domain: bi-dev-guide-saql
topic: daysbetween
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.383Z
estimatedTokens: 317
keywords: [daysBetween, number, days, two, dates, function, foreach, statement, Usage]
---

# daysBetween()

> Returns the number of days between two dates. This function is only valid in a
            foreach statement.

# daysBetween()

Returns the number of days between two dates. This function is only valid in a foreach statement.

## Syntax

daysBetween(date1, date2)

date1 specifies the start date.

date2 specifies the end date.

## Usage

If date1 is after date2, the number of days returned is a negative number.

You must use daysBetween() in a foreach() statement. You cannot use this function in group by, order by, or filter statements.

## Example

How many days did it take to close each opportunity? Use daysBetween().

```

```

## Example

How long has each opportunity been open for, in days? Use daysBetween() and now().

```

```

#### See Also

-   [date\_diff()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_date_diff.htm "Returns the amount of time between two dates. This function is only valid in a foreach statement.")

-   [Calculate How Long Activities Take](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_examples_daysbetween.htm "Use daysBetween() and date_diff() to calculate the difference between two dates or times.")

-   [daysBetween(date1, date2)](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_timezone_days_between.htm "Returns the number of days between two dates as an integer.")

## Code Examples

```
q = load "DTC_Opportunity";
q = foreach q generate daysBetween(toDate(CreatedDate_sec_epoch), toDate(CloseDate_sec_epoch) ) as 'Days to Close';
q = order q by 'Days to Close';
```

```
q = load "DTC_Opportunity";
q = filter q by 'Closed' == "false";
q = foreach q generate daysBetween(toDate(CreatedDate_sec_epoch), now() ) as 'Days to Close';
q = order q by 'Days to Close';
```

## Related Topics

- date_diff() (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_date_diff.htm)
- Calculate How Long Activities Take (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_examples_daysbetween.htm)
- daysBetween(date1, date2) (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_timezone_days_between.htm)
