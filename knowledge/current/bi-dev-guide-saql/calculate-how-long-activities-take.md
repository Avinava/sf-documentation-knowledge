---
title: "Calculate How Long Activities Take"
domain: bi-dev-guide-saql
topic: calculate-how-long-activities-take
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.288Z
estimatedTokens: 382
keywords: [Calculate, How, Long, Activities, Take, daysBetween, date_diff, difference, two, dates, times, Display, Number, Days, Since]
---

# Calculate How Long Activities Take

> Use daysBetween() and date_diff() to calculate the difference between two
            dates or times.

# Calculate How Long Activities Take

Use daysBetween() and date\_diff() to calculate the difference between two dates or times.

## Example: Display the Number of Days Since an Opportunity Opened

Suppose that you have an opportunity dataset with the account name and the epoch seconds fields:

![Diagram showing the opportunity dataset.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_saql_date_opp_dataset.png&folder=bi_dev_guide_saql)

You want to see how many days ago an opportunity was opened. Use daysBetween() and now(). Use toDate() to convert the order date epoch seconds to a date format that can be passed to daysBetween().

```

```

The resulting data stream displays the number of days since the opportunity was opened.

![Diagram showing the number of days each account has been opened for.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_saql_date_daysopened.png&folder=bi_dev_guide_saql)

## Example - How Many Weeks Did Each Opportunity Take to Close?

Use date\_diff() with datepart = week to calculate how long, in weeks, it took to close each opportunity.

```

```

#### See Also

-   [daysBetween()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_date_between.htm "Returns the number of days between two dates. This function is only valid in a foreach statement.")

-   [date\_diff()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_date_diff.htm "Returns the amount of time between two dates. This function is only valid in a foreach statement.")

## Code Examples

```
q = load "OpsDates1";

q = foreach q generate Account, daysBetween(toDate(OrderDate_sec_epoch), now()) as 'daysOpened';
```

```
q = load "DTC_Opportunity";
q = foreach q generate date_diff("week", toDate(CreatedDate_sec_epoch), toDate(CloseDate_sec_epoch) ) as 'Weeks to Close';
q = order q by 'Weeks to Close';
```

## Related Topics

- daysBetween() (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_date_between.htm)
- date_diff() (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_date_diff.htm)
