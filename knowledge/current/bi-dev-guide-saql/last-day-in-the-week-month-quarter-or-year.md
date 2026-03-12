---
title: "Last Day in the Week, Month, Quarter, or Year"
domain: bi-dev-guide-saql
topic: last-day-in-the-week-month-quarter-or-year
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:06.418Z
estimatedTokens: 620
keywords: [Day, Week, Month, Quarter, Year, date, Usage, _last, _day, fiscal, _week, _month, _quarter, _year]
---

# Last Day in the Week, Month, Quarter, or Year

> Returns the date of the last day in the specified week, month, quarter, or
        year.

# Last Day in the Week, Month, Quarter, or Year

Returns the date of the last day in the specified week, month, quarter, or year.

## Usage

Use these functions in a foreach() statement. You cannot use them in group by, order by, or filter statements.

Use the functions whose names begin with week, month, quarter, and year with standard calendar year dates. Use the functions whose names begin with fiscal with fiscal year dates.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_saql)

#### Note

You can't use fiscal date functions in recipes and dataflow transformations.

## week\_last\_day(date)

Returns the date of the last day of the week for the specified date.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_saql)

#### Note

This function always counts the firstDayOfWeek as 0 (Sunday). It overrides the firstDayOfWeek parameter for sfdcDigestTransformation and CSV uploads.

```

```

## fiscal\_week\_last\_day(date)

Returns the fiscal date of the last day of the week for the specified date.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_saql)

#### Note

This function respects the firstDayOfWeek parameter for sfdcDigestTransformation and CSV uploads. The default value is 0 (Sunday).

```

```

## month\_last\_day(date)

Returns the date of the last day of the month for the specified date.

```

```

## fiscal\_month\_last\_day(date)

Returns the fiscal date of the last day of the month for the specified date.

```

```

## quarter\_last\_day(date)

Returns the date of the last day of the quarter for the specified date.

```

```

## fiscal\_quarter\_last\_day(date)

Returns the fiscal date of the last day of the quarter for the specified date.

```

```

## year\_last\_day(date)

Returns the date of the last day of the year for the specified date.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_saql)

#### Note

This function always returns 31st December. You can use it to find the number of days to the year end.

## fiscal\_year\_last\_day(date)

Returns the fiscal date of the last day of the year for the specified date.

```

```

#### See Also

-   [https://help.salesforce.com/s/articleView?id=bi\_integrate\_date\_formats\_and\_fiscal\_dates.htm](https://help.salesforce.com/s/articleView?id=bi_integrate_date_formats_and_fiscal_dates.htm&language=en_US)

## Code Examples

```
q = foreach q generate week_last_day(toDate('CloseDate_sec_epoch')) as 'Week Last Day';
```

```
q = foreach q generate fiscal_week_last_day(toDate('CloseDate_sec_epoch')) as 'Fiscal Week Last Day';
```

```
q = foreach q generate month_last_day(toDate('CloseDate_sec_epoch')) as 'Month Last Day';
```

```
q = foreach q generate fiscal_month_last_day(toDate('CloseDate_sec_epoch')) as 'Fiscal Month Last Day';
```

```
q = foreach q generate quarter_last_day(toDate('CloseDate_sec_epoch')) as 'Quarter Last Day';
```
