---
title: "Access Date Functions with Time Zone Enabled"
domain: bi-dev-guide-saql
topic: access-date-functions-with-time-zone-enabled
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:06.533Z
estimatedTokens: 407
keywords: [Access, Date, Functions, Time, Zone, Enabled, day, week, year, parts, DateTime, DateOnly, numbers, Examples]
---

# Access Date Functions with Time Zone Enabled

> Use these functions to get the day, week, year, and other parts of DateTime or DateOnly fields.
    The return values are numbers.

# Access Date Functions with Time Zone Enabled

Use these functions to get the day, week, year, and other parts of DateTime or DateOnly fields. The return values are numbers.

To enable Time Zone for your org, follow the directions in [Enable Custom Time Zones](https://help.salesforce.com/s/articleView?id=analytics.bi_setup_time_zone_support.htm&type=5&language=en_US).

For the allowed formats, see [Date Formats](atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_date_formats.htm "For Date fields, specify the format of the date by using one of the following supported formats. Dates must match the format exactly and can't have any extra text.").

-   year (DateTime | DateOnly)
-   quarter (DateTime | DateOnly)
-   month (DateTime | DateOnly)
-   week (DateTime | DateOnly)
-   day (DateTime | DateOnly)
-   hour (DateTime)
-   minute (DateTime)
-   second (DateTime)
-   fiscalYear (DateTime | DateOnly)
-   fiscalQuarter (DateTime | DateOnly)
-   fiscalMonth (DateTime | DateOnly)
-   fiscalWeek (DateTime | DateOnly)
-   epochDay (DateTime | DateOnly)
-   epochSecond( DateTime | DateOnly)

## Examples

Use year(), month(), and day() to project the year, month, and day for each record. CloseDate can be a DateTime or DateOnly type.

```

```

Use month() to find results that closed in December.

```

```

Use month() to order opportunities by month of close date.

```

```

For even more granularity, add hour(), minute(), and second() to project the time for each record. These functions can only be used with a DateTime type.

```

```

Use hour() to order opportunities by hour of close date.

```

```

## Code Examples

```
q = foreach q generate year('CloseDate') as "Year", month('CloseDate') as "Month", day('CloseDate') as "Day";
```

```
q = filter q by month('CloseDate') == 12;
```

```
q = order q by month('CloseDate');
```

```
q = foreach q generate year('CloseDate') as "Year", month('CloseDate') as "Month", day('CloseDate') as "Day", 
          hour('CloseDate') as "Hour", minute('CloseDate') as "Minute", second('CloseDate') as "Second";
```

```
q = order q by hour('CloseDate');
```

## Related Topics

- Date Formats (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_date_formats.htm)
