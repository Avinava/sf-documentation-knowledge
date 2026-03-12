---
title: "Display the Opportunities Closed This Month"
domain: bi-dev-guide-saql
topic: display-the-opportunities-closed-this-month
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.392Z
estimatedTokens: 480
keywords: [Display, Opportunities, Closed, Month, relative, date, ranges, filter, current]
---

# Display the Opportunities Closed This Month

> Use relative date ranges to filter opportunities closed in the current
        month.

# Display the Opportunities Closed This Month

Use relative date ranges to filter opportunities closed in the current month.

## Example: Display Opportunities Closed This Month

Suppose that you want to see which opportunities closed this month. Your data includes the account name, the close date fields, and the epoch seconds field.

![Diagram showing the number of days each account has been opened for.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_saql_dates_data.png&folder=bi_dev_guide_saql)

Use date() to generate the close date in date format. Then use relative date ranges to filter opportunities closed in the current month.

```

```

If the query is run in May 2018, the resulting data stream contains one entry:

![Screenshot displaying opportunities closed in the current month, with seconds epoch time.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_saql_date_closed.png&folder=bi_dev_guide_saql)

To add the close date in a readable format, use toDate().

```

```

The resulting data stream includes the full date and time of the close date.

![Screenshot displaying opportunities closed in the current month, with seconds epoch.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_saql_date_example_result1.png&folder=bi_dev_guide_saql)

You can also display just the month and day of the close date.

```

```

The resulting data stream contains the month and day of the close date.

![Screenshot displaying opportunities closed in the current month, with close date and day.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_saql_date_example_result.png&folder=bi_dev_guide_saql)

#### See Also

-   [Time-Based Filtering](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_daterange.htm "SAQL gives you many ways to specify the range of dates that you want to look at, such as \"all ops from the last fiscal quarter\" or \"all cases from the last seven days\".")

## Code Examples

```
q = load "OpsDates1";
q = filter q by date(’CloseDate_Year’, ‘CloseDate_Month’, ‘CloseDate_Day’) in ["current month" .. "current month"];
q = foreach q generate Account;
```

```
q = load "OpsDates1";
q = filter q by date('CloseDate_Year', 'CloseDate_Month', 'CloseDate_Day') in ["current month" .. "current month"];
q = foreach q generate Account, toDate('CloseDate_sec_epoch') as 'Close Date';
```

```
q = load "OpsDates1";
q = filter q by date('CloseDate_Year', 'CloseDate_Month', 'CloseDate_Day') in ["current month" .. "current month"];
q = foreach q generate Account, 'CloseDate_Month' + "/" + 'CloseDate_Day' as 'Close Date';
```

## Related Topics

- Time-Based Filtering (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_daterange.htm)
