---
title: "First Day in the Week, Month, Quarter, or Year"
domain: bi-dev-guide-saql
topic: first-day-in-the-week-month-quarter-or-year
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:06.412Z
estimatedTokens: 610
keywords: [Day, Week, Month, Quarter, Year, date, Usage, _first, _day, fiscal, _week, _month, _quarter, _year]
---

# First Day in the Week, Month, Quarter, or Year

> Returns the date of the first day in the specified week, month, quarter, or
      year.

# First Day in the Week, Month, Quarter, or Year

Returns the date of the first day in the specified week, month, quarter, or year.

## Usage

Use these functions in a foreach() statement. You cannot use them in group by, order by, or filter statements.

Use the functions whose names begin with week, month, quarter, and year with standard calendar year dates. Use the functions whose names begin with fiscal with fiscal year dates.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_saql)

#### Note

You can't use fiscal date functions in recipes and dataflow transformations.

## week\_first\_day(date)

Returns the date of the first day of the week for the specified date.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_saql)

#### Note

This function always counts the firstDayOfWeek as 0 (Sunday). It overrides the firstDayOfWeek parameter for sfdcDigestTransformation and CSV uploads.

## fiscal\_week\_first\_day(date)

Returns the fiscal date of the first day of the week for the specified date.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_saql)

#### Note

This function respects the firstDayOfWeek parameter for sfdcDigestTransformation and CSV uploads. The default value is 0 (Sunday).

## month\_first\_day(date)

Returns the date of the first day of the month for the specified date.

```

```

## fiscal\_month\_first\_day(date)

Returns the fiscal date of the first day of the month for the specified date.

```

```

## quarter\_first\_day(date)

Returns the date of the first day of the quarter for the specified date.

```

```

## fiscal\_quarter\_first\_day(date)

Returns the fiscal date of the first day of the quarter for the specified date.

```

```

## year\_first\_day(date)

Returns the date of the first day of the year for the specified date.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=bi_dev_guide_saql)

#### Note

This function always returns 1st January.

## fiscal\_year\_first\_day(date)

Returns the fiscal date of the first day of the year for the specified date.

```

```

#### See Also

-   [https://help.salesforce.com/s/articleView?id=bi\_integrate\_date\_formats\_and\_fiscal\_dates.htm](https://help.salesforce.com/s/articleView?id=bi_integrate_date_formats_and_fiscal_dates.htm&language=en_US)

## Code Examples

```
q = foreach q generate week_first_day(toDate('CloseDate_sec_epoch')) as 'Week First Day';
```

```
q = foreach q generate fiscal_week_first_day(toDate('CloseDate_sec_epoch')) as 'Fiscal Week First Day';
```

```
q = foreach q generate month_first_day(toDate('CloseDate_sec_epoch')) as 'Month First Day';
```

```
q = foreach q generate fiscal_month_first_day(toDate('CloseDate_sec_epoch')) as 'Fiscal Month First Day';
```

```
q = foreach q generate quarter_first_day(toDate('CloseDate_sec_epoch')) as 'Quarter First Day';
```
