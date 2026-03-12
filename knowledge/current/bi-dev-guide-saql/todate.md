---
title: "toDate()"
domain: bi-dev-guide-saql
topic: todate
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.598Z
estimatedTokens: 612
keywords: [toDate, Converts, Unix, epoch, seconds, date, another, function, daysBetween, cannot, filter, Display, Exact, Opportunity, Opened]
---

# toDate()

> Converts a string or Unix epoch seconds to a date. Returns a date that can be used in
        another function such as daysBetween(​). The returned
        date cannot be used in a filter.

# toDate()

Converts a string or Unix epoch seconds to a date. Returns a date that can be used in another function such as daysBetween(​). The returned date cannot be used in a filter.

## Syntax

toDate(string, \[”format"\])

If a format argument isn’t provided, the function uses the format yyyy-MM-dd HH:mm:ss. format is only valid for converting date string values.

For the allowed formats, see [Date Formats](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_date_formats.htm "For Date fields, specify the format of the date by using one of the following supported formats. Dates must match the format exactly and can't have any extra text.").

toDate(epoch\_seconds)

The format argument is not valid for converting epoch\_seconds numerical values.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_saql)

#### Note

Be sure to use the sec\_epoch field and not the day\_epoch field.

## Example: Display the Exact Date an Opportunity Opened

Suppose that you want to see the exact day that an opportunity opened. Use toDate() with CreatedDate\_Year, CreatedDate\_Month, CreatedDate\_Day, and an accepted date format. This query will resemble the example below:

```

```

## Example: Display the Number of Days Since an Opportunity Opened

Suppose that you have an opportunity dataset with the account name and the epoch seconds fields:

![Diagram showing the opportunity dataset.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_saql_date_opp_dataset.png&folder=bi_dev_guide_saql)

You want to see how many days ago an opportunity was opened. Use daysBetween() and now(). Use toDate() to convert the order date epoch seconds to a date format that can be passed to daysBetween().

```

```

The resulting data stream displays the number of days since the opportunity was opened.

![Diagram showing the number of days each account has been opened for.](/docs/resources/img/en-us/260.0?doc_id=images%2Fbi_saql_date_daysopened.png&folder=bi_dev_guide_saql)

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_saql)

#### Note

Because dates are sorted lexicographically, changing the date format also changes the sort order.

#### See Also

-   [date()](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_datefilter.htm "Returns a date that can be used in a filter. This function takes a year, a month, and a day dimension as input.")

## Code Examples

```
q = load "oppty";
q = foreach q generate toDate(CreatedDate_Year + "/" + CreatedDate_Month + "/" + CreatedDate_Day, "yyyy/MM/dd") as CreatedDate;
q = order q by 'CreatedDate';
```

```
q = load "OpsDates1";

q = foreach q generate Account, daysBetween(toDate(OrderDate_sec_epoch), now()) as 'daysOpened';
```

## Related Topics

- Date Formats (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_date_formats.htm)
- date() (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_functions_datefilter.htm)
