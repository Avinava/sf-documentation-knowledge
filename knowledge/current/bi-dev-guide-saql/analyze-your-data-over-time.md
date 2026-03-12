---
title: "Analyze Your Data Over Time"
domain: bi-dev-guide-saql
topic: analyze-your-data-over-time
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.285Z
estimatedTokens: 310
keywords: [Analyze, Data, Over, Time, SAQL, date, functions, advanced, time-based, analysis, Weekday, Customers, Send, Emails]
---

# Analyze Your Data Over Time

> Use SAQL date functions for advanced time-based analysis.

# Analyze Your Data Over Time

Use SAQL date functions for advanced time-based analysis.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_saql)

#### Note

You can use date filters in the dashboard for basic time-based analysis, for example to calculate month-to-date amounts. You can also use window functions in the dashboard for basic date range calculations, such as calculating the change in year-over-year earnings

## Example - on Which Weekday Do Customers Send the Most Emails?

Suppose that you want to see which day of the week your customers are most active on email. This information allows you to better target your email campaigns. Use day\_in\_week() on the Mail\_sent\_sec\_epoch field to calculate the day of the week, then count the number of records for each day.

```

```

In this case, email traffic is slightly higher on day 4 (Wednesday) and day 7 (Sunday).

![Derived dimension shows time to win](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_saql_num_emails.png&folder=bi_dev_guide_saql)

#### See Also

-   [Date Functions](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_date.htm "Use SAQL date functions to perform time-based analysis.")

## Code Examples

```
q = load "DTC_Opportunity_SAMPLE";
q = foreach q generate day_in_week(toDate(’Mail_sent_sec_epoch’)) as 'Day in Week';
q = group q by 'Day in Week';
q = foreach q generate 'Day in Week', count() as 'count';
```

## Related Topics

- Date Functions (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_date.htm)
