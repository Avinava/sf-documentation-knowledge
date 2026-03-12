---
title: "fill"
domain: bi-dev-guide-saql
topic: fill
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.760Z
estimatedTokens: 806
keywords: [fill, any, gaps, date, often, timeseries, statement, specifying, check, creates, row, missing, month, day, week]
---

# fill

> Use fill() to fill in any gaps in date fields.
        You most often use fill() before using the timeseries statement. By specifying the date fields to
        check, fill() creates a row that contains the missing
        month, day, week, quarter, or year and includes a null value. To include values outside the
        bounds of your data’s date range, specify a start date and end date to override existing
        limits. The function returns the missing date rows with null values.

# fill

Use fill() to fill in any gaps in date fields. You most often use fill() before using the timeseries statement. By specifying the date fields to check, fill() creates a row that contains the missing month, day, week, quarter, or year and includes a null value. To include values outside the bounds of your data’s date range, specify a start date and end date to override existing limits. The function returns the missing date rows with null values.

## Syntax

```

```

| Name | Description |
| --- | --- |
| resultSet | Required. The results of a query that serve as input to the fill() function. This resultSet must have non-null input, or the timeseries() statement fails when run. |
| dateCols | Required.date_fields—The date fields in which to check for gaps.The date format string accepts these values.'yearField', ‘'monthField', 'Y-M''yearField', 'quarterField', 'Y-Q''yearField', 'Y''yearField', 'weekField', 'Y-W''yearField', 'monthField', 'dayField', 'Y-M-D'startDate—The starting date value beyond the scope of your data's date range.endDate—The ending date value beyond the scope of your data's date range.You can use startDate and endDate together or one and not the other.If you leave out startDate, then the start date is the earliest date in your dataset.If you leave out endDate, then the end date is the latest date in your dataset.If startDate and endDate are within the bounds of your dataset, fill() ignores them. |
| partition | Optional. A named parameter used to split query results into smaller parts. The fill() function resets when the named parameter value changes. After each group of rows is completed for a given partition, fill() runs on the next partition. |

## Example

This example uses fill() to add missing quarter and year values to tourist data.

```

```

The query first returns the year, quarter, and number of tourists for each quarter. Based on the results from the first three years represented in the dataset, the only date data available is for the first quarter.

These are the results from q = load "TouristsData"; q = foreach q generate date\_Year, date\_Quarter, tourists;.

| year | quarter | tourists |
| --- | --- | --- |
| 2001 | 1 | 4127 |
| 2002 | 1 | 4173 |
| 2003 | 1 | 4621 |

fill() specifies in the date\_cols array to group the input data by the quarter and year. To have a complete dataset of years and quarters, fill() adds the 2nd, 3rd, and 4th quarters for each year and a null value for the number of tourists.

| year | quarter | tourists |
| --- | --- | --- |
| 2001 | 1 | 4127 |
| 2001 | 2 | - |
| 2001 | 3 | - |
| 2001 | 4 | - |
| 2002 | 1 | 4173 |
| 2002 | 2 | - |
| 2002 | 3 | - |
| 2002 | 4 | - |
| 2003 | 1 | 4621 |
| 2003 | 2 | - |
| 2003 | 3 | - |
| 2003 | 4 | - |

## Example with Extended Date Range

This query returns null values for tourists where date\_Month and date\_Year come before or after the date values in the dataset or there are gaps within the data provided.

```

```

| date_Month | date_Year | tourists |
| --- | --- | --- |
| 10 | 2000 | - |
| 11 | 2000 | - |
| 12 | 2000 | - |
| 01 | 2001 | 41,735 |
| 02 | 2001 | - |
| 03 | 2001 | - |
| 04 | 2001 | 26,665 |
| 05 | 2001 | - |
| 06 | 2001 | - |
| 07 | 2001 | - |

## Code Examples

```
results = fill resultSet by (dateCols=(dateField1, dateField2, "<date format>"), startDate=startDate, endDate=endDate, [partition])
```

```
q = load "TouristsData";
q = foreach q generate date_Year, date_Quarter, tourists;
q = fill q by (dateCols=(date_Year, date_Quarter, "Y-Q"));
q = limit q 15;
```

```
q = load "TouristsData";
q = foreach q generate date_Year, date_Month, tourists;
q = fill q by (dateCols=(date_Year, date_Month, "Y-M"), startDate="2000-10", endDate="2001-07");
q = limit q 10;
```

## Related Topics

- timeseries() (atlas.en-us.bi_dev_guide_saql.meta/bi_dev_guide_saql/bi_saql_statement_timeseries.htm)
