---
title: "Date Functions"
domain: soql-sosl
topic: date-functions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:19.669Z
estimatedTokens: 1192
keywords: [Date, Functions, SOQL, queries, allow, group, filter, data, periods, day, calendar, month, fiscal, year]
---

# Date Functions

> Date functions in SOQL queries allow you to group or filter data by date periods such
    as day, calendar month, or fiscal year.

# Date Functions

Date functions in SOQL queries allow you to group or filter data by date periods such as day, calendar month, or fiscal year.

For example, you could use the CALENDAR\_YEAR() function to find the sum of the Amount values for all your opportunities for each calendar year.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=soql_sosl)

#### Note

SOQL queries in a client application return dateTime field values as Coordinated Universal Time (UTC) values. To convert dateTime field values to your default time zone, see [convertTimezone()](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_convert_time_zone.htm "SOQL queries in a client application return dateTime field values as Coordinated Universal Time (UTC) values. You can use convertTimezone() in a date function to convert dateTime fields to the user’s time zone.").

This table lists all the date functions supported by SOQL.

| Date Function | Description | Examples |
| --- | --- | --- |
| CALENDAR_MONTH() | Returns a number representing the calendar month of a date field. | 1 for January12 for December |
| CALENDAR_QUARTER() | Returns a number representing the calendar quarter of a date field. | 1 for January 1 through March 312 for April 1 through June 303 for July 1 through September 304 for October 1 through December 31 |
| CALENDAR_YEAR() | Returns a number representing the calendar year of a date field. | 2009 |
| DAY_IN_MONTH() | Returns a number representing the day in the month of a date field. | 20 for February 20 |
| DAY_IN_WEEK() | Returns a number representing the day of the week for a date field. | 1 for Sunday7 for Saturday |
| DAY_IN_YEAR() | Returns a number representing the day in the year for a date field. | 32 for February 1 |
| DAY_ONLY() | Returns a date representing the date portion of a dateTime field. | 2009-09-22 for September 22, 2009You can only use DAY_ONLY() with dateTime fields. |
| FISCAL_MONTH() | Returns a number representing the fiscal month of a date field. This differs from CALENDAR_MONTH() if your organization uses a fiscal year that does not match the Gregorian calendar.This function is not supported if your organization has custom fiscal years enabled. | If your fiscal year starts in March:1 for March12 for February |
| FISCAL_QUARTER() | Returns a number representing the fiscal quarter of a date field. This differs from CALENDAR_QUARTER() if your organization uses a fiscal year that does not match the Gregorian calendar.This function is not supported if your organization has custom fiscal years enabled. | If your fiscal year starts in July:1 for July 154 for June 6 |
| FISCAL_YEAR() | Returns a number representing the fiscal year of a date field. This differs from CALENDAR_YEAR() if your organization uses a fiscal year that does not match the Gregorian calendar.This function is not supported if your organization has custom fiscal years enabled. | 2009 |
| HOUR_IN_DAY() | Returns a number representing the hour in the day for a dateTime field. | 18 for a time of 18:23:10You can only use HOUR_IN_DAY() with dateTime fields. |
| WEEK_IN_MONTH() | Returns a number representing the week in the month for a date field. | 2 for April 10The first week is from the first through the seventh day of the month. |
| WEEK_IN_YEAR() | Returns a number representing the week in the year for a date field. | 1 for January 3The first week is from January 1 through January 7. |

Note the following when you use date functions:

-   You can use a date function in a WHERE clause to filter your results even if your query doesn't include a GROUP BY clause. The following query returns data for 2009:

    ```

    ```

-   You can't compare the result of a date function with a [date literal](atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_dateformats.htm "You can specify date values or date literals in WHERE clauses to filter SOQL query results. Dates represent a specific day or time, while date literals represent a relative range of time, such as last month, this week, or next year.") in a WHERE clause. The following query doesn't work:

    ```

    ```

-   You can't use a date function in a SELECT clause unless you also include it in the GROUP BY clause. There is an exception if the field used in the date function is a date field. You can use the date field instead of the date function in the GROUP BY clause. This doesn't work for dateTime fields. The following query doesn't work because CALENDAR\_YEAR(CreatedDate) is not in a GROUP BY clause:

    ```

    ```

    The following query works because the date field, CloseDate, is in the GROUP BY clause. This wouldn't work for a dateTime field, such as CreatedDate.

    ```

    ```

## Code Examples

```
SELECT CALENDAR_YEAR(CreatedDate), SUM(Amount)
FROM Opportunity
GROUP BY CALENDAR_YEAR(CreatedDate)
```

```
SELECT CreatedDate, Amount
FROM Opportunity
WHERE CALENDAR_YEAR(CreatedDate) = 2009
```

```
SELECT CreatedDate, Amount
FROM Opportunity
WHERE CALENDAR_YEAR(CreatedDate) = THIS_YEAR
```

```
SELECT CALENDAR_YEAR(CreatedDate), Amount
FROM Opportunity
```

```
SELECT CALENDAR_YEAR(CloseDate)
FROM Opportunity
GROUP BY CALENDAR_YEAR(CloseDate)
```

## Related Topics

- convertTimezone() (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_convert_time_zone.htm)
- date
						literal (atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_dateformats.htm)
